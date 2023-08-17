
const currentUserId = localStorage.getItem('id')


const setInfo = () =>{
    let header = document.getElementById('header');
    let userProfile = document.querySelector('#user-profile');
    let userInfo = document.querySelector('#user-info');
    let userDivisions = document.querySelector('#user-divisions');
    usersInfo.forEach(user =>{
        if (user.id === parseInt(currentUserId)){
            header.innerHTML += setHeaderContent(user)
            userProfile.innerHTML += setUserProfileCard(user)
            userInfo.innerHTML += setUserInfoCard(user)
            user.division.forEach(member =>{
                userDivisions.innerHTML += setDivisions(member)
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