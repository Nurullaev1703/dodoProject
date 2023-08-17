const currentUserId = localStorage.getItem('id')

const setInfo = () =>{
    let header = document.getElementById('header');
    let membersInfo = document.querySelector('.table-inner');
    membersInfo.innerHTML = ``
    usersInfo.forEach(user =>{
        if (user.id === parseInt(currentUserId)){
            header.innerHTML = setHeaderContent(user)
            user.division.forEach(member =>{
                membersInfo.innerHTML += setMembersInfo(member)
                // equipmentStats.innerHTML += setEquipmentStats(member)
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