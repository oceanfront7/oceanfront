let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "LOVE DOLL",
    artist: "DECO*27",
    image: "https://i.ibb.co/SXBPMxBz/0x1900-000000-80-0-0.jpg",
    path:"https://dl.dropbox.com/scl/fi/wuvf2xf7id43sa6ompji3/LOVEDOLL.mp3?rlkey=uqi6synqecwgxz2u1x8awtl9m&st=d1fbmgs3&dl=0"
  },
  {
    name: "360",
    artist: "charli xcx",
    image: "https://i.ibb.co/p25yJcP/172688890271200983.png",
    path: "https://dl.dropbox.com/scl/fi/ikjuzx7qr7vknqhq0y846/360.mp3?rlkey=g5ubrp98aof14jm32y1md2iaq&st=md9of75o&dl=0"
  },
  {
    name: "track 6",
    artist: "dramatical murder",
    image: "https://i.ibb.co/27XLHRsC/17686144835521318.png",
    path: "https://dl.dropbox.com/scl/fi/qzubetlcln72h6xjeo4zg/DRAMAtical-Murder-OST-Track-6.mp3?rlkey=yg67kgge5dqavv5shb3cu2ska&st=lj9u6lbo&dl=0"


  },
    
];


function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "0:00";
  total_duration.textContent = "3:02";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<img src="https://i.ibb.co/r2JYMJJg/Font-Awesome-5-regular-pause-circle-svg.png" style= width="20px" height="20px">';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<img src="https://i.ibb.co/dwnY9W3S/Font-Awesome-5-solid-play-circle-svg.png" style= width="20px" height="20px">';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}