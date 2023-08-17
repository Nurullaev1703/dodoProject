const setHeaderContent = (user) =>{
        const headerContent = `
        <div class="container d-flex">
        <div class="burger-menu" onclick=burgerMenu(true)>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="location-container d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#808080}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <p class="location">${user.adress}</p>
        </div>
        <div class="nav-menu d-flex">
            <div class="choose-language d-flex">
                <p class="active" onclick="changeUrl('ru')" id="ru">Рус</p>
                <p onclick="changeUrl('kz')" id="kz">Каз</p>
            </div>
            <div class="profile-preview d-flex">
                <p class="role">${user.roleName}</p>
                <div class="img-cover">
                    <img class="avatar" src=${user.img}>
                </div>
            </div>
        </div>
    </div>`
    return headerContent
}

// profile page
const setUserProfileCard = (user) =>{
    const userProfileCard = `
        <div class="profile-card">
                <div class="bg"></div>
                <div class="card-content">
                    <div class="avatar">
                        <img src=${user.img} alt="">
                        <label for="change-avatar">
                            <input type="file" id="change-avatar" hidden>
                            <span class="lang-changeImg">Сменить фото</span>
                        </label>
                    </div>
                    <div class="info">
                        <h2 class="name">${user.name}</h2>
                        <div class="text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
                            <p class="role">${user.roleName}</p>
                        </div>
                        <div class="text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            <p class="working lang-joinDate">Работает с</p><span>${user.joinDate}</span> 
                        </div>
                    </div>
                </div>

            </div>`
            return userProfileCard
}


const setUserInfoCard = (user) =>{
    const userInfoCard = `
        <div class="text-container">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
        <h4 class="lang-fullName">Полное имя:</h4>
        <p class="about-name">${user.name}</p>
        </div>
        <div class="text-container">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
        <h4 class="lang-role">Должность:</h4>
        <p class="about-role">${user.roleName}</p>
        </div>
        <div class="text-container">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#808080}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        <h4 class="lang-adress">Адрес:</h4>
        <p class="about-location">${user.adress}</p>
        </div>
        <div class="text-container">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
        <h4>E-mail:</h4>
        <p class="about-email">${user.email}</p>
        </div>
        <div class="text-container">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        <h4>Телефон:</h4>
        <p class="about-tel">${user.tel}</p>
    </div>`
    return userInfoCard
}

const setDivisions = (member) =>{
    const divisionMember = `
    <div class="division-member member-parent" data-id=${member.id}>
    <div class="member-info">
        <div class="img-cover">
            <img src=${member.img} alt="">
        </div>
        <div class="text-container">
            <h5 class="member-name">${member.name}</h5>
            <p class="member-city">${member.adress}</p>
        </div>
    </div>
    <div class="text-container">
        <h5 class="lang-employers">Сотрудники</h5>
        <p class="employee-count">${member.count}</p>
    </div>
    <button class="btn-green lang-info" onclick="modal(true,this,'fullInfo')">Информация</button>
</div>`
return divisionMember
}

// stats page
const setMembersResults = (member) =>{
    const memberResult = `
        <div class="division-member member-parent" data-id=${member.id}>
            <div class="member-info">
                <div class="img-cover">
                    <img src=${member.img} alt="">
                </div>
                <div class="text-container">
                    <h5 class="member-name">${member.name}</h5>
                    <p class="member-city">${member.adress}</p>
                </div>
            </div>
            <div class="text-container">
                <h5 class="lang-rating">Оценка:</h5>
                <p class="employee-count">${member.rating}</p>
            </div>
            <button class="btn-green lang-info" onclick="modal(true,this,'result')">Информация</button>
        </div>`
        return memberResult
}

const setEquipmentStats = (member) =>{
    const equipmentStats = `
    <div class="equpment-stats">
            <div class="img-cover">
                <img src="${member.img}" alt="">
            </div>
        <div class="text-container">
            <h5 class="name">${member.name}</h5>
            <p class="school">${member.adress}</p>
        </div>
        <p class="date">${member.dateB}</p>
        <p class="time">${member.time} минут</p>
    </div>`
    return equipmentStats
}

//members page
const setMembersInfo = (member) =>{
    const membersInfo = `
            <div class="row member-parent" data-id="${member.id}" data-city='${member.adress}'>
                <div class="column">
                    <p class="name">${member.name}</p>
                </div>
                <div class="column">
                    <p class="adress">${member.adress}</p>
                </div>
                <div class="column">
                    <p class="role">${member.role}</p>
                </div>
                <div class="column">
                    <p class="join-date">${member.dateB}</p>
                </div>
                <div class="column edit-column" >
                    <div class="edit" onclick="modal(true,this,'editUser')">
                        <svg  xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                    </div>
                    <div class="delete" onclick="deleteUser(${member.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                    </div>
                </div>
            </div>
    `
    return membersInfo
}

const setUserInfoForm = (member) =>{
    const userInfoForm = `
        <form action="" class="member-parent" data-id="${member.id}">
            <h3>Изменение профиля</h3>
            <input type="text" placeholder="Имя" id="userName" value="${member.name}" required>
            <input type="text" placeholder="Логин" id="userLogin" value="${member.login}" required>
            <input type="password" placeholder="Пароль" id="userPassword" value="${member.login}" required>
            <input type="email" placeholder="E-mail" id="userEmail" value="${member.email}" required>
            <input type="text" placeholder="Адрес" id="userAdress" value="${member.adress}">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="${member.dateB}">
            <input type="text" placeholder="Город" id="userCity" value="${member.adress}">
            <input type="text" placeholder="Должность" id="userRole" value="${member.role}">
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="${member.dateB}">
            <p>Фотография</p>
            <input type="file" id="userImg" value="${member.img}">
            <button onclick="saveUser(this,${member.id})" class="btn-green">Сохранить</button>
    </form>
    `
    return userInfoForm
}

const setAddUserForm = () =>{
    const userInfoForm = `
        <form action="" class="member-parent">
            <h3>Добавление пользователя</h3>
            <input type="text" placeholder="Имя" id="userName" value="">
            <input type="text" placeholder="Логин" id="userLogin" value="">
            <input type="password" placeholder="Пароль" id="userPassword" value="">
            <input type="email" placeholder="E-mail" id="userEmail" value="">
            <input type="text" placeholder="Адрес" id="userAdress" value="">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="">
            <input type="text" placeholder="Город" id="userCity" value="">
            <input type="text" placeholder="Должность" id="userRole" value="">
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="">
            <p>Фотография</p>
            <input type="file" id="userImg" value="">
            <button onclick="addUser(this)" class="btn-green">Сохранить</button>
    </form>
    `
    return userInfoForm
}