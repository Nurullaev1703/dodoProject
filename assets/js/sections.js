const setHeaderContent = (user) => {
  const headerContent = `
        
        <div class="nav-menu d-flex">
            <div class="choose-language d-flex">
                <p class="" onclick="changeUrl('ru')" id="ru">Рус</p>
                <p onclick="changeUrl('kz')" id="kz">Каз</p>
            </div>
            <div class="profile-preview d-flex" onclick="showExit(this)">
                <p class="role">${user.role_name}</p>
                <div class="img-cover">
                    <img class="avatar" src=${user.photo}>
                </div>
            </div>
            <a href="../../../index.html" class="btn-main">Выйти</a>
        </div>
    `;
  return headerContent;
};

const setUserInfoCard = (user) => {
  const userInfoCard = `
  <div class="user-img">
                <img src="${imgUrl + user.photo}" alt="">
                <div class="text-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                    />
                  </svg>
                  <h4 class="lang-addPhoto">Добавьте фото</h4>
              </div>
            </div>
            <p class="btn">${user.role_name}</p>
          <div class="text-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              />
            </svg>
            <h4 class="lang-fullName">Полное имя:</h4>
            <p class="about-name">${user.name}</p>
          </div>
          <div class="text-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
            <h4 class="">Работает с:</h4>
            <p class="about-date">${user.dateStartWork}</p>
          </div>
          <div class="text-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 384 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <style>
                svg {
                  fill: #808080;
                }
              </style>
              <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <h4 class="lang-adress">Адрес:</h4>
            <p class="about-location">${user.city_name}</p>
          </div>
          <div class="text-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </svg>
            <h4>E-mail:</h4>
            <p class="about-email">${user.email}</p>
          </div>
          <div class="text-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            <h4>Телефон:</h4>
            <p class="about-tel">${user.phone}</p>
          </div>
          <label for="changeProfile">
            <input type="button" id="changeProfile" onclick="modal(true,this,'editProfile')" hidden>
            <span>Редактировать</span>
        </label>
        `;
  return userInfoCard;
};

const setDivisions = (member) => {
  if(location.href.includes('manager')){
    const divisionMember = `
    <div class="division-member member-parent" data-id=${member.id}>
    <div class="member-info">
        <div class="img-cover">
            <img src=${imgUrl + member.photo} alt="">
        </div>
        <div class="text-container">
            <h5 class="member-city">${member.PName}</h5>
            <p class="member-name">${member.name}</p>
        </div>
    </div>
    <div class="text-container">
        <h5 class="lang-employers">Должность</h5>
        <p class="employee-count">${member.RName}</p>
    </div>
    <button class="btn-main lang-info" onclick="modal(true,this,'fullInfo')">Информация</button>
</div>`;
  return divisionMember;
  }
  const divisionMember = `
    <div class="division-member member-parent" data-id=${member.id}>
    <div class="member-info">
        <div class="img-cover">
            <img src=${imgUrl + member.photo} alt="">
        </div>
        <div class="text-container">
            <h5 class="member-city">${member.city_name}</h5>
            <p class="member-name">${member.name}</p>
        </div>
    </div>
    <div class="text-container">
        <h5 class="lang-employers">Должность</h5>
        <p class="employee-count">${member.role_name}</p>
    </div>
    <button class="btn-main lang-info" onclick="modal(true,this,'fullInfo')">Информация</button>
</div>`;
  return divisionMember;
};

// stats page

