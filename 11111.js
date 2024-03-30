const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Aala Purannata",
    name: "Mr.Rasintha_Music Room",
    source:
      "Aala Purannata.mp3",
  },
  {
    title: "Bandimu Suda",
    name: "Mr.Rasintha_Music Room",
    source:
      "Bandimu Suda.mp3",
  },
  {
    title: "Monara Kirilli",
    name: "Mr.Rasintha_Music Room",
    source:
      "Monara Kirilli.mp3",
  },
  {
    title: "Bara Avi- Remix",
    name: "Mr.Rasintha_Music Room",
    source:
      "Bara Avi (බර අව) Sinhala Best Songs Collection Nonstop  Old Is Gold Remix  Sinhala New Dj Remix.mp3",
  },
  {
    title: "Ilamahe Kurullo",
    name: "Mr.Rasintha_Music Room",
    source:
      "Ilmahe Kurullo.mp3",
  },

  {
    title: "Hena Kataya",
    name: "Mr.Rasintha_Music Room",
    source:
      "Hena Kataya.mp3",
  },
  {
    title: "Rap Party",
    name: "Mr.Rasintha_Music Room",
    source:
      "RAP Party (Vol_02) Punjabi Remix  Sinhala Best Rap Song Collection  Rap Dj Remix  (Dj Nirosh).mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});