const currentUserId = localStorage.getItem('id')

const setInfo = () =>{
    let header = document.getElementById('header');
    let testResults = document.querySelector('#results-container');
    let equipmentStats = document.querySelector('#equipment-container');
    usersInfo.forEach(user =>{
        if (user.id === parseInt(currentUserId)){
            header.innerHTML += setHeaderContent(user)
            user.division.forEach(member =>{
                testResults.innerHTML += setMembersResults(member)
                equipmentStats.innerHTML += setEquipmentStats(member)
            })
        }
    })
}
setInfo();
const burgerMenu = (open) =>{
    let sideBar = document.querySelector('.side-bar')
    if(open){
        sideBar.style.animationName = 'openSidebar'
        sideBar.classList.add('open')
    }
    else{
        sideBar.style.animationName = 'closeSidebar'
        setTimeout(() =>{
            sideBar.classList.remove('open')
        },300)
        
    }
}
// фильтр сотрудников в results-info
$(function() {
    let nameFilter = $("[data-filterName]");
    let roleFilter = $("[data-filterRole]");
    let questFilter = $("[data-filterQuest]");
    let pointFilter = $("[data-filterPoint]");
    let dateStartFilter = $("#member-date-start");
    let dateEndFilter = $("#member-date-end");
  
    nameFilter.on("change", updateFilters);
    roleFilter.on("change", updateFilters);
    dateStartFilter.on("change", updateFilters);
    dateEndFilter.on("change", updateFilters);
    questFilter.on("change", updateFilters);
    pointFilter.on("change", updateFilters);

    function updateFilters() {
      let name = nameFilter.val();
      let role = roleFilter.val();
      let fromDate = new Date(dateStartFilter.val());
      let toDate = new Date(dateEndFilter.val());
      let point = pointFilter.val();
      let quest = questFilter.val();

      $(".division-member").each(function() {
        let memberName = $(this).data('name');
        let memberRole = $(this).data('role');
        let itemDate = new Date($(this).data("date"));
        let memberPoint = $(this).data('point');
        let memberQuest = $(this).data('quest');

        let hideByRole = role !== "" && !memberRole.toLowerCase().startsWith(role.toLowerCase());
        let hideByName = name !== "" && !memberName.toLowerCase().startsWith(name.toLowerCase());
        let hideByDate = (isNaN(fromDate) || itemDate >= fromDate) && (isNaN(toDate) || itemDate <= toDate);
        let hideByQuest = quest !== "" && !memberQuest.toLowerCase().startsWith(quest.toLowerCase());
        let hideByPoint = point !== "" && !memberPoint.toLowerCase().startsWith(point.toLowerCase());

        if (hideByRole || hideByName || !hideByDate || hideByQuest || hideByPoint) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
    
  });
// фильтр оборудования 
  $(function() {
    let nameFilter = $("[data-member-name-equip]");
    let pointFilter = $("[data-member-point-equip]");
    let dateStartFilter = $("#member-fromDate");
    let dateEndFilter = $("#member-toDate");
  
    nameFilter.on("change", updateFiltersEquip);
    dateStartFilter.on("change", updateFiltersEquip);
    dateEndFilter.on("change", updateFiltersEquip);
    pointFilter.on("change", updateFiltersEquip);

    function updateFiltersEquip() {
      let name = nameFilter.val();
      let fromDate = new Date(dateStartFilter.val());
      let toDate = new Date(dateEndFilter.val());
      let point = pointFilter.val();

      $(".equipment-stats").each(function() {
        let memberName = $(this).data('name-equip');
        let itemDate = new Date($(this).data("date-equip"));
        let memberPoint = $(this).data('point-equip');

        let hideByName = name !== "" && !memberName.toLowerCase().startsWith(name.toLowerCase());
        let hideByDate = (isNaN(fromDate) || itemDate >= fromDate) && (isNaN(toDate) || itemDate <= toDate);
        let hideByPoint = point !== "" && !memberPoint.toLowerCase().startsWith(point.toLowerCase());

        if (hideByName || !hideByDate || hideByPoint) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
  });
  
// функция для переключения профилей
$(function() {
  const itemsPerPage = 7;
  let currentPage = 0;
  const items = $(".division-member");
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  function showItemsOnPage(page) {
    items.addClass("hide");
    items.slice(page * itemsPerPage, (page + 1) * itemsPerPage).removeClass("hide");
  }
  
  function updatePaginationButtons() {
    $("#prevPage").prop("disabled", currentPage === 0);
    $("#nextPage").prop("disabled", currentPage === totalPages - 1);
  }
  
  $("#prevPage").click(function() {
    if (currentPage > 0) {
      currentPage--;
      showItemsOnPage(currentPage);
      updatePaginationButtons();
    }
  });
  
  $("#nextPage").click(function() {
    if (currentPage < totalPages - 1) {
      currentPage++;
      showItemsOnPage(currentPage);
      updatePaginationButtons();
    }
  });
  
  // Показать первую страницу при загрузке страницы
  showItemsOnPage(currentPage);
  updatePaginationButtons();
});