const setMembersResults = (member) => {
  if(location.href.includes('manager')){
    const memberResult = `
        <div class="division-member member-parent"
        data-id=${member.id} data-name='${member.UName}'
         data-point='${member.RName}'>
            <div class="member-info">
                <div class="img-cover">
                    <img src="${member.photo}" alt="">
                </div>
                <div class="text-container">
                    <h5 class="member-point">${member.PName}</h5>
                    <p class="member-name">${member.UName}</p>
                </div>
            </div>
            <button class="btn-main lang-info" onclick="modal(true,this,'result')">Инфо</button>
        </div>`;
  return memberResult;
  }
  const memberResult = `
        <div class="division-member member-parent"
        data-id=${member.id} data-name='${member.name}'
         data-point='${member.city_name}'>
            <div class="member-info">
                <div class="img-cover">
                    <img src="${member.photo}" alt="">
                </div>
                <div class="text-container">
                    <h5 class="member-point">${member.city_name}</h5>
                    <p class="member-name">${member.name}</p>
                </div>
            </div>
            <button class="btn-main lang-info" onclick="modal(true,this,'result')">Инфо</button>
        </div>`;
  return memberResult;
};

const setEquipmentStats = (member) => {
  const equipmentStats = `
    <div class="equipment-stats" data-name-equip='${member.name}'
    data-date-equip='${member.dateB}' data-point-equip='${member.adress}'>
            <div class="img-cover">
                <img src="${member.photo}" alt="">
            </div>
        <div class="text-container">
            <h5 class="name">${member.name}</h5>
            <p class="school">${member.adress}</p>
        </div>
        <p class="date">${member.dateB}</p>
        <p class="time">${member.time} минут</p>
    </div>`;
  return equipmentStats;
};
const setDivisionResults = (division) => {
  const memberResult = `
        <div class="division-member member-parent"
        data-id=${division.id} data-name='${division.UName}'
         data-point='${division.PName}'>
            <div class="member-info">
                <div class="text-container">
                    <h5 class="member-point">${division.PName}</h5>
                    <p class="member-name">${division.UName}</p>
                </div>
            </div>
            <button class="btn-main lang-info" onclick="modal(true,this,'resultDivision')">Инфо</button>
        </div>`;
  return memberResult;
};
//members page
const setMembersInfo = (member) => {
  const membersInfo = `
            <div class="row member-parent" data-id="${member.id}" data-city='${member.city_name}'>
                <div class="column">
                    <p class="name">${member.name}</p>
                </div>
                <div class="column">
                    <p class="city">${member.city_name}</p>
                </div>
                <div class="column">
                    <p class="role">${member.role_name}</p>
                </div>
                <div class="column">
                    <p class="join-date">${member.dateStartWork}</p>
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
    `;
  return membersInfo;
};
const setMembersInfoManager = (member) => {
  const membersInfo = `
            <div class="row member-parent" data-id="${member.id}" data-city='${member.city_name}'>
                <div class="column">
                    <p class="name">${member.name}</p>
                </div>
                <div class="column">
                    <p class="role">${member.RName}</p>
                </div>
                <div class="column">
                    <p class="join-date">${member.dateStartWork}</p>
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
    `;
  return membersInfo;
};
// divisions
const setMembersInfoDivision = (member,point) => {
  const membersInfo = `
            <div class="row member-parent" data-id="${member.id}" data-city='${member.city_name}'>
                <div class="column">
                    <p class="name">${member.name}</p>
                </div>
                <div class="column">
                    <p class="city">${point}</p>
                </div>
                <div class="column">
                    <p class="role">${member.role_name}</p>
                </div>
                <div class="column">
                    <p class="join-date">${member.dateStartWork}</p>
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
    `;
  return membersInfo;
};

