const setInfo = () =>{
    let header = document.querySelector('header .container');
    header.innerHTML += setHeaderContent(user)
    setLangActive()
}

const setCheckbox = (e) =>{
  console.log(e)
  if(e.checked){
    e.parentNode.parentNode.classList.add('active')
  }
  else{
    e.parentNode.parentNode.classList.remove('active')
  }
}
const giveTask = (e) =>{
  return
}