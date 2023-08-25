const setInfo = (members) => {
  let header = document.querySelector("header .container");
  let userInfo = document.querySelector("#user-info");
  let userDivisions = document.querySelector("#user-divisions");
  members.forEach((member) => {
    userDivisions.innerHTML += setDivisions(member);
  });
  header.innerHTML += setHeaderContent(user);
  userInfo.innerHTML += setUserInfoCard(user);
  setLangActive();
  document.querySelector(".loader-container").classList.remove("active");
};

const saveUser = (e, id) => {
  let userName = e.parentNode.querySelector("#userName");
  let userLogin = e.parentNode.querySelector("#userLogin");
  let userPassword = e.parentNode.querySelector("#userPassword");
  let userEmail = e.parentNode.querySelector("#userEmail");
  let userAdress = e.parentNode.querySelector("#userAdress");
  let userDateB = e.parentNode.querySelector("#userDateB");
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
        id: user.id,
        name: userName.value,
        login: userLogin.value,
        email: userEmail.value,
        adress: userAdress.value,
        dateB: userDateB.value,
        role: user.role,
        phone: userPhone.value.replace(/\D/g, ""),
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
