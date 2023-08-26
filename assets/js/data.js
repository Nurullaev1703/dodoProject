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
if(location.href.includes('manager')){
  $.ajax({
    type: 'POST',
    url: url+'/edu',
    data: {
        currentUserId: parseInt(currentUserId)
    },
    success: function (response) {
      
    },
    error: function (error) {
        console.log(error);
    }
  });
}

if(!location.href.includes('employee')){
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
}
const tasks = JSON.parse(localStorage.getItem('education'))
if(location.href.includes('manager') || location.href.includes('employee')){
  $.ajax({
    type: 'POST',
    url: url+'/edu',
    data: {
      currentUserId: parseInt(currentUserId)
    },
    success: function (response) {
        localStorage.setItem('education', JSON.stringify(response)) 
    },
    error: function (error) {
        console.log(error);
    }
  });
  
}
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
let divisionsInfo = []
let divisionStatistics = []
if(location.href.includes('admin/')){
  // полная информация о подразделениях
  divisionsInfo= JSON.parse(localStorage.getItem('divisionsInfo'))
  // статистика о подразделениях без количества городов
  divisionStatistics= [...divisionsInfo[1]]
}
if(location.href.includes('division/')){
  // полная информация о подразделениях
  divisionsInfo= JSON.parse(localStorage.getItem('divisionsInfo'))
  console.log(divisionsInfo)
}
if(location.href.includes('manager/')){
  // полная информация о подразделениях
  divisionsInfo= JSON.parse(localStorage.getItem('divisionsInfo'))
  console.log(divisionsInfo)
}


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
const setPoints = () =>{
  let point = ``;
  points.forEach((element) => {
    point += `<p data-filter="${element.name}" data-id="${element.id}" onclick="changeSelectTitle(this)">${element.name}</p>`;
  });
  return point;
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
const setManagers = () => {
  let manager = ``;
  usersInfo.forEach((element) => {
    if(element.role === '3'){
      manager += `<p onclick="changeSelectTitle(this)" data-id="${element.id}">${element.name}</p>`;
    }
  });
  return manager;
};
let devices = JSON.parse(localStorage.getItem('devices'));
if(location.href.includes('division')){
  $.ajax({
    type: 'POST',
    url: url+'/device',
    data: {
        currentUserId: parseInt(currentUserId)
    },
    success: function (response) {
      localStorage.setItem('devices',JSON.stringify(response));
    },
    error: function (error) {
        console.log(error);
    }
  });
}
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
    rolesName.push(...response)
  },
  error: function (error) {
      console.log(error);
  }
});

// точки для панели подразделения
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
let currentTasks = []
const setTasksName = () => {
  let task = ``;
  if(currentTasks.length > 1){
    currentTasks.forEach((element) => {
      task += `
      <li>
        <div class="text-container">
            <p data-id="${element.id}">${element.name}</p>
            <input type="button" value="Назначить" onclick="addTask(this)" class="btn-main">
        </div>
      </li>
      `;
    });
  }
  return task;
};
const setEndTasksName = (user_id) => {
  let task = ``
  tasks.forEach(element => {
    element.forEach(item => {
      if(item.user_id === user_id){
        item.edu_comp.forEach(edu =>{
          task += `
          <li>
            <p>${edu.LName}</p>
          </li>
          `
        })
      }
    })
  });
  return task
};
const setCurrentTasksName = (user_id) => {
  let task = ``
  tasks.forEach(element => {
    element.forEach(item => {
      if(item.user_id == user_id){
        item.edu_app.forEach(edu =>{
          task += `
          <li>
            <p>${edu.LName}</p>
          </li>
          `
        })
      }
    })
  });
  return task
};