const division = JSON.parse(localStorage.getItem('members'))

const modal = (open,e,info) =>{
    let modalContainer = document.querySelector('.modal-container')
    let modalContent = modalContainer.querySelector('.modal-content')
    if(open){
        modalContainer.classList.add('open')
        if(info ==='addUser'){
            modalContent.innerHTML = setAddUserForm()
            var targetElement = document.getElementById('userPhone');
            var phoneMask = IMask(targetElement, {
                mask: '+{7}(000)000-00-00'
            });
            
            
        }
        else if(info ==='changeCity'){
            modalContent.innerHTML = setChangeCity(e.parentNode.parentNode.dataset)
        }
        else if(info ==='addCity'){
            modalContent.innerHTML = setAddCity()
        }
        else if(info ==='showEmployees'){
            modalContent.innerHTML = setEmployees()
        }
        else if(info ==='addPoint'){
            modalContent.innerHTML = setAddPoint()
        }
        else if(info ==='editPoint'){
            modalContent.innerHTML = setChangePoint(e.parentNode.parentNode.dataset)
        }
        else if(info ==='endTasks'){
            modalContent.innerHTML = setEndTasks(e.parentNode.parentNode.parentNode.dataset.userId)
        }
        else if(info ==='currentTasks'){
            modalContent.innerHTML = setCurrentTasks(e.dataset.userId)
        }
        else if(info ==='newTask'){
            $.ajax({
                type: 'POST',
                url: url+'/edu/lessons',
                data: {
                  user_id: e.dataset.userId
                },
                success: function (response) {
                  localStorage.setItem('currentEducation',JSON.stringify(response))
                  currentTasks = JSON.parse(localStorage.getItem('currentEducation'))
                  modalContent.innerHTML = setNewTask(currentTasks)
                  modalContent.querySelector('.courses-list').dataset.userId = e.dataset.userId
                },
                error: function (error) {
                    console.log(error);
                }
              });
            
        }
        else if(info ==='addDevice'){
            modalContent.innerHTML = setAddDevice()
        }
        else if(info ==='editDevice'){
            modalContent.innerHTML = setEditDevice(e.parentNode.parentNode.dataset)
        }
        else{
            if(user.id === parseInt(currentUserId)){
                if(info ==='editProfile'){
                    modalContent.innerHTML = setUserInfoForm(user,document.title)
                    var targetElement = document.getElementById('userPhone');
                    var phoneMask = IMask(targetElement, {
                        mask: '+{7}(000)000-00-00'
                    });
                }
                else{
                    usersInfo.forEach(member =>{
                    let memberId = e.closest('.member-parent').dataset.id
                    if(member.id === parseInt(memberId)){
                        switch(info){
                            case 'result':
                                if(!location.href.includes('manager')){
                                    divisionStatistics.forEach(item =>{
                                        if(member.city_name === item.name){
                                            modalContent.innerHTML = setResultInfo(member,item)
                                        }
                                    })
                                }
                                else{
                                    divisionsInfo.forEach(item =>{
                                        if(member.name === item.UName){
                                            modalContent.innerHTML = setResultInfo(member,item)
                                            if(item.score === null){
                                                modalContent.querySelector('#score').innerHTML = 'Нет оценки'
                                            }
                                            if(item.dateLastEdu === null){
                                                modalContent.querySelector('#lastEdu').innerHTML = 'Нет обучения'
                                            }
                                        }
                                    })
                                }
                                
                                break
                                case 'resultDivision':
                                    modalContent.innerHTML = setResultInfoDivision(divisionsInfo)
                                    break
                            case 'fullInfo':
                                modalContent.innerHTML = setFullInfo(member)
                                break
                            case 'editUser':
                                modalContent.innerHTML = setUserInfoForm(member,document.title)
                                var targetElement = document.getElementById('userPhone');
                                var phoneMask = IMask(targetElement, {
                                    mask: '+{7}(000)000-00-00'
                                });
                                
                                break
                            default:
                                break
                        }    
                    }
                });
                }
            }   
        }  
    }
    else{
        modalContainer.classList.remove('open');
        modalContent.innerHTML = ``
    }
    
}
