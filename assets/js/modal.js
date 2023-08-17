

const modal = (open,e,info) =>{
    let modalContainer = document.querySelector('.modal-container')
    let modalContent = modalContainer.querySelector('.modal-content')
    
    if(open){
        modalContainer.classList.add('open')
        if(info ==='addUser'){
            modalContent.innerHTML = setAddUserForm()
        }
        else{
            usersInfo.forEach(user => {
                if(user.id === parseInt(currentUserId)){
                    user.division.forEach(member =>{
                        let memberId = e.closest('.member-parent').dataset.id
                        if(member.id === parseInt(memberId)){
                            switch(info){
                                case 'result':
                                    modalContent.innerHTML = setResultInfo(member)
                                    break
                                case 'fullInfo':
                                    modalContent.innerHTML = setFullInfo(member)
                                    break
                                case 'editUser':
                                    modalContent.innerHTML = setUserInfoForm(member)
                                    break
                                default:
                                    break
                            }
                                
                        }
                    
                    });
                }
                
            })
        }
        
    }
    else{
        modalContainer.classList.remove('open');
        modalContent.innerHTML = ``
    }
    
}