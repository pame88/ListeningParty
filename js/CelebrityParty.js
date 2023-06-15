var className = "celebrity-party-inverted"

var searchIcon = document.querySelector("#search-btn");
var searchBox = document.querySelector("#search-box")


const members = []


const profiles = {
 
  "Danielle":{
    "profileImageURL":"Images-Party/Danielle.png",
    "name":"Danielle"
  },
  "Amelia":{
    "profileImageURL":"Images-Party/Amelia.png",
    "name":"Amelia"
  },
  "Ahmed":{
    "profileImageURL":"Images-Party/Ahmed.png",
    "name":"Ahmed"
  },
  "Jason":{
    "profileImageURL":"Images-Party/Jason.png",
    "name":"Jason"
  }
}


const nextUp = [];
const prevPlayed = [];
const rec = [];

const songs = {    // array holding info to be used to populate the cart array when added
    "Fold": {
        "songNumber": "1",
        "songImageURL": "Images-CelebrityParty/fold.jpg",
        "songName": "Fold",
        "songArtist":"Bonobo, Jacques Green",
        "songAlbum":"Fold",
        "whoAddedImageURL": "Images-ActivateParty/DJMike.png",
        "songTime": "5:35"
    },

    "Promiscous": {
        "songNumber": "2",
        "songImageURL": "Images-CelebrityParty/prom.jpg",
        "songName": "Promiscous",
        "songArtist":"Nelly Furtado, Timbaland",
        "songAlbum":"Loose",
        "whoAddedImageURL": "Images-ActivateParty/DJMike.png",
        "songTime": "4:02"
    },

    "GoodFeeling": {
        "songNumber": "3",
        "songImageURL": "Images-CelebrityParty/GoodFeeling.jpg",
        "songName": "Good Feeling",
        "songArtist": "Flo Rida",
        "songAlbum": "Wild Ones",
        "whoAddedImageURL": "Images-ActivateParty/DJMike.png",
        "songTime": "5:35"
    },

    "Slide": {
        "songNumber": "1",
        "songImageURL": "Images-CelebrityParty/slide.jpg",
        "songName": "Slide (feat. Frank Ocean & Migos)",
        "songArtist": "Calvin Harris, Frank Ocean, Migos",
        "songAlbum":"Corinne Bailey Rae",
        "whoAddedImageURL": "Images-ActivateParty/DJMike.png",
        "songTime": "3:50"
    },

    "ElectricFeel": {
        "songNumber": "2",
        "songImageURL": "Images-CelebrityParty/electricFeel.jpg",
        "songName": "Electric Feel",
        "songArtist":"MGMT",
        "songAlbum":"Oracular Spectacular",
        "whoAddedImageURL": "Images-ActivateParty/DJMike.png",
        "songTime": "3:59"
    },

    "Latch": {
        "songNumber": "3",
        "songImageURL": "Images-CelebrityParty/latch.jpg",
        "songName": "Latch",
        "songArtist":"Disclosure, Sam Smith",
        "songAlbum":"Settle (Deluxe)",
        "whoAddedImageURL": "Images-ActivateParty/DJMike.png",
        "songTime": "4:16"
    },
    "IFeelLove": {
        "songNumber": "1",
        "songImageURL": "Images-CelebrityParty/FeelLove.jpg",
        "songName": "I Feel Love",
        "songArtist":"Donna Summer",
        "songAlbum":"I Remember Yesterday",
        "whoAddedImageURL": "Images-CelebrityParty/lydia.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png"
    },

    "OneMoreTime": {
        "songNumber": "2",
        "songImageURL": "Images-CelebrityParty/daftpunk.jpg",
        "songName": "One More Time",
        "songArtist":"Daft Punk",
        "songAlbum":"Discovery",
        "whoAddedImageURL": "Images-CelebrityParty/grayson.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png"
    },

    "HeatWaves": {
        "songNumber": "3",
        "songImageURL": "Images-CelebrityParty/heatWaves.jpg",
        "songName": "Heat Waves",
        "songArtist":"Glass Animals",
        "songAlbum":"Heat Waves",
        "whoAddedImageURL": "Images-CelebrityParty/Zand.png",
        "whoAddedImageURLTwo": "Images-CelebrityParty/fayyad.png",
        "whoAddedImageURLThree": "Images-Party/tenMore.png"
    },

    "IGottaFeeling": {
        "songNumber": "4",
        "songImageURL": "Images-CelebrityParty/feeling.jpg",
        "songName": "I Gotta Feeling",
        "songArtist":"The Black Eyed Peas",
        "songAlbum":"The E.N.D (THE ENERGY NEVER DI...",
        "whoAddedImageURL": "Images-CelebrityParty/Will.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png"
    },

    "Massive": {
        "songNumber": "5",
        "songImageURL": "Images-CelebrityParty/honestly.jpg",
        "songName": "Massive",
        "songArtist":"Drake",
        "songAlbum":"Honestly, Nevermind",
        "whoAddedImageURL": "Images-CelebrityParty/Tushar.png",
        "whoAddedImageURLTwo": "Images-CelebrityParty/grace.png",
        "whoAddedImageURLThree": "Images-Party/TwelveMore.png"
    },

    "PonDeReplay": {
      "songNumber": "6",
      "songImageURL": "Images-CelebrityParty/rihanna.jpg",
      "songName": "Pon De Replay",
      "songArtist":"Rihanna",
      "songAlbum":"Music of the Sun",
      "whoAddedImageURL": "Images-CelebrityParty/phil.png",
      "whoAddedImageURLTwo": "Images-CelebrityParty/liam.png",
      "whoAddedImageURLThree": "Images-Party/Fivemore.png"
  },

    "BlindingLights": {
        "songNumber": "7",
        "songImageURL": "Images-CelebrityParty/afterHours.jpg",
        "songName": "Blinding Lights",
        "songArtist":"The Weeknd",
        "songAlbum":"After Hours",
        "whoAddedImageURL": "Images-CelebrityParty/Aparna.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png"
    },

    "Magic": {
        "songNumber": "8",
        "songImageURL": "Images-CelebrityParty/bruno.jpg",
        "songName": "24k Magic",
        "songArtist": "Bruno Mars",
        "songAlbum":"24k Magic",
        "whoAddedImageURL": "Images-CelebrityParty/grace.png",
        "whoAddedImageURLTwo": "Images-CelebrityParty/george.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png"
    },

    "PokerFace": {
        "songNumber": "9",
        "songImageURL": "Images-CelebrityParty/ladygaga.jpg",
        "songName": "Poker Face",
        "songArtist":"Lady Gaga",
        "songAlbum":"The Fame",
        "whoAddedImageURL": "Images-CelebrityParty/lydia.png",
        "whoAddedImageURLTwo": "Images-CelebrityParty/piper.png",
        "whoAddedImageURLThree": "Images-Party/Eightmore.png"
    },

    "WeFoundLove": {
        "songNumber": "10",
        "songImageURL": "Images-CelebrityParty/rihannaCalvin.jpg",
        "songName": "We Found Love",
        "songArtist":"Rihanna, Calvin Harris",
        "songAlbum":"Talk That Talk",
        "whoAddedImageURL": "Images-CelebrityParty/Mark.png",
        "whoAddedImageURLTwo": "Images-CelebrityParty/grayson.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png"
    }
 
  };


  nextUp.push(new SongInfo(songs.Fold.songNumber, songs.Fold.songImageURL, songs.Fold.songName, songs.Fold.songArtist, songs.Fold.songAlbum, songs.Fold.whoAddedImageURL, songs.Fold.songTime)); 
  nextUp.push(new SongInfo(songs.Promiscous.songNumber, songs.Promiscous.songImageURL, songs.Promiscous.songName, songs.Promiscous.songArtist, songs.Promiscous.songAlbum, songs.Promiscous.whoAddedImageURL, songs.Promiscous.songTime)); 
  nextUp.push(new SongInfo(songs.GoodFeeling.songNumber, songs.GoodFeeling.songImageURL, songs.GoodFeeling.songName, songs.GoodFeeling.songArtist, songs.GoodFeeling.songAlbum, songs.GoodFeeling.whoAddedImageURL, songs.GoodFeeling.songTime)); 

  
  for (const song of nextUp) {
    createNextSongElement(song);
  }
  
 
  prevPlayed.push(new SongInfo(songs.Slide.songNumber, songs.Slide.songImageURL, songs.Slide.songName, songs.Slide.songArtist, songs.Slide.songAlbum, songs.Slide.whoAddedImageURL, songs.Slide.songTime)); 
  prevPlayed.push(new SongInfo(songs.ElectricFeel.songNumber, songs.ElectricFeel.songImageURL, songs.ElectricFeel.songName, songs.ElectricFeel.songArtist, songs.ElectricFeel.songAlbum, songs.ElectricFeel.whoAddedImageURL, songs.ElectricFeel.songTime)); 
  prevPlayed.push(new SongInfo(songs.Latch.songNumber, songs.Latch.songImageURL, songs.Latch.songName, songs.Latch.songArtist, songs.Latch.songAlbum, songs.Latch.whoAddedImageURL, songs.Latch.songTime)); 


  for (const song of prevPlayed) {
    createPrevSongElement(song);
  }
  
  rec.push(new RecSongInfo(songs.IFeelLove.songNumber, songs.IFeelLove.songImageURL, songs.IFeelLove.songName, songs.IFeelLove.songArtist, songs.IFeelLove.songAlbum, songs.IFeelLove.whoAddedImageURL, songs.IFeelLove.whoAddedImageURLTwo, songs.IFeelLove.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.OneMoreTime.songNumber, songs.OneMoreTime.songImageURL, songs.OneMoreTime.songName, songs.OneMoreTime.songArtist, songs.OneMoreTime.songAlbum, songs.OneMoreTime.whoAddedImageURL, songs.OneMoreTime.whoAddedImageURLTwo, songs.OneMoreTime.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.HeatWaves.songNumber, songs.HeatWaves.songImageURL, songs.HeatWaves.songName, songs.HeatWaves.songArtist, songs.HeatWaves.songAlbum, songs.HeatWaves.whoAddedImageURL,songs.HeatWaves.whoAddedImageURLTwo, songs.HeatWaves.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.IGottaFeeling.songNumber, songs.IGottaFeeling.songImageURL, songs.IGottaFeeling.songName, songs.IGottaFeeling.songArtist, songs.IGottaFeeling.songAlbum, songs.IGottaFeeling.whoAddedImageURL, songs.IGottaFeeling.whoAddedImageURLTwo, songs.IGottaFeeling.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Massive.songNumber, songs.Massive.songImageURL, songs.Massive.songName, songs.Massive.songArtist, songs.Massive.songAlbum, songs.Massive.whoAddedImageURL, songs.Massive.whoAddedImageURLTwo, songs.Massive.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.PonDeReplay.songNumber, songs.PonDeReplay.songImageURL, songs.PonDeReplay.songName, songs.PonDeReplay.songArtist, songs.PonDeReplay.songAlbum, songs.PonDeReplay.whoAddedImageURL, songs.PonDeReplay.whoAddedImageURLTwo, songs.PonDeReplay.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.BlindingLights.songNumber, songs.BlindingLights.songImageURL, songs.BlindingLights.songName, songs.BlindingLights.songArtist, songs.BlindingLights.songAlbum, songs.BlindingLights.whoAddedImageURL, songs.BlindingLights.whoAddedImageURLTwo, songs.BlindingLights.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Magic.songNumber, songs.Magic.songImageURL, songs.Magic.songName, songs.Magic.songArtist, songs.Magic.songAlbum, songs.Magic.whoAddedImageURL, songs.Magic.whoAddedImageURLTwo, songs.Magic.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.PokerFace.songNumber, songs.PokerFace.songImageURL, songs.PokerFace.songName, songs.PokerFace.songArtist, songs.PokerFace.songAlbum, songs.PokerFace.whoAddedImageURL, songs.PokerFace.whoAddedImageURLTwo, songs.PokerFace.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.WeFoundLove.songNumber, songs.WeFoundLove.songImageURL, songs.WeFoundLove.songName, songs.WeFoundLove.songArtist, songs.WeFoundLove.songAlbum, songs.WeFoundLove.whoAddedImageURL, songs.WeFoundLove.whoAddedImageURLTwo, songs.WeFoundLove.whoAddedImageURLThree)); 
  

  for (const song of rec) {
    createRecSongElement(song);
  }
  
 
  

  function invert (main){
    if (main.scrollTop >= 250) {
        header[0].classList.add(className);
        document.querySelector(".header-title").style.color = "white"
    } else {
        header[0].classList.remove(className);
        document.querySelector(".header-title").style.color = "transparent"
    }

}


