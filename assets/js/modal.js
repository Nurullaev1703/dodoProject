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
        else{
            if(user.id === parseInt(currentUserId)){
                if(info ==='editProfile'){
                    console.log('test')
                    modalContent.innerHTML = setUserInfoForm(user,document.title)
                    modalContent.innerHTML = setAddUserForm()
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
                                divisionStatistics.forEach(item =>{
                                    if(member.city_name === item.name){
                                        modalContent.innerHTML = setResultInfo(member,item)
                                    }
                                })
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
