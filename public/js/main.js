const button = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const tempDetail = document.getElementById('tempDetail')
const temp_stts = document.getElementById('temp_stts')
const dataHide = document.querySelector('.middle_layer')
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == '') {
        city_name.innerText = 'Please Write the City Name before Searching.'
        dataHide.classList.add('data_hide') 
    }else{
        try{
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e9e676c11a2cb534840343a076a0b81b&unit=metric#`
            const response = await fetch(api)
            const data = await response.json()
            const objData = await [data]
            tempDetail.innerHTML = objData[0].main.temp
            city_name.innerHTML = objData[0].name + ', IN'

            const temp_mood = objData[0].weather[0].main;
            if (temp_mood === 'clear') {
                temp_stts.innerHTML = '<i class="fa-solid fa-sun"></i>'
            }
            else if(temp_mood === 'Clouds'){
                temp_stts.innerHTML = '<i class="fa-solid fa-cloud"></i>'
            }
            else if(temp_mood === 'Rain'){
                temp_stts.innerHTML = '<i class="fa-sharp fa-solid fa-cloud-rain"></i>'
            }
            else{
                temp_stts.innerHTML = '<i class="fa-solid fa-sun"</i>'
            }
            dataHide.classList.remove('data_hide')
        }catch{
            dataHide.classList.add('data_hide') 
            city_name.innerText = 'Please Write the City Name Properly.'; 
        }
    }
}


button.addEventListener('click', getInfo)