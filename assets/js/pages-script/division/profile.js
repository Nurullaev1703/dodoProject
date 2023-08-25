const setInfo = () => {
  let header = document.querySelector("header .container");
  let userInfo = document.querySelector("#user-info");
  let userDivisions = document.querySelector("#user-divisions");
  usersInfo.forEach((member) => {
    userDivisions.innerHTML += setDivisions(member);
  });
  header.innerHTML += setHeaderContent(user);
  userInfo.innerHTML += setUserInfoCard(user);
  setLangActive();
};

const saveUser = (e) => {
  let userName = e.parentNode.querySelector("#userName");
  let userLogin = e.parentNode.querySelector("#userLogin");
  let userEmail = e.parentNode.querySelector("#userEmail");
  let userAdress = e.parentNode.querySelector("#userAdress");
  let userDateB = e.parentNode.querySelector("#userDateB");
  let userCity = e.parentNode.querySelector("#userCity");
  let userDateStart = e.parentNode.querySelector("#userDateStart");
  let userImg = e.parentNode.querySelector("#userImg");
  let userPhone = e.parentNode.querySelector("#userPhone");
  if (
    userName.value.trim() &&
    userLogin.value.trim() &&
    userEmail.value.trim()
  ) {
    $.ajax({
      type: "POST",
      url: url + "/edit",
      data: {
        currentUserId: parseInt(currentUserId),
        id: parseInt(currentUserId),
        name: userName.value,
        login: userLogin.value,
        email: userEmail.value,
        adress: userAdress.value,
        role: user.role,
        role_name: user.role_name,
        city: userCity.city,
        city_name: user.city_name,
        phone: userPhone.value.replace(/\D/g, ""),
        photo: userImg.value,
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
};
