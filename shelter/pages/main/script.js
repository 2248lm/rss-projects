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
    menuList.style.transform = 'translatex(100%)';
    menuList.style.transition = 'transform 0.25s linear';
    menuStatus.classList.remove('open');
    menuStatus.classList.add('close');
    menuList.classList.remove('shadow');
  } else {
    menuList.style.display = 'flex';
    menuList.style.transform = 'none';
  }
}

window.addEventListener('resize', function () {
  getScreenWidth();
});

function openBurgerMenu() {
  burgerBtn.style.transform = 'rotate(90deg)';
  menuList.style.transform = 'translatex(0%)';
  menuList.style.transition = 'transform 0.25s linear';
  menuStatus.classList.remove('close');
  menuStatus.classList.add('open');
  menuList.classList.add('shadow');
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
