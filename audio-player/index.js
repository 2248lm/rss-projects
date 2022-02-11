const songs = {
    track1: {
      album: "Ten Summoner's Tales (1993)",
      singer: 'Sting',
      song: 'Shape of My Heart',
      cover: './assets/img/track1.png',
      genre: 'pop rock',
    },
    track2: {
      album: 'So Far So Good (1993)',
      singer: 'Bryan Adams',
      song: 'Please Forgive Me',
      cover: './assets/img/track2.png',
      genre: 'soft rock',
    },
    track3: {
      album: 'The Marshall Mathers LP (2000)',
      singer: 'Eminem & Dido',
      song: 'Stan',
      cover: './assets/img/track3.png',
      genre: 'horrorcore',
    },
    track4: {
      album: 'Tragic Kingdom (1996)',
      singer: 'No Doubt',
      song: "Don't Speak",
      cover: './assets/img/track4.png',
      gere: 'alternative rock',
    },
    track5: {
      album: 'All the Right Reasons (2006)',
      singer: 'Nickelback',
      song: 'If Everyone Cared',
      cover: './assets/img/track5.png',
      genre: 'alternative rock',
    },
  },
  tracksList = [
    './assets/audio/track1.mp3',
    './assets/audio/track1.mp3',
    './assets/audio/track1.mp3',
    './assets/audio/track1.mp3',
    './assets/audio/track1.mp3',
  ];

const player = document.querySelector('.player'),
  playBtn = document.querySelector('#play__btn'),
  audio = new Audio();

let songsIndex = 0;

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

loadSong(tracksList[songsIndex]);

playBtn.addEventListener('click', () => {
  if (player.classList.contains('play')) {
    pauseSong();
  } else {
    playSong();
  }
});
