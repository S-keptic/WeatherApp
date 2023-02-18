

let search = document.getElementById('search');
const apiKey = 'e27593f0061f4ec09f5171150231802'
const form = document.getElementById('form');
let =enteredCity = document.getElementById('apiData') 




form.addEventListener('submit', async function(event){
    event.preventDefault();
    let city = search.value
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let response = await data.json()
    let temp = response.current.temp_c+'°C'
    console.log(temp)
    enteredCity.innerHTML = `Current temperature in ${city} is ${temp}`;
  

})




const currentTemp =  async () => {
    let img;
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let response = await data.json()
    let temp = response.current.temp_c+'°C'
    if (temp>20){
        img = 'images/sunny.png'
    }
    
    enteredCity.innerHTML = temp
}















