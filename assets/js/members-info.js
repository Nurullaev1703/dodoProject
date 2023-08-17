const setFullInfo = (member) => {
    const fullInfo = `
    <div class="user-img">
    <img src=${member.img} alt="">
    </div>
    <div class="user-info">
    <div class="text-container">
        <h4>Имя:</h4>
        <p>${member.name}</p>
    </div>
    <div class="text-container">
        <h4>Тел:</h4>
        <p>${member.tel}</p>
    </div>
    <div class="text-container">
        <h4>email:</h4>
        <p>${member.email}</p>
    </div>
    <div class="text-container">
        <h4>Адрес:</h4>
        <p>${member.adress}</p>
    </div>
    <div class="text-container">
        <h4>День рождения:</h4>
        <p>${member.dateB}</p>
    </div>
    <div class="text-container">
        <h4>Должность:</h4>
        <p>${member.role}</p>
    </div>
    <div class="text-container">
        <h4>Успеваемость:</h4>
        <p>${member.rating}</p>
    </div>
    </div>
`  
return fullInfo
}

const setResultInfo = (member) =>{
    const resultInfo = `
        <div class="user-img">
            <img src=${member.img} alt="">
        </div>
        <div class="user-info">
            <div class="text-container">
                <h4>Имя:</h4>
                <p>${member.name}</p>
            </div>
            <div class="text-container">
                <h4>Адрес:</h4>
                <p>${member.adress}</p>
            </div>
            <div class="text-container">
                <h4>Время:</h4>
                <p>${member.time} минут</p>
            </div>
            <div class="text-container">
                <h4>Ошибки:</h4>
                <p>${member.mistakes}</p>
            </div>
        </div>
    `
    return resultInfo
}