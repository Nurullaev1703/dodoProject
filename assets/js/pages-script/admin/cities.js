const setInfo = () => {
  let header = document.querySelector("header .container");
  let citiesContainer = document.querySelector(".cities");
  header.innerHTML += setHeaderContent(user);
  cities.forEach((city) => {
    citiesContainer.innerHTML += setCityNames(city);
  });
};
const addCityName = (e) => {
  $.ajax({
    type: "POST",
    url: url + "/city/add",
    data: {
      currentUserId: parseInt(currentUserId),
      name: e.parentNode.querySelector("#city").value,
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      alert(error);
    },
  });
};

const deleteCity = (e) => {
  console.log(e.parentNode.parentNode.dataset.cityName);
  $.ajax({
    type: "POST",
    url: url + "/city/delete",
    data: {
      currentUserId: parseInt(currentUserId),
      id: e.parentNode.parentNode.dataset.id,
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      alert(error);
    },
  });
};

// передаем тест и id города
const changeCityName = (e) => {
  $.ajax({
    type: "POST",
    url: url + "/city/edit",
    data: {
      currentUserId: parseInt(currentUserId),
      name: e.parentNode.querySelector("#city").value,
      id: e.parentNode.querySelector("#city").dataset.id,
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      alert(error);
    },
  });
};
