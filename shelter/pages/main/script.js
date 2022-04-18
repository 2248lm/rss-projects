const menuStatus = document.querySelector('.close'),
  burgerBtn = document.querySelector('.burger'),
  menuList = document.querySelector('.menu__list'),
  menuItems = document.querySelectorAll('.menu__link'),
  menuLogo = document.querySelector('.menu-logo');

function getScreenWidth() {
  let screenWidth = window.innerWidth;
  burgerBtn.removeEventListener('click', closeBurgerMenu);
  if (screenWidth < 768) {
    burgerBtn.style.transform = 'rotate(0deg)';
    menuStatus.classList.remove('open');
    menuStatus.classList.add('close');
    menuList.classList.remove('shadow');
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

function openBurgerMenu() {
  burgerBtn.style.transform = 'rotate(90deg)';
  menuStatus.classList.remove('close');
  menuStatus.classList.add('open');
  menuList.classList.add('shadow');
  menuList.style.right = '0';
  menuList.style.display = 'flex';
}

function closeBurgerMenu() {
  getScreenWidth();
}

burgerBtn.addEventListener('click', function () {
  const isCloseMenu = menuStatus.classList.contains('close');
  isCloseMenu ? openBurgerMenu() : closeBurgerMenu();
});

menuLogo.addEventListener('click', getScreenWidth);

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', closeBurgerMenu);
});

function getAreaClick(e) {
  const isOpenMenu = menuStatus.classList.contains('open');
  const target = e.target;
  const its_menu = target == menuList || menuList.contains(target);
  const its_btnMenu = target == burgerBtn;

  if (!its_menu && !its_btnMenu && isOpenMenu) {
    closeBurgerMenu();
  }
}

document.addEventListener('click', getAreaClick);
