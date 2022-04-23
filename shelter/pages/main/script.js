//Pets data
const pets = [
  {
    "name": "Katrine",
    "img": "../../assets/img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/img/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/img/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/img/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
]

//Burger menu
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

//Popup
const popUpStatus = document.querySelector('.close-pet-info'),
  popUpBtn = document.querySelector('.popup__button'),
  popUp = document.querySelector('.popup'),
  popUpWindow = document.querySelector('.popup__content'),
  petCards = document.querySelectorAll('.pet-card');

function loadPet() {
  openPopUp();
}

petCards.forEach(petCard => {
  petCard.addEventListener('click', function () {
    loadPet();
  });
});

function openPopUp() {
  popUpStatus.classList.remove('close-pet-info');
  popUpStatus.classList.add('open-pet-info');
  popUp.classList.add('open-popup');
  document.body.style['overflow'] = 'hidden';
}

function closePopUp() {
  popUpStatus.classList.remove('open-pet-info');
  popUpStatus.classList.add('close-pet-info');
  popUp.classList.remove('open-popup');
  document.body.style['overflow'] = 'auto';
}

popUpBtn.addEventListener('click', closePopUp);

function getAreaPopup(e) {
  const isOpenMenu = popUpStatus.classList.contains('open-pet-info');
  const target = e.target;
  const its_menu = target == popUpWindow || popUpWindow.contains(target);

  if (!its_menu && isOpenMenu) {
    closePopUp();
  }
}

popUp.addEventListener('click', getAreaPopup);

function hoverPopupBtn() {
  popUpBtn.style.backgroundColor = 'var(--color-primary-light)';
  popUpBtn.style.border = 'none';
}

popUp.onmouseover = function (e) {
  const target = e.target;
  const its_menu = target == popUpWindow || popUpWindow.contains(target);

  if (!its_menu) {
    hoverPopupBtn();
  }
};

popUpBtn.addEventListener('mouseover', hoverPopupBtn);

popUp.onmouseout = function () {
  popUpBtn.style.backgroundColor = '';
  popUpBtn.style.border = '';
};
