
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    if(!location) {
        return alert('Enter Your City');
    }

    fetch('/getWeather?location=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
               alert(data.message);
            }
        })
    })
})



