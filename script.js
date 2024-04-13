const checkWeather = async () => {
    const cityName = document.getElementById('input-field').value;
    const apiKey = window.myApiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    
    const card = document.getElementById('card');
    const response = await fetch(url)
    if(response.status == 404){
        document.querySelector('.error-display').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        document.querySelector('.error-display').style.display = 'none';
        const data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name +', '+ data.sys.country;
        document.querySelector('.temp').innerHTML = data.main.temp;
        document.querySelector('.max-temp').innerHTML = data.main.temp_max;
        document.querySelector('.wind').innerHTML = data.wind.speed;
        document.querySelector('.weather').style.display = 'block';
        
        card.style.background = '';
        if(data.main.temp > 27){
            card.classList.remove('chill-day');
            card.classList.add('very-hot-day');
        }else{
            card.classList.remove('very-hot-day');
            card.classList.add('chill-day');
        }
    }
}

const button = document.getElementById('my-btn');
button.addEventListener('click', checkWeather);

const docBody = document.querySelector('body');
const toggleButton = document.getElementById('theme-toggle');

toggleTheme = () => {
    docBody.classList.toggle('dark');
}

toggleButton.addEventListener('click', toggleTheme);