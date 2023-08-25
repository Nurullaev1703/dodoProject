const auth = () => {
  let userLogin = document.getElementById("login");
  let userPassword = document.getElementById("password");
  let authHint = document.getElementById("hint");
  $.ajax({
    type: "POST",
    url: url + "/login",
    data: {
      login: userLogin.value,
      password: userPassword.value,
    },
    success: function (response) {
      if (userLogin.value === response.login) {
        localStorage.setItem("id", response.id);
        localStorage.setItem("user", JSON.stringify(response));
        if (response.role == 1) {
          window.location = "./assets/pages/admin/profile.html" + "#ru";
        }
        if (response.role == 2) {
          window.location = "./assets/pages/division/profile.html" + "#ru";
        }
        if (response.role == 3) {
          window.location = "./assets/pages/manager/profile.html" + "#ru";
        }
        if (response.role == 4) {
          window.location = "./assets/pages/employee/profile.html" + "#ru";
        }
      } else {
        userLogin.style.border = "1px solid red";
        userPassword.style.border = "1px solid red";
        authHint.style.display = "block";
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
};
