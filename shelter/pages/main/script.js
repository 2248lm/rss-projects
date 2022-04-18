const menuStatus = document.querySelector('.close'),
  burgerBtn = document.querySelector('.burger'),
  menuList = document.querySelector('.menu__list'),
  menuItems = document.querySelectorAll('.menu__link');

function getScreenWidth() {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    menuList.style.display = 'none';
    menuList.style.right = '-350px';
  } else {
    menuList.style.display = 'flex';
    menuList.style.right = '0';
  }
}

window.addEventListener('resize', function () {
  getScreenWidth();
});

const openBurgerMenu = () => {
  burgerBtn.style.transform = 'rotate(90deg)';
  menuStatus.classList.remove('close');
  menuStatus.classList.add('open');
  menuList.classList.add('shadow');
  menuList.style.right = '0';
  menuList.style.display = 'flex';
}

const closeBurgerMenu = () => {
  burgerBtn.style.transform = 'rotate(0deg)';
  menuStatus.classList.remove('open');
  menuStatus.classList.add('close');
  menuList.classList.remove('shadow');
  getScreenWidth();
}

burgerBtn.addEventListener('click', () => {
  const isCloseMenu = menuStatus.classList.contains('close');
  isCloseMenu ? openBurgerMenu() : closeBurgerMenu();
});

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', closeBurgerMenu);
});
