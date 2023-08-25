const setInfo = () => {
  let header = document.querySelector("header .container");
  let citiesContainer = document.querySelector(".cities");
  header.innerHTML += setHeaderContent(user);
  points.forEach((point) => {
    citiesContainer.innerHTML += setPointsName(point);
  });
};
const addPointName = (e) => {
  if (e.parentNode.querySelector("#userPoint").innerHTML !== "Управляющие") {
    $.ajax({
      type: "POST",
      url: url + "/point/add",
      data: {
        currentUserId: parseInt(currentUserId),
        name: e.parentNode.querySelector("#point").value,
        adress: e.parentNode.querySelector("#adress").value,
        upr_id: parseInt(e.parentNode.querySelector("#userPoint").dataset.id),
      },
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        alert(error);
      },
    });
  } else {
    alert("Все поля должны быть заполнены");
  }
};

const deletePoint = (e) => {
  console.log(e.parentNode.parentNode.dataset.id);
  $.ajax({
    type: "POST",
    url: url + "/point/delete",
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
const changePointName = (e) => {
  $.ajax({
    type: "POST",
    url: url + "/point/edit",
    data: {
      currentUserId: parseInt(currentUserId),
      id: e.dataset.pointId,
      name: e.parentNode.querySelector("#point").value,
      adress: e.parentNode.querySelector("#adress").value,
      upr_id: e.parentNode.querySelector("#userPoint").dataset.id,
    },
    success: function (response) {},
    error: function (error) {
      alert(error);
    },
  });
};
