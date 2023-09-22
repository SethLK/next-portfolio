document.addEventListener("DOMContentLoaded", function() {
    const menuLi = document.querySelector(".menu-li");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    menuLi.addEventListener("click", function() {
      switch (dropdownMenu.style.display) {
        case "flex":
          dropdownMenu.style.display = "none";
          break;
        case "none":
          dropdownMenu.style.display = "flex";
          break;
        default:
          dropdownMenu.style.display = "flex";
      }
    });
  });
  