function upvote(event) {

  let p = event.target.parentNode

  const whoAddedElementTwo = p.querySelector('#rec-song-who-added-two');
  const whoAddedElementThree = p.querySelector('#rec-song-who-added-three');
  const upvoteBtn = p.querySelector('#upvote');

  console.log(whoAddedElementThree.src)
  if(upvoteBtn.style.backgroundColor == "white"){
      upvoteBtn.style.backgroundColor = "transparent";
      upvoteBtn.style.color = "white";

    if(whoAddedElementTwo.src == "https://pame88.github.io/ListeningParty/Images-NewParty/Profile.png") { 
      whoAddedElementTwo.src = "Images-Party/noblend.png";
    }

    if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-NewParty/Profile.png") { 
      whoAddedElementThree.src = "Images-Party/noblend.png";
    }

    if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/thirteenMore.png") { 
      whoAddedElementThree.src = "Images-Party/TwelveMore.png";
    }

    if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/sixMore.png") { 
      whoAddedElementThree.src = "Images-Party/Fivemore.png";
    }

    if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/nineMore.png") { 
      whoAddedElementThree.src = "Images-Party/Eightmore.png";
    }
    
    if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/elevenMore.png") { 
    whoAddedElementThree.src = "Images-Party/tenMore.png";
    }

  }
  else {
    upvoteBtn.style.backgroundColor = "white";
    upvoteBtn.style.color = "black";

  if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/tenMore.png") { 
    whoAddedElementThree.src = "Images-Party/elevenMore.png";
  }

  if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/Fivemore.png") { 
    whoAddedElementThree.src = "Images-Party/sixMore.png";
  }

  if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/TwelveMore.png") { 
    whoAddedElementThree.src = "Images-Party/thirteenMore.png";
  }


  if(whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/Eightmore.png") { 
    whoAddedElementThree.src = "Images-Party/nineMore.png";
  }


  if(whoAddedElementTwo.src == "https://pame88.github.io/ListeningParty/Images-Party/noblend.png") { 
    whoAddedElementTwo.src = "Images-NewParty/Profile.png";
  }

  if(whoAddedElementTwo.src !== "https://pame88.github.io/ListeningParty/Images-NewParty/Profile.png" && whoAddedElementThree.src == "https://pame88.github.io/ListeningParty/Images-Party/noblend.png") { 
    whoAddedElementThree.src = "Images-NewParty/Profile.png";
  }
   
  
  }

 

};




