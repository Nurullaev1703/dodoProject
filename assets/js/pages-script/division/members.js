// отправляем currentUserId при манипуляции с пользователями (удаление,редактирование, добавление)
// проверка роли по id и возможность манипуляции с пользователями (права администратора)

// При манипуляции с сотрудниками отправляем его id
const setInfo = () => {
  let header = document.querySelector("header .container");
  let selectInner = document.querySelector(".select-point");
  let membersInfo = document.querySelector(".table-inner");
  membersInfo.innerHTML = ``;
  header.innerHTML = headerContentMembers + setHeaderContent(user);
  selectInner.innerHTML = setSelectPoints(points);
  usersInfo.forEach((user) => {
    let point = "";
    for (let i = 0; i < user.point.length; i++) {
      if (user.point[i].name.trim()) {
        point = user.point[i].name;
      } else {
        point = "Нет точки";
      }
    }
    membersInfo.innerHTML += setMembersInfoDivision(user, point);
  });
};

const saveUser = (e, id) => {
  let userName = e.parentNode.querySelector("#userName");
  let userLogin = e.parentNode.querySelector("#userLogin");
  let userPassword = e.parentNode.querySelector("#userPassword");
  let userEmail = e.parentNode.querySelector("#userEmail");
  let userAdress = e.parentNode.querySelector("#userAdress");
  let userDateB = e.parentNode.querySelector("#userDateB");
  let userPoint = e.parentNode.querySelector("#userPoint");
  let userRole = e.parentNode.querySelector("#userRole");
  let userDateStart = e.parentNode.querySelector("#userDateStart");
  let userImg = e.parentNode.querySelector("#userImg");
  let userPhone = e.parentNode.querySelector("#userPhone");
  if (
    userName.value.trim() &&
    userLogin.value.trim() &&
    userEmail.value.trim() &&
    userPoint.dataset.id !== "" &&
    userRole.dataset.id !== ""
  ) {
    $.ajax({
      type: "POST",
      url: url + "/edit",
      data: {
        currentUserId: parseInt(currentUserId),
        id: parseInt(e.parentNode.dataset.id),
        name: userName.value,
        phone: userPhone.value.replace(/\D/g, ""),
        login: userLogin.value,
        pass: userPassword.value,
        email: userEmail.value,
        adress: userAdress.value,
        dateB: userDateB.value,
        role: userRole.dataset.id,
        photo: userImg.value,
        city: user.city,
        dateStartWork: userDateStart.value,
        gender: "1",
        role_name: userRole.innerHTML,
        city_name: user.city_name,
        point: userPoint.dataset.id,
      },
      success: function (response) {},
      error: function (error) {
        alert(error);
      },
    });
  }
  if (!userName.value.trim()) {
    userName.style.border = "1px solid red";
  } else {
    userName.style.border = "1px solid transparent";
  }
  if (!userLogin.value.trim()) {
    userLogin.style.border = "1px solid red";
  } else {
    userLogin.style.border = "1px solid transparent";
  }
  if (!userEmail.value.trim()) {
    userEmail.style.border = "1px solid red";
  } else {
    userEmail.style.border = "1px solid transparent";
  }
  if (userRole.innerHTML === "Должность") {
    userRole.style.border = "1px solid red";
  } else {
    userRole.style.border = "1px solid #f78345";
  }
};

const deleteUser = (userId) => {
  $.ajax({
    type: "POST",
    url: url + "/delete",
    data: {
      currentUserId: parseInt(currentUserId),
      id: userId,
    },
    success: function (response) {
      usersInfo.forEach((item) => {
        if (userId === item.id) {
          usersInfo.splice(usersInfo.indexOf(item), 1);
          setInfo();
        }
      });
    },
    error: function (error) {
      alert(error);
    },
  });
};

const addUser = (e) => {
  let userName = e.parentNode.querySelector("#userName");
  let userLogin = e.parentNode.querySelector("#userLogin");
  let userPassword = e.parentNode.querySelector("#userPassword");
  let userEmail = e.parentNode.querySelector("#userEmail");
  let userAdress = e.parentNode.querySelector("#userAdress");
  let userDateB = e.parentNode.querySelector("#userDateB");
  let userPoint = e.parentNode.querySelector("#userPoint");
  let userRole = e.parentNode.querySelector("#userRole");
  let userDateStart = e.parentNode.querySelector("#userDateStart");
  let userImg = e.parentNode.querySelector("#userImg");
  let userPhone = e.parentNode.querySelector("#userPhone");
  // сделать проверку фотографии при отправке
  // создать поле ввода для телефона и пола
  // роль, город сделать выпадающим списком и целочисленным
  if (
    userName.value.trim() &&
    userLogin.value.trim() &&
    userEmail.value.trim() &&
    userPoint.dataset.id !== "" &&
    userRole.dataset.id !== ""
  ) {
    $.ajax({
      type: "POST",
      url: url + "/add",
      data: {
        currentUserId: parseInt(currentUserId),
        name: userName.value,
        phone: userPhone.value.replace(/\D/g, ""),
        login: userLogin.value,
        pass: userPassword.value,
        email: userEmail.value,
        adress: userAdress.value,
        dateB: userDateB.value,
        role: userRole.dataset.id,
        photo: userImg.value,
        city: user.city,
        dateStartWork: userDateStart.value,
        gender: "1",
        role_name: userRole.innerHTML,
        city_name: user.city_name,
        point: userPoint.dataset.id,
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
  if (!userName.value.trim()) {
    userName.style.border = "1px solid red";
  } else {
    userName.style.border = "1px solid transparent";
  }
  if (!userLogin.value.trim()) {
    userLogin.style.border = "1px solid red";
  } else {
    userLogin.style.border = "1px solid transparent";
  }
  if (!userEmail.value.trim()) {
    userEmail.style.border = "1px solid red";
  } else {
    userEmail.style.border = "1px solid transparent";
  }
  if (!userPassword.value.trim()) {
    userPassword.style.border = "1px solid red";
  } else {
    userPassword.style.border = "1px solid transparent";
  }
  if (userRole.innerHTML === "Должность") {
    userRole.style.border = "1px solid red";
  } else {
    userRole.style.border = "1px solid #f78345";
  }
  if (userCity.innerHTML === "Все города") {
    userCity.style.border = "1px solid red";
  } else {
    userCity.style.border = "1px solid #f78345";
  }
};

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
