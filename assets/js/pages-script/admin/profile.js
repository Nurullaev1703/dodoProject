const setInfo = (members) =>{
  let header = document.querySelector('header .container');
  let userInfo = document.querySelector('#user-info');
  let userDivisions = document.querySelector('#user-divisions');
  members.forEach(member =>{
      userDivisions.innerHTML += setDivisions(member)
  })
  header.innerHTML += setHeaderContent(user)
  userInfo.innerHTML += setUserInfoCard(user)
  setLangActive()
}


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
      userEmail.value.trim()
    ) {

        $.ajax({
            type: 'POST',
            url: url+'/edit',
            data: {
                id: 1,
                name: userName.value,
                login: userLogin.value,
                email: userEmail.value,
                adress: userAdress.value,
                dateB: userDateB.value,
                role: '1',
            },
            success: function (response) {
              
            },
            error: function (error) {
                console.log(error);
            }
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