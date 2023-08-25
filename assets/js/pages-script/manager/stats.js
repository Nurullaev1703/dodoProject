const setInfo = () =>{
    let header = document.querySelector('header .container');
    header.innerHTML += setHeaderContent(user)
    let resultsContainer = document.querySelector('#results-container');
    divisionsInfo.forEach(employee =>{
      resultsContainer.innerHTML += setMembersResults(employee)
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
    let pointFilter = $("[data-filterpoint]");
  
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
  

