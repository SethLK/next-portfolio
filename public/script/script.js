document.addEventListener("DOMContentLoaded", function() {
    const menuLi = document.querySelector(".menu-li");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    // Function to hide the dropdown menu
    function hideDropdownMenu() {
      dropdownMenu.style.display = "none";
    }
  
    // Function to toggle the dropdown menu
    function toggleDropdownMenu() {
      if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "flex";
      } else {
        dropdownMenu.style.display = "none";
      }
    }
  
    menuLi.addEventListener("click", function() {
      toggleDropdownMenu();
    });
  
    
  });
  