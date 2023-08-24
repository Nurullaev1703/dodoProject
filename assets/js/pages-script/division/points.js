const setInfo = () => {
    let header = document.querySelector("header .container");
    let citiesContainer = document.querySelector('.cities')
    header.innerHTML += setHeaderContent(user);
    points.forEach(point =>{
        citiesContainer.innerHTML += setCityNames(point)
    })
};
const addCityName = (e) =>{
    if(e.parentNode.querySelector('#userPoint').innerHTML !== 'Управляющие'){
        $.ajax({
            type: 'POST',
            url: url+'/point/add', 
            data: {
                currentUserId: parseInt(currentUserId),
                name: e.parentNode.querySelector('#point').value,
                adress: e.parentNode.querySelector('#adress').value,
                upr_id: parseInt(e.parentNode.querySelector('#userPoint').dataset.id)
            },
            success: function (response) {
              console.log(response)
            },
            error: function (error) {
                console.log(error);
            }
          });
    }
    else{
        alert('Все поля должны быть заполнены')
    }
}

const deleteCity = (e) =>{
    console.log(e.parentNode.parentNode.dataset.cityName)
    $.ajax({
        type: 'POST',
        url: url+'/city/delete', 
        data: {
            currentUserId: parseInt(currentUserId),
            id:e.parentNode.parentNode.dataset.id
        },
        success: function (response) {
          console.log(response)
        },
        error: function (error) {
            console.log(error);
        }
      });
}

// передаем тест и id города
const changeCityName = (e) =>{
    $.ajax({
        type: 'POST',
        url: url+'/city/edit', 
        data: {
            currentUserId: parseInt(currentUserId),
            name:e.parentNode.querySelector('#city').value,
            id: e.parentNode.querySelector('#city').dataset.id
        },
        success: function (response) {
          console.log(response)
        },
        error: function (error) {
            console.log(error);
        }
      });
}