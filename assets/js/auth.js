const auth = () => {
    let userLogin = document.getElementById('login')
    let userPassword = document.getElementById('password')
    let authHint = document.getElementById('hint')

    $.ajax({
        type: 'POST',
        url: url+'/api/login',
        data: {
            login: userLogin.value,
            password: userPassword.value
        },
        success: function (response) {
           console.log(response)
        },
        error: function (error) {
            console.log(error);
        }
    });

    // usersInfo.forEach(user =>{
    //     if(userLogin.value === user.login && userPassword.value === user.password){
    //         localStorage.setItem('id',user.id)
    //         setTimeout(() =>{
    //             window.location = './app.html'
    //         },300) 
    //     }
    //     else{
    //         userLogin.style.border = '1px solid red';
    //         userPassword.style.border = '1px solid red';
    //         authHint.style.display = 'block';
    //     }
    // });
}
