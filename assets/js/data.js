let url= `https://test.pol1pvl.kz/api`
let imgUrl = `https://test.pol1pvl.kz/storage/app/public/user_photo/`

const setLangActive = () => {
  let ruLang = document.getElementById('ru')
  let kzLang = document.getElementById('kz')
  if(location.hash === '#ru'){
      ruLang.classList.add('active');
  }
  else{
      kzLang.classList.add('active');
  }
}
// id текущего пользователя
let currentUserId = localStorage.getItem('id')
// отправляем и текущий id и id пользователя (одинаковые значения) при редактировании
$.ajax({
  type: 'POST',
  url: url+'/getSub',
  data: {
      id: parseInt(currentUserId)
  },
  success: function (response) {
    localStorage.setItem('members', JSON.stringify(response));
    if(document.title === 'Портал'){
      setInfo(JSON.parse(localStorage.getItem('members')));
    }
  },
  error: function (error) {
      console.log(error);
  }
});

$.ajax({
  type: 'POST',
  url: url+'/getUsers',
  data: {
      id: parseInt(currentUserId)
  },
  success: function (response) {
    console.log(response)
    localStorage.setItem("usersInfo",  JSON.stringify(response))
    if(document.title !== 'Портал'){
      setInfo()
      setLangActive()
    } 
  },
  error: function (error) {
      console.log(error);
  }
});
// первое число - количество городов (нулевой индекс)
// upr-count - количество управляющих
// kur-count - количество курьеров
$.ajax({
  type: 'POST',
  url: url+'/statistic',
  data: {
    currentUserId: parseInt(currentUserId)
  },
  success: function (response) {
      console.log(response)
      localStorage.setItem('divisionsInfo', JSON.stringify(response)) 
  },
  error: function (error) {
      console.log(error);
  }
});

// Информация о всех пользователях
let usersInfo = JSON.parse(localStorage.getItem('usersInfo'))
// информация о текущем пользователе
let user = JSON.parse(localStorage.getItem('user'))
// полная информация о подразделениях
const divisionsInfo = JSON.parse(localStorage.getItem('divisionsInfo'))
// статистика о подразделениях без количества городов
const divisionStatistics = [...divisionsInfo[1]]

const setSelect = (array) => {
    let city = ``;
    array.forEach((element) => {
      city += `<p onclick="filterCities(this)">${element}</p>`;
    });
    return city;
  };
const setCities = (array) => {
    let city = ``;
    array.forEach((element) => {
      city += `<p onclick="changeSelectTitle(this)">${element}</p>`;
    });
    return city;
};
const setRoles = () =>{
    let role = ``;
    rolesName.forEach((element) => {
        role += `<p data-filter="${element}" onclick="changeSelectTitle(this)">${element}</p>`;
    });
    return role;
}
const getCities = () => {
    let cities = [];
    usersInfo.forEach(user =>{
        if (!cities.includes(user.city_name)) {
          cities.push(user.city_name);
        }
      });
    return cities;
  };
  

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

const changeSelectTitle = (e) =>{
    e.parentNode.parentNode.querySelector('.select-title').innerHTML = e.innerHTML
}

const showExit = (e) =>{
    e.parentNode.querySelector('.btn-main').classList.toggle('active')
}

// Города
const cities = getCities()
// Роли на сайте
const rolesName = ['Администратор','Подразделение', 'Управляющий','Курьер']
