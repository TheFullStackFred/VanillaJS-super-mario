fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers')
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    let babyMario = result[0].position
    let babyPeach = result[1].position
    let babyDaisy = result[2].position
    let babyRosalina = result[3].position

    Chart.defaults.color = 'white'
    let myChart = document.getElementById('myChart').getContext('2d')
    let positions = new Chart(myChart, {
      type: 'bar',
      data: {
        labels: ['Baby Mario', 'Baby Peach', 'Baby Daisy', 'Baby Rosalina'],
        datasets: [
          {
            label: 'Drivers position',
            data: [babyMario, babyPeach, babyDaisy, babyRosalina],
            backgroundColor: ['springgreen', 'yellow', 'purple', 'orange'],
            borderColor: ['black'],
            borderWidth: 2,
            hoverBorderWidth: 4,
            hoverBorderColor: 'black'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  })

let btn = document.getElementById('homeBtn')

function homepage() {
  location.href = 'index.html'
}
btn.addEventListener('click', homepage)
