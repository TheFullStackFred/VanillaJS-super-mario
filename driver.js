const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
let indexValue = params['/index']

fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers')
  .then((response) => response.json())
  .then((result) => {
    console.log('drivers: ', result[indexValue])
    let driverObject = result[indexValue]

    let driver = driverObject.name
    let driverUl = document.getElementById('driverInfo')
    let skillsList = document.createElement('li')
    skillsList.innerHTML = 'Name: ' + driver
    driverUl.appendChild(skillsList)

    let rarity = driverObject.rarity
    let li2 = document.createElement('li')
    driverUl.appendChild(li2)
    li2.textContent = 'Rarity: ' + rarity

    let specialSkill = driverObject.special_skill
    let li3 = document.createElement('li')
    li3.innerHTML = 'Special skill: ' + specialSkill
    driverUl.appendChild(li3)
  })

let btn = document.getElementById('homeBtn')
function homepage() {
  location.href = 'index.html'
}
btn.addEventListener('click', homepage)
