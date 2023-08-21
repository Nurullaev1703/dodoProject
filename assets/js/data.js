let url= `https://test.pol1pvl.kz/api`
let imgUrl = `https://test.pol1pvl.kz/storage/app/public/user_photo/`
// let usersInfo = [
//     {
//         id: 1,
//         name: 'Алиса Валерьевна',
//         tel: '+77777777777',
//         email:'admin@gmail.com',
//         adress: 'Павлодар',
//         dateB: '2002-12-18',
//         role: '1',
//         roleName: 'Администратор',
//         login: 'admin',
//         password: '123',
//         joinDate: '2018-10-12',
//         img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//         division: [
//             {
//                 id:1,
//                 name: 'Федор Петров',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Кызылорда',
//                 dateB: '2000-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:2,
//                 name: 'Иванов Иван',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Павлодар',
//                 dateB: '2002-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:3,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Павлодар',
//                 dateB: '1985-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:4,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Караганда',
//                 dateB: '2030-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:5,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Астана',
//                 dateB: '2012-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:6,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Алматы',
//                 dateB: '2022-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:7,
//                 name: 'Федор Петров',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Кызылорда',
//                 dateB: '2000-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:8,
//                 name: 'Иванов Иван',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Павлодар',
//                 dateB: '2002-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:9,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Павлодар',
//                 dateB: '1985-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:10,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Караганда',
//                 dateB: '2030-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:11,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Астана',
//                 dateB: '2012-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//             {
//                 id:12,
//                 name: 'Фамилия имя',
//                 tel: '+7777777777777',
//                 email: 'test@gmail.com',
//                 adress: 'Алматы',
//                 dateB: '2022-12-18',
//                 role: 'курьер',
//                 rating: 8,
//                 img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//                 count: 7,
//                 mistakes: 3,
//                 time: 60,
//                 quest: 'Отправить 40 заказов'
//             },
//         ]
//     }
// ]
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
// информация о текущем пользователе
let user = JSON.parse(localStorage.getItem('user'))
// id текущего пользователя
let currentUserId = localStorage.getItem('id')
// полная информация о подразделениях
const divisionsInfo = JSON.parse(localStorage.getItem('divisionsInfo'))
// статистика о подразделениях без количества городов
const divisionStatistics = [...divisionsInfo[1]]
// Информация о всех пользователях
let usersInfo = JSON.parse(localStorage.getItem('usersInfo'))
// Города
const cities = getCities()
// Роли на сайте
const rolesName = ['Администратор','Подразделение', 'Управляющий','Курьер']

