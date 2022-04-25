const JSON_PETS = `[
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
]`;

const PETS = JSON.parse(JSON_PETS);

const PETS_NAME_ARR = [];
for (let i of PETS) {
  PETS_NAME_ARR.push(i.name);
}

//Burger menu
const MENU_STATUS = document.querySelector('.close'),
  BURGER_BTN = document.querySelector('.burger'),
  MENU_LIST = document.querySelector('.menu__list'),
  MENU_ITEMS = document.querySelectorAll('.menu__link'),
  MENU_LOGO = document.querySelector('.menu-logo'),
  MENU_SHADOW = document.querySelector('.menu__shadow');

function openBurgerMenu() {
  BURGER_BTN.style.transform = 'rotate(90deg)';
  MENU_STATUS.classList.remove('close');
  MENU_STATUS.classList.add('open');
  MENU_LIST.classList.add('open-menu-list');
  MENU_SHADOW.classList.add('menu-shadow-open');
  document.body.style['overflow-y'] = 'hidden';
}

function closeBurgerMenu() {
  BURGER_BTN.style.transform = 'rotate(0deg)';
  MENU_STATUS.classList.remove('open');
  MENU_STATUS.classList.add('close');
  MENU_LIST.classList.remove('open-menu-list');
  MENU_SHADOW.classList.remove('menu-shadow-open');
  document.body.style['overflow-y'] = '';
}

BURGER_BTN.addEventListener('click', function () {
  const isCloseMenu = MENU_STATUS.classList.contains('close');
  isCloseMenu ? openBurgerMenu() : closeBurgerMenu();
});

MENU_LOGO.addEventListener('click', closeBurgerMenu);

MENU_ITEMS.forEach(menuItem => {
  menuItem.addEventListener('click', closeBurgerMenu);
});

function getAreaClick(e) {
  const isOpenMenu = MENU_STATUS.classList.contains('open');
  const target = e.target;
  const itsMenu = target == MENU_LIST || MENU_LIST.contains(target);
  const itsBtnMenu = target == BURGER_BTN;

  if (!itsMenu && !itsBtnMenu && isOpenMenu) {
    closeBurgerMenu();
  }
}

MENU_SHADOW.addEventListener('click', getAreaClick);

window.addEventListener('resize', function () {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    closeBurgerMenu()
  }
});

//Pop-up
let petCards = document.querySelectorAll('.pet-card');

const POP_UP_STATUS = document.querySelector('.close-pet-info'),
  POP_UP_BTN = document.querySelector('.popup__button'),
  POP_UP = document.querySelector('.popup'),
  POP_UP_WINDOW = document.querySelector('.popup__content');

const POP_UP_PET_IMG = document.querySelector('.popup__img'),
  POP_UP_PET_NAME = document.querySelector('.popup__name'),
  POP_UP_PET_TYPE = document.querySelector('.popup__type'),
  POP_UP_PET_DESCRIPTION = document.querySelector('.popup__description'),
  POP_UP_ADDITIONAL_INFO = document.querySelector('.popup__additional'),
  PET_AGE = document.querySelector(".popup__additional li:nth-child(1) span"),
  PET_INOCULATIONS = document.querySelector(".popup__additional li:nth-child(2) span"),
  PET_DISEASES = document.querySelector(".popup__additional li:nth-child(3) span"),
  PET_PARASITES = document.querySelector(".popup__additional li:nth-child(4) span");

function openPopUp() {
  POP_UP_STATUS.classList.remove('close-pet-info');
  POP_UP_STATUS.classList.add('open-pet-info');
  POP_UP.classList.add('open-popup');
  document.body.style['overflow'] = 'hidden';
}

function loadPet(petName) {
  const PET_INDEX = PETS_NAME_ARR.indexOf(petName);
  POP_UP_PET_IMG.src = PETS[PET_INDEX].img;
  POP_UP_PET_NAME.innerHTML = PETS[PET_INDEX].name;
  POP_UP_PET_TYPE.innerHTML = `${PETS[PET_INDEX].type} - ${PETS[PET_INDEX].breed}`;
  POP_UP_PET_DESCRIPTION.innerHTML = PETS[PET_INDEX].description;
  PET_AGE.innerHTML = PETS[PET_INDEX].age;
  PET_INOCULATIONS.innerHTML = PETS[PET_INDEX].inoculations;
  PET_DISEASES.innerHTML = PETS[PET_INDEX].diseases;
  openPopUp();
}