const setUserInfoForm = (member,pageName) => {
  if(pageName === 'Портал'){
    const userInfoFormProfile = `
        <form action="" class="member-parent" data-id="${member.id}">
            <h3>Изменение профиля</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="${member.name}" required>
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="${member.login}" required>
            <p>Пароль</p>
            <input type="text" placeholder="Пароль" id="userPassword" value="">
            <p>Подтвердить пароль</p>
            <input type="text" placeholder="Подтвердите пароль" id="confirmPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="${member.email}" required>
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="${member.phone}">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="${member.adress}">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="${member.dateB}">
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="${member.dateB}">
            <p>Фотография</p>
            <input type="file" id="userImg" value="${member.photo}">
            <button onclick="saveUser(this,${member.id})" class="btn-main">Сохранить</button>
    </form>
    `;
    return userInfoFormProfile
  }
  if(location.href.includes('division')){
    let userPoint = `Выберите точку`
    let userPointId = -1
    if(member.point.length > 0){
      member.point.forEach(point =>{
        userPoint = point.name
        userPointId = point.id
      })
    }
    const userInfoForm = `
        <form action="" class="member-parent" data-id="${member.id}">
            <h3>Изменение профиля</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="${member.name}" required>
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="${member.login}" required>
            <p>Пароль</p>
            <input type="text" placeholder="Пароль" id="userPassword" value="">
            <p>Подтвердить пароль</p>
            <input type="text" placeholder="Подтвердите пароль" id="confirmPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="${member.email}" required>
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="${member.phone}">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="${member.adress}">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="${member.dateB}">
            <p class="point-hint">Точка</p>
            <div class="select points-select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="userPoint" data-id="${userPointId}">${userPoint}</p>
              <div class="select-inner">
              ${setPoints()}
              </div>
            </div>
            <p>Должность</p> 
            <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="userRole" data-role="${member.role}">${member.role_name}</p>
              <div class="select-inner">
              ${setRoles()}
              </div>
            </div>
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="${member.dateB}">
            <p>Фотография</p>
            <input type="file" id="userImg" value="${member.photo}">
            <input type="button" value ="Сохранить" onclick="saveUser(this,${member.id})" class="btn-main">
    </form>
    `;
  return userInfoForm;
  }
  if(location.href.includes('manager')){
    const userInfoForm = `
        <form action="" class="member-parent" data-id="${member.id}">
            <h3>Изменение профиля</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="${member.name}" required>
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="${member.login}" required>
            <p>Пароль</p>
            <input type="text" placeholder="Пароль" id="userPassword" value="">
            <p>Подтвердить пароль</p>
            <input type="text" placeholder="Подтвердите пароль" id="confirmPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="${member.email}" required>
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="${member.phone}">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="${member.adress}">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="${member.dateB}">
            <p>Должность</p> 
            <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="userRole" data-id="4">${member.RName}</p>
              <div class="select-inner">
              ${setRoles()}
              </div>
            </div>
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="${member.dateStartWork}">
            <p>Фотография</p>
            <input type="file" id="userImg" value="${member.photo}">
            <input type="button" value="Сохранить" onclick="saveUser(this,${member.id})" class="btn-main">
    </form>
    `;
  return userInfoForm;
  }
  const userInfoForm = `
        <form action="" class="member-parent" data-id="${member.id}">
            <h3>Изменение профиля</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="${member.name}" required>
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="${member.login}" required>
            <p>Пароль</p>
            <input type="text" placeholder="Пароль" id="userPassword" value="">
            <p>Подтвердить пароль</p>
            <input type="text" placeholder="Подтвердите пароль" id="confirmPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="${member.email}" required>
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="${member.phone}">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="${member.adress}">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="${member.dateB}">
            <p class="city-hint">Город</p>
            <div class="select cities-select" onclick="this.classList.toggle('active')">
              <p class="select-title">${member.city_name}</p>
              <div class="select-inner">
              ${setCities(cities)}
              </div>
            </div>
            <p>Должность</p> 
            <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title">Должность</p>
              <div class="select-inner">
              ${setRoles()}
              </div>
            </div>
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="${member.dateB}">
            <p>Фотография</p>
            <input type="file" id="userImg" value="${member.photo}">
            <button onclick="saveUser(this,${member.id})" class="btn-main">Сохранить</button>
    </form>
    `;
  return userInfoForm;
};

