//Carousel
const BTN_LEFT = document.querySelector('#btn-left'),
  BTN_RIGHT = document.querySelector('#btn-right'),
  CAROUSEL = document.querySelector('#carousel'),
  ITEM_LEFT = document.querySelector('#item-left'),
  ITEM_RIGHT = document.querySelector('#item-right'),
  ITEM_ACTIVE = document.querySelector('#item-active');

let arrActivePetsIndex = [];
let arrNewPetsIndex = [];

function countCarouselPets() {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1280) { return 3 }
  else if (screenWidth >= 768) { return 2 }
  else { return 1 }
}

function getActivePetsIndex() {
  let carouselPetCount = countCarouselPets();
  arrActivePetsIndex = [];

  for (let i = 0; i < carouselPetCount; i++) {
    let petName = ITEM_ACTIVE.children[i].children[1].innerHTML;
    let petIndex = PETS_NAME_ARR.indexOf(petName);
    arrActivePetsIndex.push(petIndex);
  }
  return arrActivePetsIndex;
}

function creatNewPetsIndex() {
  let carouselPetCount = countCarouselPets();
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

document.addEventListener("DOMContentLoaded", function () {
  let carouselPetCount = countCarouselPets();
  let carouselPetLine = [];
  while (carouselPetLine.length < carouselPetCount) {
    let petIndex = Math.floor(Math.random() * 8);
    if (!carouselPetLine.includes(petIndex)) {
      carouselPetLine.push(petIndex);
    }
  }
  for (let i in carouselPetLine) {
    ITEM_ACTIVE.children[i].children[0].src = PETS[carouselPetLine[i]].img;
    ITEM_ACTIVE.children[i].children[1].innerHTML = PETS[carouselPetLine[i]].name;
  }
});

function loadCarouselPets(item) {
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