petCards.forEach(petCard => {
  petCard.addEventListener('click', function () {
    loadPet(petCard.children[1].innerHTML);
  });
});

function closePopUp() {
  POP_UP_STATUS.classList.remove('open-pet-info');
  POP_UP_STATUS.classList.add('close-pet-info');
  POP_UP.classList.remove('open-popup');
  document.body.style['overflow'] = 'auto';
}

POP_UP_BTN.addEventListener('click', closePopUp);

function getAreaPopup(e) {
  const isOpenMenu = POP_UP_STATUS.classList.contains('open-pet-info');
  const target = e.target;
  const itsMenu = target == POP_UP_WINDOW || POP_UP_WINDOW.contains(target);

  if (!itsMenu && isOpenMenu) {
    closePopUp();
  }
}

POP_UP.addEventListener('click', getAreaPopup);

function hoverPopupBtn() {
  POP_UP_BTN.style.backgroundColor = 'var(--color-primary-light)';
  POP_UP_BTN.style.border = 'none';
}

POP_UP.onmouseover = function (e) {
  const target = e.target;
  const itsMenu = target == POP_UP_WINDOW || POP_UP_WINDOW.contains(target);

  if (!itsMenu) {
    hoverPopupBtn();
  }
};

POP_UP_BTN.addEventListener('mouseover', hoverPopupBtn);

POP_UP.onmouseout = function () {
  POP_UP_BTN.style.backgroundColor = '';
  POP_UP_BTN.style.border = '';
};

//Carousel
const BTN_LEFT = document.querySelector('#btn-left'),
  BTN_RIGHT = document.querySelector('#btn-right'),
  CAROUSEL = document.querySelector('#carousel'),
  ITEM_LEFT = document.querySelector('#item-left'),
  ITEM_RIGHT = document.querySelector('#item-right'),
  ITEM_ACTIVE = document.querySelector('#item-active');

let arrActivePetsIndex = [];
let arrNewPetsIndex = [];
let carouselPetCount;

function countCarouselPets() {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1280) { return 3 }
  else if (screenWidth >= 768) { return 2 }
  else { return 1 }
}

function getActivePetsIndex() {
  carouselPetCount = countCarouselPets();
  arrActivePetsIndex = [];

  for (let i = 0; i < carouselPetCount; i++) {
    let petName = ITEM_ACTIVE.children[i].children[1].innerHTML;
    let petIndex = PETS_NAME_ARR.indexOf(petName);
    arrActivePetsIndex.push(petIndex);
  }
  return arrActivePetsIndex;
}

function creatNewPetsIndex() {
  let activePets = getActivePetsIndex();
  arrNewPetsIndex = [];
  while (arrNewPetsIndex.length < carouselPetCount) {
    let petIndex = Math.floor(Math.random() * 8);
    if (!activePets.includes(petIndex) && !arrNewPetsIndex.includes(petIndex)) {
      arrNewPetsIndex.push(petIndex);
    }
  }
  return arrNewPetsIndex;
}

function loadCarouselPets(item) {
  const ACTIVE_PETS = getActivePetsIndex();
  const NEW_PETS = creatNewPetsIndex();

  for (let i in NEW_PETS) {
    item.children[i].children[0].src = PETS[NEW_PETS[i]].img;
    item.children[i].children[1].innerHTML = PETS[NEW_PETS[i]].name;
  }
  return item;
}

function moveLeft() {
  loadCarouselPets(ITEM_LEFT);
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}

function moveRight() {
  loadCarouselPets(ITEM_RIGHT);
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

  } else {
    CAROUSEL.classList.remove("transition-right");
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  petCards = document.querySelectorAll('.pet-card');
  petCards.forEach(petCard => {
    petCard.addEventListener('click', function () {
      loadPet(petCard.children[1].innerHTML);
    });
  });
});
