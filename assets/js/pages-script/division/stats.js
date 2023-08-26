const setInfo = () =>{
    let header = document.querySelector('header .container');
    let testResults = document.querySelector('#results-container');
    let UprCount = document.querySelector('.count-upr')
    let CurCount = document.querySelector('.count-cur')
    header.innerHTML += setHeaderContent(user)
    UprCount.innerHTML = `Кол-во: ${divisionsInfo[divisionsInfo.length-2].count_upr}`
    CurCount.innerHTML = `Кол-во: ${divisionsInfo[divisionsInfo.length-1].count_cur}`
    divisionsInfo.forEach(item =>{
      if(item.id){
        testResults.innerHTML += setDivisionResults(item)
      }
    })
    
}
const openFilterResults = (open,filterName) =>{
  let filter = ``
  if(filterName === 'results'){
    filter = document.querySelector('.results-filter')
  }
  else{
    filter = document.querySelector('.equipment-filter')
  }
  if(open){
      filter.style.animationName = 'openFilter'
      filter.classList.add('open')
  }
  else{
    filter.style.animationName = 'closeFilter'
      setTimeout(() =>{
        filter.classList.remove('open')
      },300)
      
  }
}

const clearInputs = (e) =>{
  let inputs = e.parentNode.querySelectorAll('input[type="text"]')
  inputs.forEach(item =>{
    item.value = ''
  })
}

// фильтр сотрудников в results-info
$(function() {
    let nameFilter = $("[data-filterName]");
    let pointFilter = $("[data-filterPoint]");
  
    nameFilter.on("keyup", updateFilters);
    pointFilter.on("keyup", updateFilters);

    function updateFilters() {
      let name = nameFilter.val();
      let point = pointFilter.val();

      $(".division-member").each(function() {
        let memberName = $(this).data('name');
        let memberPoint = $(this).data('point');


        let hideByName = name !== "" && !memberName.toLowerCase().startsWith(name.toLowerCase());
        let hideByPoint = point !== "" && !memberPoint.toLowerCase().startsWith(point.toLowerCase());

        if (hideByName || hideByPoint) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
    
  });
  