const setAddUserForm = () => {
  let userInfoForm = ``
  if(location.href.includes("division")){
    userInfoForm = `
        <form action="" class="member-parent">
            <h3>Добавление пользователя</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="">
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="">
            <p>Пароль</p>
            <input type="password" placeholder="Пароль" id="userPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="">
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="">
            <p class="point-hint">Точка</p>
            <div class="select points-select"  onclick="this.classList.toggle('active')">
              <p class="select-title" id="userPoint" data-id="">Все точки</p>
              <div class="select-inner">
              ${setPoints()}
              </div>
            </div>
            <p>Должность</p> 
            <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="userRole" data-id="">Должность</p>
              <div class="select-inner">
              ${setRoles()}
              </div>
            </div>
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="">
            <p>Фотография</p>
            <input type="file" id="userImg" value="">
            <input type="button" value="Сохранить" onclick="addUser(this)" class="btn-main">
    </form>
    `;
  }
  else if(location.href.includes("manager")){
    userInfoForm = `
        <form action="" class="member-parent">
            <h3>Добавление пользователя</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="">
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="">
            <p>Пароль</p>
            <input type="password" placeholder="Пароль" id="userPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="">
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="">
            <p>Должность</p> 
            <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="userRole" data-id="">Должность</p>
              <div class="select-inner">
              ${setRoles()}
              </div>
            </div>
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="">
            <p>Фотография</p>
            <input type="file" id="userImg" value="">
            <input type="button" value="Сохранить" onclick="addUser(this)" class="btn-main">
    </form>
    `;
  }
  else{
    userInfoForm = `
        <form action="" class="member-parent">
            <h3>Добавление пользователя</h3>
            <p>Имя</p>
            <input type="text" placeholder="Имя" id="userName" value="">
            <p>Логин</p>
            <input type="text" placeholder="Логин" id="userLogin" value="">
            <p>Пароль</p>
            <input type="password" placeholder="Пароль" id="userPassword" value="">
            <p>E-mail</p>
            <input type="email" placeholder="E-mail" id="userEmail" value="">
            <p>Телефон</p>
            <input type="text" placeholder="Номер телефона" id="userPhone" value="">
            <p>Адрес</p>
            <input type="text" placeholder="Адрес" id="userAdress" value="">
            <p>Дата рождения</p>
            <input type="date" placeholder="" id="userDateB" value="">
            <p class="city-hint">Город</p>
            <div class="select cities-select"  onclick="this.classList.toggle('active')">
              <p class="select-title" id="userCity" data-id="">Все города</p>
              <div class="select-inner">
              ${setCities(cities)}
              </div>
            </div>
            <p>Должность</p> 
            <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="userRole" data-id="">Должность</p>
              <div class="select-inner">
              ${setRoles()}
              </div>
            </div>
            <p>Дата начала работы</p>
            <input type="date" placeholder="" id="userDateStart" value="">
            <p>Фотография</p>
            <input type="file" id="userImg" value="">
            <input type="button" value="Сохранить" onclick="addUser(this)" class="btn-main">
    </form>
    `;
    
  }
  
  return userInfoForm;
};

const headerContentMembers = `
      <div class="burger-menu" onclick=burgerMenu(true)>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
      </div>
      <div class="page-title-container d-flex">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 640 512"
          >
          <path
          d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
          />
          </svg>
          <p class="page-title">Сотрудники</p>
      </div>`

// cities page
const setCityNames = (item) =>{
  const city = `
  <div class="division-member " data-city-name="${item.name}" data-id="${item.id}">
    <div class="city-info">
        <h3 class="city-name">${item.name}</h3>
    </div>
    <div class="city-actions">
        <button class="btn-main lang-change" onclick="modal(true,this,'changeCity')">Изменить</button>
        <button class="btn-red lang-change" onclick="deleteCity(this)">удалить</button>
    </div>
</div>`
return city
}
const setChangeCity = (city) =>{
   const cityForm = `
    <form action="" class="member-parent">
        <h3>Редактирование города</h3>
        <p>Название города</p>
        <input type="text" placeholder="Введите название города" id="city" value="${city.cityName}" data-id="${city.id}">
        <button onclick="changeCityName(this)" class="btn-main">Сохранить</button>
    </form>`
 return cityForm
}
const setAddCity = () =>{
  const cityForm = `
   <form action="" class="member-parent">
       <h3>Добавление города</h3>
       <p>Название города</p>
       <input type="text" placeholder="Введите название города" id="city" value="">
       <button onclick="addCityName(this)" class="btn-main">Сохранить</button>
   </form>`
return cityForm
}

