const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries())
let indexValue = params['/index']
// Hämtar ut söknycklarna för att hämta dom på denna sidan




fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/courses')
    .then((response) => response.json())
    .then((result) => {
        console.log('track: ', result[indexValue])
        let trackObject = result[indexValue]

        let track = trackObject.name
        let trackUl = document.getElementById('raceTrackInfo')
        let trackList = document.createElement('li')
        trackList.innerHTML = 'Name: ' + track
        trackUl.appendChild(trackList)

        let debutTour = trackObject.debut_tour
        let li2 = document.createElement('li')
        trackUl.appendChild(li2)
        li2.textContent = 'Debut Tour: ' + debutTour

        let debutGame = trackObject.debut_game
        let li3 = document.createElement('li')
        li3.innerHTML = 'Debut Game: ' + debutGame
        trackUl.appendChild(li3)
    })




let btn = document.getElementById('homeBtn')
function homepage() {
    location.href = "index.html"
}
btn.addEventListener('click', homepage)
