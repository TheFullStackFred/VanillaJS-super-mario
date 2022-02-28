fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers')
    .then((response) => response.json())
    .then((result) => {
        console.log('drivers: ', result[0].name)
        for (let i = 0; i < result.length; i++) {
            let driver = result[i].name
            let driverLinks = document.createElement('a')
            driverLinks.href = 'driver.html?/index=' + i
            let driverList = document.createElement('li')
            driverList.innerHTML = driver
            driverLinks.appendChild(driverList)
            document.getElementById('driversInfo').appendChild(driverLinks)
            if (i > 15) break;
        }
    })




const callThisFromFetch = (resultCourses) => {
    for (let i = 0; i < resultCourses.length; i++) {
        let tracks = resultCourses[i].name
        let trackLinks = document.createElement('a')
        trackLinks.href = 'racetrack.html?/index=' + i
        let tracksList = document.createElement('li')
        tracksList.innerHTML = tracks
        trackLinks.appendChild(tracksList)
        document.getElementById('raceTracksInfo').appendChild(trackLinks)
        if (i > 15) break;
    }
}




fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/courses')
    .then((response) => response.json())
    .then((resultCourses) => {
        console.log('courses: ', resultCourses)
        callThisFromFetch(resultCourses)
    })




let saveButton = document.getElementById('saveButton')
let inputText = document.getElementById('dataInput')
function webbStorage() {
    localStorage.setItem('Text', inputText.value)
}
saveButton.addEventListener('click', webbStorage)
