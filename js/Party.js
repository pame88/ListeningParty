
var scrollTrigger = 200;

let header = document.getElementsByClassName("item1-party");

let headerTitle = document.querySelector(".header-title")


var playlist = document.querySelectorAll('.song');

var chat = document.getElementById("chat");

var grid = document.getElementById("grid-party");

var addSong = document.getElementById("add-song");
var music = document.querySelector(".music")
var searchInterface = document.querySelector(".search-interface")

var songResults = document.querySelector("#results")


function search() {
  music.style.display = "none"
  addSong.style.display = "none";
  searchInterface.style.display = "block";
}

function searchResults() {

  if (songResults.style.display === "none") {
    songResults.style.display = "flex";
    searched = document.querySelector(".search-entry");
    searched.innerText = "Norah Jones"
    searched.style.color = "White"
  } else {
    songResults.style.display = "none";
    searched.innerText = "Search music..."
    searched.style.color = "gray";
  }

}

function closeSearch() {
  music.style.display = "flex"
  addSong.style.display = "block";
  searchInterface.style.display = "none";

}


function nochat() {
  chat.style.display = "none";

  grid.classList.add("grid-container");
  grid.classList.remove("grid-container-party");

  var screenUI = document.querySelector(".screen-UI");
  screenUI.style.display = "block"

  var chatPreview = document.querySelector(".chat-preview");
  chatPreview.style.display = "block"

}

function showChat() {
  chat.style.display = "block";

  grid.classList.add("grid-container-party");
  grid.classList.remove("grid-container");

  var screenUI = document.querySelector(".screen-UI");
  screenUI.style.display = "none"

  var chatPreview = document.querySelector(".chat-preview");
  chatPreview.style.display = "none"
}

var dropdownEl = document.getElementById("dropdown");
var main = document.getElementById("main");

function dropdown(e) {

  if (dropdownEl.style.display === "none") {
    dropdownEl.style.display = "block";
    main.style.overflow = "hidden";

  } else {
    dropdownEl.style.display = "none";
    main.style.overflow = "scroll";
  }

  e.stopPropagation()

}

window.onclick = function (e) {
  if (!e.target.matches("#dropdown")) {
    console.log("hiding dropdown")
    dropdownEl.style.display = 'none';
    main.style.overflow = "scroll";
  } else {
    console.log("clicked in dropdown")
  }

};



class SongInfo { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(songNumber, songImageURL, songName, songArtist, songAlbum, whoAddedImageURL, songTime) {
    this.songNumber = songNumber;
    this.songImageURL = songImageURL;
    this.songName = songName;
    this.songArtist = songArtist;
    this.songAlbum = songAlbum;
    this.whoAddedImageURL = whoAddedImageURL;
    this.songTime = songTime;
  }
}

class RecSongInfo { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(songNumber, songImageURL, songName, songArtist, songAlbum, whoAddedImageURL, whoAddedImageURLTwo, whoAddedImageURLThree) {
    this.songNumber = songNumber;
    this.songImageURL = songImageURL;
    this.songName = songName;
    this.songArtist = songArtist;
    this.songAlbum = songAlbum;
    this.whoAddedImageURL = whoAddedImageURL;
    this.whoAddedImageURLTwo = whoAddedImageURLTwo;
    this.whoAddedImageURLThree = whoAddedImageURLThree;
  }
}

function createNextSongElement(song) {
  const template = document.querySelector('#song-entry');
  const clone = template.content.cloneNode(true);
  song.element = clone.querySelector('.song');

  const songListElement = document.querySelector('#next-up');
  songListElement.append(song.element);

  updateNextSongElement(song);

}

function updateNextSongElement(song) {
  const songNumberElement = song.element.querySelector('#song-number')
  const songImageElement = song.element.querySelector('.song-img');
  const songTitleElement = song.element.querySelector('#song-name');
  const songArtistElement = song.element.querySelector('.artist');
  const songAlbumElement = song.element.querySelector('.album');
  const whoAddedElement = song.element.querySelector('.who-added');
  const songTimeElement = song.element.querySelector('.song-time');


  songNumberElement.innerText = song.songNumber;
  songImageElement.src = song.songImageURL;
  songTitleElement.innerText = song.songName;
  songArtistElement.innerText = song.songArtist;
  songAlbumElement.innerText = song.songAlbum
  whoAddedElement.src = song.whoAddedImageURL;
  songTimeElement.innerText = song.songTime;
}

function createPrevSongElement(song) {
  const template = document.querySelector('#song-entry');
  const clone = template.content.cloneNode(true);
  song.element = clone.querySelector('.song');

  const songListElement = document.querySelector('#prev-played');
  songListElement.append(song.element);

  updatePrevSongElement(song);

}


function updatePrevSongElement(song) {
  const songNumberElement = song.element.querySelector('#song-number')
  const songImageElement = song.element.querySelector('.song-img');
  const songTitleElement = song.element.querySelector('#song-name');
  const songArtistElement = song.element.querySelector('.artist');
  const songAlbumElement = song.element.querySelector('.album');
  const whoAddedElement = song.element.querySelector('.who-added');
  const songTimeElement = song.element.querySelector('.song-time');


  songNumberElement.innerText = song.songNumber;
  songImageElement.src = song.songImageURL;
  songTitleElement.innerText = song.songName;
  songArtistElement.innerText = song.songArtist;
  songAlbumElement.innerText = song.songAlbum;
  whoAddedElement.src = song.whoAddedImageURL;
  songTimeElement.innerText = song.songTime;
}

function createRecSongElement(song) {
  const template = document.querySelector('#rec-song-entry');
  const clone = template.content.cloneNode(true);
  song.element = clone.querySelector('.song');

  const songListElement = document.querySelector('#recommended');
  songListElement.append(song.element);

  updateRecSongElement(song);

}


function updateRecSongElement(song) {
  const songNumberElement = song.element.querySelector('#rec-song-number')
  const songImageElement = song.element.querySelector('#rec-song-img');
  const songTitleElement = song.element.querySelector('#rec-song-name');
  const songArtistElement = song.element.querySelector('#rec-song-artist');
  const songAlbumElement = song.element.querySelector('#rec-song-album');
  const whoAddedElement = song.element.querySelector('#rec-song-who-added');
  const whoAddedElementTwo = song.element.querySelector('#rec-song-who-added-two');
  const whoAddedElementThree = song.element.querySelector('#rec-song-who-added-three');


  songNumberElement.innerText = song.songNumber;
  songImageElement.src = song.songImageURL;
  songTitleElement.innerText = song.songName;
  songArtistElement.innerText = song.songArtist;
  songAlbumElement.innerText = song.songAlbum;
  whoAddedElement.src = song.whoAddedImageURL;
  whoAddedElementTwo.src = song.whoAddedImageURLTwo;
  whoAddedElementThree.src = song.whoAddedImageURLThree;
}

function songAdded(song) {
  if (song.innerHTML == "+") {
    song.innerHTML = "Added";
    song.style.fontSize = "12px";
    song.style.fontWeight = "bold";
    song.style.color = "black";
    song.style.backgroundColor = "white";

  }
  else {
    song.innerHTML = "+"
    song.style.fontSize = "25px";
    song.style.fontWeight = "normal";
    song.style.color = "white";
    song.style.backgroundColor = "transparent";
  }
}
