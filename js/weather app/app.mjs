
const container = document.querySelector(".container")
const cityName = document.querySelector("#cityName")

const lat = "44.34"
const lon = "10.99"
// const cityName = "karachi"
const apiKey = ""

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`


const fetchData = async () => {
    try {
        const cityValue = cityName.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`

        const response = await fetch(url)
        // console.log(response);
        if (!response.ok) throw new Error("error fetching data")

        const json = await response.json()
        console.log(json);
        const temp = json.main.temp
        const weather = json.weather[0].main
        console.log(temp);
        container.innerHTML = `
        <h1>${temp}</h1>
        <h2>${weather}</h2>
        <h3>${json.name}</h3>
        `

    } catch (error) {
        console.log(error, "this is error");
        console.log(error.message);

    }
}
window.fetchData = fetchData
// fetchData()