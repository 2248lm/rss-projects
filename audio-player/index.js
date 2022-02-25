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

const audio = new Audio(),
  player = document.querySelector('.player'),
  singer = document.querySelector('.singer'),
  title = document.querySelector('.song'),
  cover = document.querySelector('.cover'),
  album = document.querySelector('.album'),
  release = document.querySelector('.release'),
  genre = document.querySelector('.genre'),
  background = document.querySelector('.background'),
  playBtn = document.querySelector('#play-btn'),
  nextBtn = document.querySelector('#next-btn'),
  prevBtn = document.querySelector('#prev-btn'),
  repeatBtn = document.querySelector('#repeat-btn'),
  replayBtn = document.querySelector('#replay-btn'),
  soundBtn = document.querySelector('#mute-btn'),
  progressArea = document.querySelector('.progress-area'),
  progressBar = document.querySelector('.progress-bar'),
  musicCurrentTime = document.querySelector('.current'),
  musucDuration = document.querySelector('.duration');

let songIndex = 0;

const loadSong = (song) => {
  audio.currentTime = 0;
  progressBar.style.width = `${0}%`;
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

const playSong = () => {
  playBtn.innerHTML = 'pause';
  player.classList.add('play');
  audio.play();
}

const pauseSong = () => {
  playBtn.innerHTML = 'play_arrow';
  player.classList.remove('play');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlay = player.classList.contains('play');
  isPlay ? pauseSong() : playSong();
});

const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex].track);
  const isPlay = player.classList.contains('play');
  if (isPlay) playSong();
}
nextBtn.addEventListener('click', nextSong);

const prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex].track);
  const isPlay = player.classList.contains('play');
  if (isPlay) playSong();
}
prevBtn.addEventListener('click', prevSong);

const replaySong = () => {
  loadSong(songs[songIndex].track);
  progressBar.style.width = `${0}%`;
  const isPlay = player.classList.contains('play');
  if (isPlay) audio.play();
}
replayBtn.addEventListener('click', replaySong);

const convertTime = (time) => {
  let min = Math.floor(time / 60),
    sec = Math.floor(time % 60);
  if (sec < 10) { sec = `0${sec}`; }
  return `${min}:${sec}`;
}

const setTime = () => {
  musicCurrentTime.innerHTML = `0:00`;
  musucDuration.innerHTML = convertTime(audio.duration);
}
audio.addEventListener('loadeddata', setTime);

const updateProgress = () => {
  const currentTime = audio.currentTime,
    duration = audio.duration,
    progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  //current time update
  musicCurrentTime.innerHTML = convertTime(currentTime);
}
audio.addEventListener('timeupdate', updateProgress);

const setProgress = (bar) => {
  const width = progressArea.clientWidth,
    clickX = bar.offsetX,
    duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
progressArea.addEventListener('click', setProgress);

const repeatSong = () => {
  let getText = repeatBtn.innerHTML;
  switch (getText) {
    case 'repeat':
      repeatBtn.innerHTML = 'repeat_one';
      break;
    case 'repeat_one':
      repeatBtn.innerHTML = 'shuffle';
      break;
    case 'shuffle':
      repeatBtn.innerHTML = 'repeat';
      break;
  }
}
repeatBtn.addEventListener('click', repeatSong);

const endedSong = () => {
  let getText = repeatBtn.innerHTML;
  switch (getText) {
    case 'repeat':
      nextSong();
      audio.play();
      break;
    case 'repeat_one':
      replaySong();
      audio.play();
      break;
    case 'shuffle':
      let randIndex = Math.floor(Math.random() * songs.length);
      do {
        randIndex = Math.floor(Math.random() * songs.length);
      } while (songIndex === randIndex);
      songIndex = randIndex;
      loadSong(songs[songIndex].track);
      audio.play();
      break;
  }
}
audio.addEventListener('ended', endedSong);

const muteSound = () => {
  let getText = soundBtn.innerHTML;
  switch (getText) {
    case 'volume_off':
      soundBtn.innerHTML = 'volume_up';
      audio.muted = true;
      break;
    case 'volume_up':
      soundBtn.innerHTML = 'volume_off';
      audio.muted = false;
      break;
  }
}
soundBtn.addEventListener('click', muteSound);
