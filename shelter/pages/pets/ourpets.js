//Pagination
const OUR_PETS_SET = document.querySelector('#active-pets-set'),
  DBA_LEFT_BTN = document.querySelector('#double-arrow-left-btn'),
  SA_LEFT_BTN = document.querySelector('#single-arrow-left-btn'),
  NUMBER_BTN = document.querySelector('#number-btn'),
  SA_RIGHT_BTN = document.querySelector('#single-arrow-right-btn'),
  DBA_RIGHT_BTN = document.querySelector('#double-arrow-right-btn');

function countOurPets() {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1280) { return 8 }
  else if (screenWidth >= 768) { return 6 }
  else { return 3 }
}

let ourPetsArray = [];
let ourPetsSet = [];
let ourPetsCount = countOurPets();
let pageCount = 48 / ourPetsCount;

while (ourPetsArray.length < pageCount) {
  if (pageCount === 6) {
    while (ourPetsSet.length < ourPetsCount) {
      let petIndex = Math.floor(Math.random() * 8);
      if (!ourPetsSet.includes(petIndex)) {
        ourPetsSet.push(petIndex);
      }
    }
    ourPetsArray.push(ourPetsSet);
    ourPetsSet = [];
  }

  if (pageCount === 8) {
    if (ourPetsArray.length === 1 || ourPetsArray.length === 5) {
      let test = ourPetsArray[ourPetsArray.length - 1];
      while (ourPetsSet.length < 2) {
        let petIndex = Math.floor(Math.random() * 8);
        if (!ourPetsSet.includes(petIndex) && !test.includes(petIndex)) {
          ourPetsSet.push(petIndex);
        }
      }
    }
    if (ourPetsArray.length === 2 || ourPetsArray.length === 6) {
      let test = ourPetsArray[ourPetsArray.length - 1].slice(2);
      while (ourPetsSet.length < 4) {
        let petIndex = Math.floor(Math.random() * 8);
        if (!ourPetsSet.includes(petIndex) && !test.includes(petIndex)) {
          ourPetsSet.push(petIndex);
        }
      }
    }
    if (ourPetsArray.length === 3 || ourPetsArray.length === 7) {
      let test = ourPetsArray[ourPetsArray.length - 1].slice(4);
      while (ourPetsSet.length < 6) {
        let petIndex = Math.floor(Math.random() * 8);
        if (!ourPetsSet.includes(petIndex) && !test.includes(petIndex)) {
          ourPetsSet.push(petIndex);
        }
      }
    }
    while (ourPetsSet.length < ourPetsCount) {
      petIndex = Math.floor(Math.random() * 8);
      if (!ourPetsSet.includes(petIndex)) {
        ourPetsSet.push(petIndex);
      }
    }
    ourPetsArray.push(ourPetsSet);
    ourPetsSet = [];
  }
  if (pageCount === 16) {
    console.log('16 pages');
    break;
  }
}

let startSet = ourPetsArray[0];
for (let i in startSet) {
  OUR_PETS_SET.children[i].children[0].src = PETS[startSet[i]].img;
  OUR_PETS_SET.children[i].children[1].innerHTML = PETS[startSet[i]].name;
}

function switchPage() {
  let petsSet;
  let activePageNumber = +NUMBER_BTN.innerHTML;

  if (activePageNumber === 1) {
    DBA_LEFT_BTN.classList.add('disabled-btn');
    SA_LEFT_BTN.classList.add('disabled-btn');
    SA_RIGHT_BTN.classList.remove('disabled-btn');
    DBA_RIGHT_BTN.classList.remove('disabled-btn');
    petsSet = ourPetsArray[0];
  }

  else if (activePageNumber === pageCount) {
    DBA_LEFT_BTN.classList.remove('disabled-btn');
    SA_LEFT_BTN.classList.remove('disabled-btn');
    SA_RIGHT_BTN.classList.add('disabled-btn');
    DBA_RIGHT_BTN.classList.add('disabled-btn');
    petsSet = ourPetsArray[pageCount - 1];
  }

  else {
    DBA_LEFT_BTN.classList.remove('disabled-btn');
    SA_LEFT_BTN.classList.remove('disabled-btn');
    SA_RIGHT_BTN.classList.remove('disabled-btn');
    DBA_RIGHT_BTN.classList.remove('disabled-btn');
    let pageNumber = +NUMBER_BTN.innerHTML - 1;
    petsSet = ourPetsArray[pageNumber];
  }

  for (let i in petsSet) {
    OUR_PETS_SET.children[i].children[0].src = PETS[petsSet[i]].img;
    OUR_PETS_SET.children[i].children[1].innerHTML = PETS[petsSet[i]].name;
  }
}

SA_LEFT_BTN.addEventListener('click', function () {
  let pageNumber = +NUMBER_BTN.innerHTML;
  NUMBER_BTN.innerHTML = `${--pageNumber}`;
  switchPage();
});

SA_RIGHT_BTN.addEventListener('click', function () {
  let pageNumber = +NUMBER_BTN.innerHTML;
  NUMBER_BTN.innerHTML = `${++pageNumber}`;
  switchPage();
});

DBA_LEFT_BTN.addEventListener('click', function () {
  NUMBER_BTN.innerHTML = '1';
  switchPage();
});

DBA_RIGHT_BTN.addEventListener('click', function () {
  NUMBER_BTN.innerHTML = pageCount;
  switchPage();
});
