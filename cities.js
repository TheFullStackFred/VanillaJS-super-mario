fetch(`https://avancera.app/cities/`, {
  body: JSON.stringify(),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET'
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result)

    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name)
      let cities = result[i].name
      let id = result[i].id
      let li = document.createElement('li')
      ol = document.getElementById('citiesList')
      ol.appendChild(li)
      li.innerHTML = cities
      let get = document.getElementById('get')
      let getButton = document.getElementById('getButton')

      function getCities() {
        if (get.value === id) {
          document.body.textContent = cities
        }
      }
      getButton.addEventListener('click', getCities)
    }

    function postCities() {
      let post = document.getElementById('postCity')
      let pop = document.getElementById('postPopulation')
      let _data = {
        name: 'post.value',
        population: pop.value
      }
      fetch('https://avancera.app/cities/', {
        body: `{ "name": "${post.value}", "population": ${pop.value} }`,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
        })
    }
    let postButton = document.getElementById('postButton')
    postButton.addEventListener('click', postCities)

    function PatchCities() {
      let id = document.getElementById('PatchId')
      // let name = document.getElementById('PatchCity')
      let pop = document.getElementById('PatchPopulation')
      fetch('https://avancera.app/cities/' + id.value, {
        body: `{ "id": "${id.value}", "population": ${pop.value} }`,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PATCH'
      }).then((response) => {
        console.log(response)
      })
    }
    let PatchButton = document.getElementById('PatchButton')
    PatchButton.addEventListener('click', PatchCities)

    function deleteCity() {
      let deleteId = document.getElementById('deleteId')
      console.log(deleteId.value)
      fetch('https://avancera.app/cities/' + deleteId.value, {
        method: 'DELETE'
      }).then((response) => {
        console.log(response)
      })
    }

    let deleteButton = document.getElementById('deleteButton')
    deleteButton.addEventListener('click', deleteCity)
  })

let btn = document.getElementById('homeBtn')

function homepage() {
  location.href = 'index.html'
}
btn.addEventListener('click', homepage)
