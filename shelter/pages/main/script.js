const menuStatus = document.querySelector('.close'),
  burgerBtn = document.querySelector('.burger'),
  menuList = document.querySelector('.menu__list'),
  menuItems = document.querySelectorAll('.menu__link'),
  menuLogo = document.querySelector('.menu-logo');

function openBurgerMenu() {
  burgerBtn.style.transform = 'rotate(90deg)';
  menuStatus.classList.remove('close');
  menuStatus.classList.add('open');
  menuList.classList.add('open-menu-list');
  menuList.classList.add('shadow');
  document.body.style['overflow-y'] = 'hidden';
  burgerBtn.removeEventListener('click', openBurgerMenu);
}

function closeBurgerMenu() {
  burgerBtn.style.transform = 'rotate(0deg)';
  menuStatus.classList.remove('open');
  menuStatus.classList.add('close');
  menuList.classList.remove('open-menu-list');
  menuList.classList.remove('shadow');
  document.body.style['overflow-y'] = 'auto';
  burgerBtn.removeEventListener('click', closeBurgerMenu);
}

burgerBtn.addEventListener('click', function () {
  const isCloseMenu = menuStatus.classList.contains('close');
  isCloseMenu ? openBurgerMenu() : closeBurgerMenu();
});

menuLogo.addEventListener('click', closeBurgerMenu);

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

window.addEventListener('resize', function () {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    closeBurgerMenu()
  }
});
