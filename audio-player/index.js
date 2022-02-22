const songs = [
  {
    track: './assets/audio/track1.mp3',
    album: "Ten Summoner's Tales",
    release: 'August 1, 1993',
    singer: 'Sting',
    song: 'Shape of My Heart',
    cover: './assets/img/track1.png',
    genre: 'pop rock',
  },
  {
    track: './assets/audio/track2.mp3',
    album: 'So Far So Good',
    release: 'October 15, 1993',
    singer: 'Bryan Adams',
    song: 'Please Forgive Me',
    cover: './assets/img/track2.png',
    genre: 'soft rock',
  },
  {
    track: './assets/audio/track3.mp3',
    album: 'The Marshall Mathers LP',
    release: 'November 20, 2000',
    singer: 'Eminem & Dido',
    song: 'Stan',
    cover: './assets/img/track3.png',
    genre: 'horrorcore',
  },
  {
    track: './assets/audio/track4.mp3',
    album: 'Tragic Kingdom',
    release: 'April 15, 1996',
    singer: 'No Doubt',
    song: "Don't Speak",
    cover: './assets/img/track4.png',
    genre: 'alternative rock',
  },
  {
    track: './assets/audio/track5.mp3',
    album: 'All the Right Reasons',
    release: 'November 13, 2006',
    singer: 'Nickelback',
    song: 'If Everyone Cared',
    cover: './assets/img/track5.png',
    genre: 'alternative rock',
  },
];

const player = document.querySelector('.player'),
  playBtn = document.querySelector('#play__btn'),
  nextBtn = document.querySelector('#next__btn'),
  prevBtn = document.querySelector('#prev__btn'),
  singer = document.querySelector('.singer'),
  title = document.querySelector('.song'),
  cover = document.querySelector('.cover'),
  album = document.querySelector('.album'),
  release = document.querySelector('.release'),
  genre = document.querySelector('.genre'),
  background = document.querySelector('.background'),
  audio = new Audio();

let songIndex = 0;

function playSong() {
  playBtn.innerHTML = 'pause';
  player.classList.add('play');
  player.classList.remove('pause');
  audio.play();
}

function pauseSong() {
  playBtn.innerHTML = 'play_arrow';
  player.classList.remove('play');
  player.classList.add('pause');
  audio.pause();
}

function loadSong(song) {
  audio.currentTime = 0;
  audio.src = song;
  singer.innerHTML = songs[songIndex].singer;
  title.innerHTML = songs[songIndex].song;
  cover.src = songs[songIndex].cover;
  album.innerHTML = songs[songIndex].album;
  release.innerHTML = songs[songIndex].release;
  genre.innerHTML = songs[songIndex].genre;
  background.style.backgroundImage = `url(${songs[songIndex].cover})`;
}

loadSong(songs[songIndex].track);

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
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex].track);
  playSong();
}
nextBtn.addEventListener('click', nextSong);

function prevSong() {
  audio.currentTime = 0;
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex].track);
  playSong();
}
prevBtn.addEventListener('click', prevSong);
