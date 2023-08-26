const setInfo = () =>{
    let header = document.querySelector('header .container');
    header.innerHTML += setHeaderContent(user)
    let taskContainer = document.querySelector('.tasks')
    taskContainer.innerHTML += setTasksInfo()
}
//modal(true,this,'newTask')
const setCheckbox = (e) =>{
  console.log(e)
  if(e.checked){
    e.parentNode.parentNode.classList.add('active')
  }
  else{
    e.parentNode.parentNode.classList.remove('active')
  }
}
const addTask = (e) =>{
  $.ajax({
    type: 'POST',
    url: url+'/edu/add', 
    data: {
        currentUserId: parseInt(currentUserId),
        userId: 1,
        lesson: 'test'
    },
    success: function (response) {
      rolesName.push(...response)
    },
    error: function (error) {
        console.log(error);
    }
  });
}
