let url= `https://easyteach.kz/api`
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
    console.log(response)
    localStorage.setItem('members', JSON.stringify(response));
    if(document.title === 'Портал'){
      setInfo(JSON.parse(localStorage.getItem('members')));
      setLangActive()
      document.querySelector('.loader-container').classList.remove('active')
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
    localStorage.setItem("usersInfo",  JSON.stringify(response))
    if(document.title !== 'Портал' && document.title !== 'Города'){
      setInfo()
      setLangActive()
      document.querySelector('.loader-container').classList.remove('active')
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
      localStorage.setItem('divisionsInfo', JSON.stringify(response)) 
  },
  error: function (error) {
      console.log(error);
  }
});

// Информация о всех пользователях
let usersInfo = JSON.parse(localStorage.getItem('usersInfo'))
console.log(usersInfo)
// информация о текущем пользователе
let user = JSON.parse(localStorage.getItem('user'))
// полная информация о подразделениях
const divisionsInfo = JSON.parse(localStorage.getItem('divisionsInfo'))
// статистика о подразделениях без количества городов
const divisionStatistics = [...divisionsInfo[1]]




  

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
    e.parentNode.parentNode.querySelector('.select-title').dataset.id = e.dataset.id
}

const showExit = (e) =>{
    e.parentNode.querySelector('.btn-main').classList.toggle('active')
}

// Города
const cities = []
// Роли на сайте
const rolesName = []

// выпадающие списки
const setCities = () => {
  let city = ``;
  cities.forEach((element) => {
    city += `<p onclick="changeSelectTitle(this)" data-id="${element.id}">${element.name}</p>`;
  });
  return city;
};
const setRoles = () =>{
  let role = ``;
  rolesName.forEach((element) => {
      role += `<p data-filter="${element.name}" data-id="${element.id}" onclick="changeSelectTitle(this)">${element.name}</p>`;
  });
  return role;
}
const setSelect = () => {
  let city = ``;
  cities.forEach((element) => {
    city += `<p onclick="filterCities(this)" data-id="${element.id}">${element.name}</p>`;
  });
  return city;
};
const setSelectPoints = () => {
  let point = ``;
  points.forEach((element) => {
    point += `<p onclick="filterCities(this)" data-id="${element.id}">${element.name}</p>`;
  });
  return point;
};
// получение городов
$.ajax({
  type: 'POST',
  url: url+'/city',
  data: {
      currentUserId: parseInt(currentUserId)
  },
  success: function (response) {
    cities.push(...response)
    if(document.title === 'Учетные записи'|| document.title === 'Города'){
      setInfo()
      document.querySelector('.loader-container').classList.remove('active')
    }
  },
  error: function (error) {
      console.log(error);
  }
});
// получение должностей
$.ajax({
  type: 'POST',
  url: url+'/role', 
  data: {
      currentUserId: parseInt(currentUserId)
  },
  success: function (response) {
    console.log(response)
    rolesName.push(...response)
  },
  error: function (error) {
      console.log(error);
  }
});

$.ajax({
    type: 'POST',
    url: url+'/points', 
    data: {
        currentUserId: parseInt(currentUserId)
    },
    success: function (response) {
      localStorage.setItem('points', JSON.stringify(response))
    },
    error: function (error) {
        console.log(error);
    }
});
const points = JSON.parse(localStorage.getItem('points'))