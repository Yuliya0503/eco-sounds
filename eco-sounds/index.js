/*const, let*/
const button = document.querySelectorAll('.button');
const playPause = document.querySelector('.play-pause');
const logoBtn = document.querySelector('.logo-btn');
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const zarynka = document.querySelector('.zarynka');
const javoronok = document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');
const photoBackground = document.querySelector('.photo-background');
const birdImg = ['forest', 'solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];
const audio = new Audio();
let isPlay = false;

/*toggle active button */
button.forEach(item => { 
  item.addEventListener('click', (e) =>{
  button.forEach(element => element.classList.remove('active'));
  item.classList.add('active');
})});


/*changing background images*/

logoBtn.addEventListener('click', () => {
  photoBackground.style.backgroundImage = "url('./assets/img/forest.jpg')";
});

solovey.addEventListener('click', () => {
  photoBackground.style.backgroundImage = "url('./assets/img/solovey.jpg')";
});

drozd.addEventListener('click', () => {
  photoBackground.style.backgroundImage = "url('./assets/img/drozd.jpg')";
});

zarynka.addEventListener('click', () => {
  photoBackground.style.backgroundImage = "url('./assets/img/zarynka.jpg')";
});

javoronok.addEventListener('click', () => {
  photoBackground.style.backgroundImage = "url('./assets/img/javoronok.jpg')";
});

slavka.addEventListener('click', () => {
  photoBackground.style.backgroundImage = "url('./assets/img/slavka.jpg')";
});


/* caching */
function preloadImages() {
birdImg.forEach(function(item) {
    const img = new Image();
    img.src = `./assets/img/${item}.jpg`;
})
}
preloadImages();


/*music*/
function playForestAudio() {
  audio.src = './assets/audio/forest.mp3';
  audio.currentTime = 0;
  audio.play();
  playPause.classList.add('pause');
 }
 logoBtn.addEventListener('click', playForestAudio);

function playSoloveyAudio() {
  audio.src = './assets/audio/solovey.mp3';
  audio.currentTime = 0;
  audio.play();
  playPause.classList.add('pause');
}
solovey.addEventListener('click', playSoloveyAudio);

function playDrozdAudio() {
  audio.src = './assets/audio/drozd.mp3';
  audio.currentTime = 0;
  audio.play();
  playPause.classList.add('pause');
}
drozd.addEventListener('click', playDrozdAudio);

function playZarynkaAudio() {
  audio.src = './assets/audio/zarynka.mp3';
  audio.currentTime = 0;
  audio.play();
  playPause.classList.add('pause');
}
zarynka.addEventListener('click', playZarynkaAudio);

function playJavoronokAudio() {
  audio.src = './assets/audio/javoronok.mp3';
  audio.currentTime = 0;
  audio.play();
  playPause.classList.add('pause');
}
javoronok.addEventListener('click', playJavoronokAudio);

function playSlavkaAudio() {
  audio.src = './assets/audio/slavka.mp3';
  audio.currentTime = 0;
  audio.play();
  playPause.classList.add('pause');
}
slavka.addEventListener('click', playSlavkaAudio);


/*play-pause button*/
function playAudio() {
  if(!isPlay) {
    audio.src = './assets/audio/forest.mp3';
    
    audio.currentTime = 0;
    audio.play();
    playPause.classList.add('pause');
    isPlay = true;
  } else {
    audio.pause();
    playPause.classList.remove('pause');
    isPlay = false;
  }
}
playPause.addEventListener('click', playAudio);
