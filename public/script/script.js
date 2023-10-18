const menuBtn = document.getElementById('menu_btn');
const dropdownMenu = document.getElementById('d-links');

const body = document.querySelector('body')

menuBtn.addEventListener('click', (e) => {
  if (window.innerWidth < 601) {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
      dropdownMenu.style.display = 'flex';
    } else {
      dropdownMenu.style.display = 'none';
    }
  } else {
    dropdownMenu.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    dropdownMenu.style.display = 'none';
  }
});

