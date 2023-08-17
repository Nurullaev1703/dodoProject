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
            if(userLogin.value === response.login){
                localStorage.setItem('id',response.id)
                localStorage.setItem('role',response.role)
                window.location = './assets/pages/admin/profile.html' + '#ru'
            }
            else{
                    userLogin.style.border = '1px solid red';
                    userPassword.style.border = '1px solid red';
                    authHint.style.display = 'block';
            }
        },
        error: function (error) {
            console.log(error);
        }
    });

}
