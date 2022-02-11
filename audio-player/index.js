const songs = [
    {
      album: "Ten Summoner's Tales (1993)",
      singer: 'Sting',
      song: 'Shape of My Heart',
      cover: './assets/img/track1.png',
      genre: 'pop rock',
    },
    {
      album: 'So Far So Good (1993)',
      singer: 'Bryan Adams',
      song: 'Please Forgive Me',
      cover: './assets/img/track2.png',
      genre: 'soft rock',
    },
    {
      album: 'The Marshall Mathers LP (2000)',
      singer: 'Eminem & Dido',
      song: 'Stan',
      cover: './assets/img/track3.png',
      genre: 'horrorcore',
    },
    {
      album: 'Tragic Kingdom (1996)',
      singer: 'No Doubt',
      song: "Don't Speak",
      cover: './assets/img/track4.png',
      gere: 'alternative rock',
    },
    {
      album: 'All the Right Reasons (2006)',
      singer: 'Nickelback',
      song: 'If Everyone Cared',
      cover: './assets/img/track5.png',
      genre: 'alternative rock',
    },
  ],
  tracksList = [
    './assets/audio/track1.mp3',
    './assets/audio/track2.mp3',
    './assets/audio/track3.mp3',
    './assets/audio/track4.mp3',
    './assets/audio/track5.mp3',
  ];

const player = document.querySelector('.player'),
  playBtn = document.querySelector('#play__btn'),
  nextBtn = document.querySelector('#next__btn'),
  prevBtn = document.querySelector('#prev__btn'),
  audio = new Audio();

let songIndex = 0;

function playSong() {
  player.classList.add('play');
  player.classList.remove('pause');
  playBtn.classList.remove('play__btn');
  playBtn.classList.add('pause__btn');
  audio.play();
}

function pauseSong() {
  player.classList.remove('play');
  player.classList.add('pause');
  playBtn.classList.remove('pause__btn');
  playBtn.classList.add('play__btn');
  audio.pause();
}

function loadSong(song) {
  audio.currentTime = 0;
  audio.src = song;
}

loadSong(tracksList[songIndex]);

playBtn.addEventListener('click', () => {
  if (player.classList.contains('play')) {
    pauseSong();
  } else {
    playSong();
  }
});

function nextSong() {
  audio.currentTime = 0;
  songIndex++;
  if (songIndex > tracksList.length - 1) {
    songIndex = 0;
  }
  loadSong(tracksList[songIndex]);
  playSong();
}
nextBtn.addEventListener('click', nextSong);

function prevSong() {
  audio.currentTime = 0;
  songIndex--;
  if (songIndex < 0) {
    songIndex = tracksList.length - 1;
  }
  loadSong(tracksList[songIndex]);
  playSong();
}
prevBtn.addEventListener('click', prevSong);