// division points
const setPointsName = (item) =>{
  const city = `
  <div class="division-member " data-point-name="${item.name}" data-point-adress="${item.adress}" data-id="${item.id}">
    <div class="city-info">
        <h3 class="city-name">${item.name}</h3>
    </div>
    <div class="city-actions">
        <button class="btn-main lang-change" onclick="modal(true,this,'editPoint')">Изменить</button>
        <button class="btn-red lang-change" onclick="deletePoint(this)">удалить</button>
    </div>
</div>`
return city
}
const setAddPoint = () =>{
  const cityForm = `
   <form action="" class="member-parent">
       <h3>Точка</h3>
       <p>Добавление точки</p>
       <input type="text" placeholder="Введите название точки" id="point" value="">
       <p>Адрес точки</p>
       <input type="text" placeholder="Введите адрес" id="adress" value="">
       <p>Управляющий</p>
            <div class="select"  onclick="this.classList.toggle('active')" style="margin-bottom:10px;">
              <p class="select-title" id="userPoint" data-id="">Управляющие</p>
              <div class="select-inner">
              ${setManagers()}
              </div>
            </div>
       <input type="button" value="Добавить" onclick="addPointName(this)" class="btn-main">
   </form>`
return cityForm
}
const setChangePoint = (point) =>{
  const cityForm = `
   <form action="" class="member-parent">
       <h3>Точка</h3>
       <p>Новое название точки</p>
       <input type="text" placeholder="Введите название точки" id="point" value="${point.pointName}">
       <p>Адрес точки</p>
       <input type="text" placeholder="Введите адрес" id="adress" value="${point.pointAdress}">
       <p>Управляющий</p>
            <div class="select"  onclick="this.classList.toggle('active')" style="margin-bottom:10px;">
              <p class="select-title" id="userPoint" data-id="">Управляющие</p>
              <div class="select-inner">
              ${setManagers()}
              </div>
            </div>
       <input type="button" value="Сохранить" onclick="changePointName(this)" class="btn-main" data-point-id="${point.id}">
   </form>`
return cityForm
}
//tasks page
const setEmployees = () =>{
  let employee = ``
  usersInfo.forEach(member =>{
      employee += `
        <div class="division-member member-parent" data-id=${member.id}>
          <div class="member-info">
              <div class="text-container">
                  <h5 class="member-point">${member.PName}</h5>
                  <p class="member-name">${member.name}</p>
              </div>
          </div>
          <div class="text-container">
              <h5 class="lang-employers">Должность</h5>
              <p class="employee-count">${member.RName}</p>
          </div>
          <div class="select" onclick="this.classList.toggle('active')">
              <p class="select-title" id="courses">Курсы</p>
              <div class="select-inner">
                  <p onclick="modal(true,this,'newTask')">Новый курс</p>
                  <p onclick="modal(true,this,'endTasks')">Пройденные</p>
                  <p onclick="modal(true,this,'currentTasks')">Назначенные</p>
              </div>
            </div>
      </div>
        `
    })
  return employee
}
const setNewTask = () =>{
  let newTask = `
  <div class="courses-list">
      <h3>Курсы</h3>
      <ol>
          <li><div class="text-container">
              <p>Какой-то курс</p>
              <input type="button" value="Назначить" onclick="addTask()" class="btn-main">
          </div>
          </li>
      </ol>
  </div>`
  return newTask
}
const setEndTasks = () =>{
  let task = `
  <div class="courses-list">
      <h3>Пройденные курсы</h3>
      <ol>
          <li>
              <p>Какой-то курс</p>
          </li>
      </ol>
  </div>`
  return task
}
const setCurrentTasks = () =>{
  let task = `
  <div class="courses-list">
      <h3>Назначенные курсы</h3>
      <ol>
          <li>
              <p>Какой-то курс</p>
          </li>
      </ol>
  </div>`
  return task
}