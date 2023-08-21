const setFullInfo = (member) => {
  const fullInfo = `
    <div class="user-img">
    <img src=${member.photo} alt="">
    </div>
    <div class="user-info">
    <div class="text-container">
        <h4>Имя:</h4>
        <p>${member.name}</p>
    </div>
    <div class="text-container">
        <h4>Тел:</h4>
        <p>${member.phone}</p>
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
        <p>${member.role_name}</p>
    </div>
    </div>
`;
  return fullInfo;
};

const setResultInfo = (member,statistic) => {
  const resultInfo = `
        <div class="user-img">
            <img src=${member.photo} alt="">
        </div>
        <div class="user-info">
            <div class="text-container">
                <h4>Имя:</h4>
                <p>${member.name}</p>
            </div>
            <div class="text-container">
                <h4>Должность:</h4>
                <p>${member.role_name}</p>
            </div>
            <div class="text-container">
                <h4>Город:</h4>
                <p>${member.city_name}</p>
            </div>
            <div class="text-container">
                <h4>Начало работы:</h4>
                <p>${member.dateStartWork}</p>
            </div>
            <div class="text-container">
                <h4>Количество управляющих:</h4>
                <p>${statistic.upr_count}</p>
            </div>
            <div class="text-container">
                <h4>Количество Курьеров:</h4>
                <p>${statistic.kur_count}</p>
            </div>
            <div class="text-container">
                <h4>Общая успеваемость:</h4>
                <p>${statistic.avg}/10</p>
            </div>
        </div>
    `;
  return resultInfo;
};
