let dropdownBtn = document.querySelector('.dropdown');
let dropText = document.querySelector('.menu-text');
let dropIcon = document.querySelector('.menu-icon')
let dropdownMenu = document.querySelector('.menu-dropdown-otr');
dropdownBtn.style.color = "red";
dropdownBtn.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show-dropdown');
    dropText.classList.toggle('menu-active');
    dropIcon.classList.toggle('icon-active');
})