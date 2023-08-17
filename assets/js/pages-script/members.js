const currentUserId = localStorage.getItem('id')

const getCities = () =>{
    let cities = []
    usersInfo.forEach(user =>{
        if(user.id == currentUserId){
            user.division.forEach(item =>{
                if(!cities.includes(item.adress)){
                    cities.push(item.adress)
                }
            })
        }
    })
    return cities
}

const setInfo = () =>{
    let header = document.getElementById('header');
    let membersInfo = document.querySelector('.table-inner');
    let citiesContainer = document.querySelector('.select-inner')
    membersInfo.innerHTML = ``
    usersInfo.forEach(user =>{
        if (user.id === parseInt(currentUserId)){
            header.innerHTML = setHeaderContent(user)
            citiesContainer.innerHTML = setCities(getCities())
            user.division.forEach(member =>{
                membersInfo.innerHTML += setMembersInfo(member)

            })
        }
    })
}
setInfo();
const burgerMenu = (open) =>{
    let sideBar = document.querySelector('.side-bar')
    if(open){
        sideBar.style.animationName = 'openSidebar'
        sideBar.classList.add('open')
    }
    else{
        sideBar.style.animationName = 'closeSidebar'
        setTimeout(() =>{
            sideBar.classList.remove('open')
        },300)
        
    }
}

const saveUser = (e,id) =>{
    let userName = e.parentNode.querySelector('#userName')
    let userLogin = e.parentNode.querySelector('#userLogin')
    let userPassword = e.parentNode.querySelector('#userPassword')
    let userEmail = e.parentNode.querySelector('#userEmail')
    let userAdress = e.parentNode.querySelector('#userAdress')
    let userDateB = e.parentNode.querySelector('#userDateB')
    let userCity = e.parentNode.querySelector('#userCity')
    let userRole = e.parentNode.querySelector('#userRole')
    let userDateStart = e.parentNode.querySelector('#userDateStart')
    let userImg = e.parentNode.querySelector('#userImg')

    let memberId = id
    if(userName.value.trim() && userLogin.value.trim() 
    && userEmail.value.trim() && userPassword.value.trim()){
        usersInfo.forEach(user =>{
            if (user.id === parseInt(currentUserId)){
                user.division.forEach(member =>{
                    if(member.id === parseInt(memberId)){
                        member.name = userName.value
                        member.login = userLogin.value
                        member.email = userEmail.value
                        member.adress = userAdress.value
                        member.dateB = userDateB.value
                        member.role = userRole.value
                        member.img = userImg.value
                        setInfo()
                    }
                })
            }
        })
    }
    if(!userName.value.trim()){
        userName.style.border = '1px solid red';
    }
    else{
        userName.style.border = '1px solid transparent';
    }
    if(!userLogin.value.trim()){
        userLogin.style.border = '1px solid red';
    }
    else{
        userLogin.style.border = '1px solid transparent';
    }
    if(!userEmail.value.trim()){
        userEmail.style.border = '1px solid red';
    }
    else{
        userEmail.style.border = '1px solid transparent';
    }
    if(!userPassword.value.trim()){
        userPassword.style.border = '1px solid red';
    }
    else{
        userPassword.style.border = '1px solid transparent';
    }
}

const deleteUser = (id) =>{
    usersInfo.forEach(user =>{
        if (user.id === parseInt(currentUserId)){
            user.division.forEach(member =>{
                if(member.id === parseInt(id)){
                    user.division.splice(user.division.indexOf(member),1)
                    setInfo()
                }
            })
        }
    })
}

const addUser = (e) =>{
    let userName = e.parentNode.querySelector('#userName')
    let userLogin = e.parentNode.querySelector('#userLogin')
    let userPassword = e.parentNode.querySelector('#userPassword')
    let userEmail = e.parentNode.querySelector('#userEmail')
    let userAdress = e.parentNode.querySelector('#userAdress')
    let userDateB = e.parentNode.querySelector('#userDateB')
    let userCity = e.parentNode.querySelector('#userCity')
    let userRole = e.parentNode.querySelector('#userRole')
    let userDateStart = e.parentNode.querySelector('#userDateStart')
    let userImg = e.parentNode.querySelector('#userImg')
    if(userName.value.trim() && userLogin.value.trim() 
    && userEmail.value.trim() && userPassword.value.trim()){
        usersInfo.forEach(user =>{
            if (user.id === parseInt(currentUserId)){
                user.division.unshift({
                    id: user.division.length+1,
                    name: userName.value,
                    tel: '+7777777777777',
                    email: userEmail.value,
                    adress: userAdress.value,
                    dateB: userDateB.value,
                    role: userRole.value,
                    rating: 8,
                    img: userImg.value,
                    count: 7,
                    mistakes: 3,
                    time: 60
                })
                setInfo()
            }
        })
    }
    if(!userName.value.trim()){
        userName.style.border = '1px solid red';
    }
    else{
        userName.style.border = '1px solid transparent';
    }
    if(!userLogin.value.trim()){
        userLogin.style.border = '1px solid red';
    }
    else{
        userLogin.style.border = '1px solid transparent';
    }
    if(!userEmail.value.trim()){
        userEmail.style.border = '1px solid red';
    }
    else{
        userEmail.style.border = '1px solid transparent';
    }
    if(!userPassword.value.trim()){
        userPassword.style.border = '1px solid red';
    }
    else{
        userPassword.style.border = '1px solid transparent';
    }
}

$(function(){
    let filter = $("[data-filter]")
    filter.on("click",function(){
        let city = $(this).data('filter')
        if(city == 'all'){
            $("[data-city]").removeClass('hide')
        }
        else{
            $("[data-city]").each(function(){
                let workCity = $(this).data('city')
                if(workCity != city){
                    $(this).addClass('hide')
                }
                else{
                    $(this).removeClass('hide')
                }
            })
        }
        
    })
})

