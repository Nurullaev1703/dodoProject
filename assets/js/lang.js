let ruLang = document.getElementById('ru')

var langArray = {
    'changeImg':{
        'ru':'Сменить фото',
        'kz':'фотосуретті өзгерту'
    },
    "cabinet":{
        "ru":'Личный кабинет',
        'kz':'Жеке бөлме'
    },
    "cities":{
        "ru":'Города',
        'kz':'қалалар'
    },
    "joinDate":{
        "ru":'Работает с',
        'kz':'Жұмыс істей бастады'
    },
    "fullName":{
        "ru":'Полное имя',
        'kz':'Аты'
    },
    "role":{
        "ru":'Должность',
        'kz':'қызмет атауы'
    },
    "adress":{
        "ru":'Адрес',
        'kz':'мекенжайы'
    },
    "division":{
        "ru":'Подразделение',
        'kz':'бөлімше'
    },
    "employers":{
        "ru":'Сотрудники',
        'kz':'қызметкерлер'
    },
    "info":{
        "ru":'Информация',
        'kz':'ақпарат'
    },
    "rating":{
        "ru":'Успеваемость',
        'kz':'Баға'
    },
    "user":{
        "ru":'Пользователь',
        'kz':'Пайдаланушы'
    },
}

const changeUrl = (lang) =>{
    location.href = window.location.pathname + '#' + lang
    location.reload()
}

const changeLanguage = () =>{
    
    let hash = window.location.hash.substring(1)
    
    for(let key in langArray){
       let element =  document.querySelector('.lang-' + key)
       console.log(element)
       if(element){
        element.innerHTML = langArray[key][hash]
       }
    };
    
}
changeLanguage()