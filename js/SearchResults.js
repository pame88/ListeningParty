const results = [];


const resultsSongs = {    // array holding info to be used to populate the cart array when added
    "Lonestar": {
        "songNumber": "1",
        "songImageURL": "Images-SearchResults/norah.jpg",
        "songName": "Lonestar",
        "songArtist":"Norah Jones",
        "songAlbum":"Come Away With Me",
    },

    "Morning": {
        "songNumber": "2",
        "songImageURL": "Images-SearchResults/feelsLikeHome.jpg",
        "songName": "In The Morning",
        "songArtist":"Norah Jones",
        "songAlbum":"Feels Like Home",
    },

    "Why": {
        "songNumber": "3",
        "songImageURL": "Images-SearchResults/norah.jpg",
        "songName": "Don't Know Why",
        "songArtist":"Norah Jones",
        "songAlbum":"Come Away With Me",
    },

    "Weep": {
        "songNumber": "4",
        "songImageURL": "Images-SearchResults/pickMe.jpg",
        "songName": "How I Weep",
        "songArtist":"Norah Jones",
        "songAlbum":"Pick Me Up Off The Floor",
    },

    "Words": {
        "songNumber": "5",
        "songImageURL": "Images-Party/Sunrise.jpg",
        "songName": "Those Sweet Words",
        "songArtist":"Norah Jones",
        "songAlbum":"Feels Like Home",
    },

    "Thinking": {
        "songNumber": "6",
        "songImageURL": "Images-Party/Sunrise.jpg",
        "songName": "Thinking About You",
        "songArtist":"Norah Jones",
        "songAlbum":"Not Too Late",
    },

    "Tragedy": {
        "songNumber": "7",
        "songImageURL": "Images-SearchResults/DayBreaks.jpg",
        "songName": "Tragedy",
        "songArtist":"Norah Jones",
        "songAlbum":"Day Breaks",
    },

    "Again": {
        "songNumber": "8",
        "songImageURL": "Images-SearchResults/norah.jpg",
        "songName": "I've Got To See You Again",
        "songArtist":"Norah Jones",
        "songAlbum":"Come Away With Me",
    },

    "Sinkin": {
        "songNumber": "9",
        "songImageURL": "Images-SearchResults/feelsLikeHome.jpg",
        "songName": "Sinkin' Soon",
        "songArtist":"Norah Jones",
        "songAlbum":"Not Too Late",
    },

    "Sunrise": {
        "songNumber": "10",
        "songImageURL": "Images-SearchResults/DayBreaks.jpg",
        "songName": "Sunrise",
        "songArtist":"Norah Jones",
        "songAlbum":"Day Breaks",
     
    }

  };


  class ResultsSongInfo { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

    constructor(songNumber, songImageURL, songName, songArtist, songAlbum) {
        this.songNumber = songNumber;
        this.songImageURL = songImageURL;
        this.songName = songName;
        this.songArtist = songArtist;
        this.songAlbum = songAlbum;
    }
  }

  
  results.push(new ResultsSongInfo(resultsSongs.Lonestar.songNumber, resultsSongs.Lonestar.songImageURL, resultsSongs.Lonestar.songName, resultsSongs.Lonestar.songArtist, resultsSongs.Lonestar.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Morning.songNumber, resultsSongs.Morning.songImageURL, resultsSongs.Morning.songName, resultsSongs.Morning.songArtist, resultsSongs.Morning.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Why.songNumber, resultsSongs.Why.songImageURL, resultsSongs.Why.songName, resultsSongs.Why.songArtist, resultsSongs.Why.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Weep.songNumber, resultsSongs.Weep.songImageURL, resultsSongs.Weep.songName, resultsSongs.Weep.songArtist, resultsSongs.Weep.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Words.songNumber, resultsSongs.Words.songImageURL, resultsSongs.Words.songName, resultsSongs.Words.songArtist, resultsSongs.Words.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Thinking.songNumber, resultsSongs.Thinking.songImageURL, resultsSongs.Thinking.songName, resultsSongs.Thinking.songArtist, resultsSongs.Thinking.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Tragedy.songNumber, resultsSongs.Tragedy.songImageURL, resultsSongs.Tragedy.songName, resultsSongs.Tragedy.songArtist, resultsSongs.Tragedy.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Again.songNumber, resultsSongs.Again.songImageURL, resultsSongs.Again.songName, resultsSongs.Again.songArtist, resultsSongs.Again.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Sinkin.songNumber, resultsSongs.Sinkin.songImageURL, resultsSongs.Sinkin.songName, resultsSongs.Sinkin.songArtist, resultsSongs.Sinkin.songAlbum)); 
  results.push(new ResultsSongInfo(resultsSongs.Sunrise.songNumber, resultsSongs.Sunrise.songImageURL, resultsSongs.Sunrise.songName, resultsSongs.Sunrise.songArtist, resultsSongs.Sunrise.songAlbum)); 


  for (const song of results) {
    createResultsSongElement(song);
  }
  

  function createResultsSongElement(song) {
    const template = document.querySelector('#results-song-entry');
    const clone = template.content.cloneNode(true);
    song.element = clone.querySelector('.song');
  
    const songListElement = document.querySelector('#results');
    songListElement.append(song.element);
  
    updateResultsSongElement(song);
  
  }
  
  function updateResultsSongElement(song) {
    const songNumberElement = song.element.querySelector('#results-song-number')
    const songImageElement = song.element.querySelector('#results-song-img');
    const songTitleElement = song.element.querySelector('#results-song-name');
    const songArtistElement = song.element.querySelector('#results-song-artist');
    const songAlbumElement = song.element.querySelector('#results-song-album');
   
  
    songNumberElement.innerText = song.songNumber;
    songImageElement.src = song.songImageURL;
    songTitleElement.innerText = song.songName;
    songArtistElement.innerText = song.songArtist;
    songAlbumElement.innerText = song.songAlbum
  }

  
  

  
  