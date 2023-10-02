document.addEventListener("DOMContentLoaded", function() {
  const menuLi = document.querySelector(".menu-li");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Function to hide the dropdown menu
  dropdownMenu.style.display = "none";

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

  // Close the dropdown menu when a navigation link is clicked
  const navigationLinks = document.querySelectorAll(".links");
  navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      dropdownMenu.style.display = "none";
    });
  });
});
