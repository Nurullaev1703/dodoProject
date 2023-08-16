

const modal = (open) =>{
    let modalContainer = document.querySelector('.modal-container')
    let modalContent = modalContainer.querySelector('.modal-content')
    if(open){
        modalContainer.classList.add('open')
        usersInfo.forEach(user => {
            if(user.id === parseInt(currentUserId)){
                console.log('test')
                user.division.forEach(member =>{
                    modalContent.innerHTML = `
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
                });
            }
            
        })
    }
    else{
        modalContainer.classList.remove('open');
        modalContent.innerHTML = ``
    }
    
}