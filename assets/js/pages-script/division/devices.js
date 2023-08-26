// отправляем currentUserId при манипуляции с пользователями (удаление,редактирование, добавление)
// проверка роли по id и возможность манипуляции с пользователями (права администратора)

// При манипуляции с сотрудниками отправляем его id
const setInfo = () => {
  let header = document.querySelector("header .container");
  let selectInner = document.querySelector(".select-point");
  let devicesInfo = document.querySelector(".table-inner");
  devicesInfo.innerHTML = ``;
  header.innerHTML += setHeaderContent(user);
  console.log(devices)
  devices.forEach(item =>{
    devicesInfo.innerHTML += setDevices(item)
  })
};

const addDevice = (e) => {
  if(e.parentNode.querySelector('#devicePoint').dataset.id && e.parentNode.querySelector('#deviceName').value){
    $.ajax({
      type: "POST",
      url: url + "/device/add",
      data: {
        currentUserId: parseInt(currentUserId),
        name: e.parentNode.querySelector('#deviceName').value,
        point: e.parentNode.querySelector('#devicePoint').dataset.id
      },
      success: function (response) {},
      error: function (error) {
        alert(error);
      },
    });
  }
  else{
    alert('Заполните все поля')
  }
}
  

const deleteDevice = (deviceId) => {
  $.ajax({
    type: "POST",
    url: url + "/device/delete",
    data: {
      currentUserId: parseInt(currentUserId),
      id: deviceId,
    },
    success: function (response) {
      devices.forEach((item) => {
        if (deviceId === item.id) {
          devices.splice(devices.indexOf(item), 1);
          setInfo();
        }
      });
    },
    error: function (error) {
      alert(error);
    },
  });
};

const editDevice = (e) => {
    $.ajax({
      type: "POST",
      url: url + "/device/edit",
      data: {
        currentUserId: parseInt(currentUserId),
        id: e.parentNode.dataset.id,
        name: e.parentNode.querySelector('#deviceName').value,
        point: e.parentNode.querySelector('#devicePoint').dataset.id
      },
      success: function (response) {
        setTimeout(function () {
          location.reload();
        }, 2000);
      },
      error: function (error) {
        alert(error);
      },
    });
  }

const filterCities = (e) => {
  const memberParent = document.querySelectorAll(".member-parent");
  if (e.classList.contains("showAll")) {
    e.parentNode.querySelector(".select-title").innerHTML = "Все города";
    memberParent.forEach((item) => {
      item.classList.remove("hide");
    });
  } else {
    const filterType = e.innerHTML;
    e.parentNode.parentNode.querySelector(".select-title").innerHTML =
      filterType;
    memberParent.forEach((item) => {
      item.classList.remove("hide");
      if (item.querySelector(".city").innerHTML !== filterType) {
        item.classList.add("hide");
      }
    });
  }
};
