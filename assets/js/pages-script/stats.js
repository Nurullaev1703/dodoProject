const currentUserId = localStorage.getItem('id')

const setInfo = () =>{
    let header = document.getElementById('header');
    let testResults = document.querySelector('#results-container');
    let equipmentStats = document.querySelector('#equipment-container');
    usersInfo.forEach(user =>{
        if (user.id === parseInt(currentUserId)){
            header.innerHTML += setHeaderContent(user)
            user.division.forEach(member =>{
                testResults.innerHTML += setMembersResults(member)
                equipmentStats.innerHTML += setEquipmentStats(member)
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