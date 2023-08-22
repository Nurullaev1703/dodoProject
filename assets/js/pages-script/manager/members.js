// отправляем currentUserId при манипуляции с пользователями (удаление,редактирование, добавление)
// проверка роли по id и возможность манипуляции с пользователями (права администратора)

// При манипуляции с сотрудниками отправляем его id
const setInfo = () => {
  let header = document.querySelector("header .container");
  let citiesContainer = document.querySelector(".select-inner");
  let membersInfo = document.querySelector(".table-inner");
  membersInfo.innerHTML = ``;
  header.innerHTML = headerContentMembers + setHeaderContent(user);
  citiesContainer.innerHTML = setSelect(cities);
  usersInfo.forEach((user) => {
    if (user.role == 4) membersInfo.innerHTML += setMembersInfo(user);
  });
};

const saveUser = (e, id) => {
  let userName = e.parentNode.querySelector("#userName");
  let userLogin = e.parentNode.querySelector("#userLogin");
  let userPassword = e.parentNode.querySelector("#userPassword");
  let userEmail = e.parentNode.querySelector("#userEmail");
  let userAdress = e.parentNode.querySelector("#userAdress");
  let userDateB = e.parentNode.querySelector("#userDateB");
  let userCity = e.parentNode.querySelector("#userCity");
  let userRole = e.parentNode.querySelector("#userRole");
  let userDateStart = e.parentNode.querySelector("#userDateStart");
  let userImg = e.parentNode.querySelector("#userImg");
  let userPhone = e.parentNode.querySelector("#userPhone");
  let memberId = id;
  if (
    userName.value.trim() &&
    userLogin.value.trim() &&
    userEmail.value.trim() &&
    userPassword.value.trim()
  ) {
    $.ajax({
      type: "POST",
      url: url + "/edit",
      data: {
        currentUserId: currentUserId,
        id: memberId,
        name: userName.value,
        login: userLogin.value,
        email: userEmail.value,
        adress: userAdress.value,
        dateB: userDateB.value,
        role_name: 2,
        phone: userPhone.value.replace(/\D/g, ""),
        dateStartWork: userDateStart.value,
        photo: userImg.value,
        city: 2,
      },
      success: function (response) {
        setTimeout(function () {
          location.reload();
        }, 2000);
      },
      error: function (error) {
        console.log(error);
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
      console.log(error);
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
  let userCity = e.parentNode.querySelector("#userCity");
  let userRole = e.parentNode.querySelector("#userRole");
  let userDateStart = e.parentNode.querySelector("#userDateStart");
  let userImg = e.parentNode.querySelector("#userImg");
  let userPhone = e.parentNode.querySelector("#userPhone");
  // сделать проверку фотографии при отправке
  // создать поле ввода для телефона и пола
  // роль, город сделать выпадающим списком и целочисленным
  $.ajax({
    type: "POST",
    url: url + "/add",
    data: {
      currentUserId: parseInt(currentUserId),
      name: userName.value,
      phone: userPhone.value.replace(/\D/g, ""),
      login: userLogin.value,
      password: userPassword.value,
      email: userEmail.value,
      adress: userAdress.value,
      dateB: userDateB.value,
      role: 2,
      photo: userImg.value,
      city: "2",
      dateStartWork: userDateStart.value,
      gender: "1",
    },
    success: function (response) {},
    error: function (error) {
      console.log(error);
    },
  });
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
