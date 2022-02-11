const songs = {
  track1: {
    track: './assets/audio/track1.mp3',
    album: "Ten Summoner's Tales (1993)",
    singer: 'Sting',
    song: 'Shape of My Heart',
    cover: './assets/img/track1.png',
    genre: 'pop rock',
  },
  track2: {
    track: './assets/audio/track2.mp3',
    album: 'So Far So Good (1993)',
    singer: 'Bryan Adams',
    song: 'Please Forgive Me',
    cover: './assets/img/track2.png',
    genre: 'soft rock',
  },
  track3: {
    track: './assets/audio/track3.mp3',
    album: 'The Marshall Mathers LP (2000)',
    singer: 'Eminem & Dido',
    song: 'Stan',
    cover: './assets/img/track3.png',
    genre: 'horrorcore',
  },
  track4: {
    track: './assets/audio/track4.mp3',
    album: 'Tragic Kingdom (1996)',
    singer: 'No Doubt',
    song: "Don't Speak",
    cover: './assets/img/track4.png',
    gere: 'alternative rock',
  },
  track5: {
    track: './assets/audio/track5.mp3',
    album: 'All the Right Reasons (2006)',
    singer: 'Nickelback',
    song: 'If Everyone Cared',
    cover: './assets/img/track5.png',
    genre: 'alternative rock',
  },
};

const player = document.querySelector('.player'),
  playBtn = document.querySelector('#play__btn'),
  audio = new Audio();

let trackIndex = 1;

function playSong() {
  audio.play();
}

function loadSong(song) {
  audio.currentTime = 0;
  audio.src = song;
}

loadSong(songs[`track${trackIndex}`].track);

playBtn.addEventListener('click', () => {
  playSong();
});
