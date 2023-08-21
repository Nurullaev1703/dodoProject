const setInfo = () => {
    let header = document.querySelector("header .container");
    let citiesContainer = document.querySelector('.cities')
    header.innerHTML += setHeaderContent(user);
    cities.forEach(city =>{
        citiesContainer.innerHTML += setCityNames(city)
    })
};
const addCityName = () =>{
    return
}
const deleteCity = (e) =>{
    return
}