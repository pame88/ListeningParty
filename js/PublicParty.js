var className = "pitt-party-inverted"

const nextUp = [];
const prevPlayed = [];
const rec = [];

const songs = {    // array holding info to be used to populate the cart array when added
    "Picture": {
        "songNumber": "1",
        "songImageURL": "Images-PublicParty/hayday.JPG",
        "songName": "Picture",
        "songArtist":"feeble little horse",
        "songAlbum":"Hayday",
        "whoAddedImageURL": "Images-PublicParty/michele.png",
        "songTime": "3:21"
    },

    "Band": {
        "songNumber": "2",
        "songImageURL": "Images-PublicParty/shortFictions.JPG",
        "songName": "Don't Start a Band",
        "songArtist":"Short Fictions",
        "songAlbum":"Every Moment of Every Day",
        "whoAddedImageURL": "Images-PublicParty/Royal.png",
        "songTime": "3:29"
    },

    "ThePressCorpse": {
        "songNumber": "3",
        "songImageURL": "Images-PublicParty/Anti-Flag.jpg",
        "songName": "The Press Corpse",
        "songArtist": "Anti-Flag",
        "songAlbum": "For Blood and Empire",
        "whoAddedImageURL": "Images-PublicParty/spencer.png",
        "songTime": "3:20"
    },

    "Carol": {
        "songNumber": "1",
        "songImageURL": "Images-PublicParty/MerceLemon.jpg",
        "songName": "Carol",
        "songArtist": "Merce Lemon",
        "songAlbum":"Girls Who Jump In",
        "whoAddedImageURL": "Images-PublicParty/isaiah.png",
        "songTime": "2:52"
    },

    "Rotator": {
        "songNumber": "2",
        "songImageURL": "Images-PublicParty/mother.jpg",
        "songName": "Rotator",
        "songArtist":"Mother of Earl",
        "songAlbum":"Look Alive!",
        "whoAddedImageURL": "Images-PublicParty/hannah.png",
        "songTime": "2:57"
    },

    "Baby": {
        "songNumber": "3",
        "songImageURL": "Images-PublicParty/moonth.jpg",
        "songName": "Baby",
        "songArtist":"Merce Lemon",
        "songAlbum":"Moonth",
        "whoAddedImageURL": "Images-PublicParty/penelope.png",
        "songTime": "1:16"
    },
    "LSFeet": {
        "songNumber": "1",
        "songImageURL": "Images-PublicParty/WaterTrash.jpg",
        "songName": "LSFeet",
        "songArtist":"Water Trash",
        "songAlbum":"Jazz Feet",
        "whoAddedImageURL": "Images-ActivateParty/Frederick.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "Knife": {
        "songNumber": "2",
        "songImageURL": "Images-PublicParty/SWAS.jpg",
        "songName": "Knife",
        "songArtist":"Sleeping Witch & Saturn",
        "songAlbum":"The Divine Madness of Spring",
        "whoAddedImageURL": "Images-PublicParty/Sarah.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "Mankey": {
        "songNumber": "3",
        "songImageURL": "Images-PublicParty/zells.jpg",
        "songName": "Mankey",
        "songArtist":"The Zells",
        "songAlbum":"Ant Farm",
        "whoAddedImageURL": "Images-PublicParty/isaiah.png",
        "whoAddedImageURLTwo": "Images-PublicParty/ameer.png",
        "whoAddedImageURLThree": "Images-Party/twomore.png",
    },

    "NickSong": {
        "songNumber": "4",
        "songImageURL": "Images-PublicParty/exPilots.JPG",
        "songName": "Nick Song",
        "songArtist":"Ex Pilots",
        "songAlbum":"Ex Pilots",
        "whoAddedImageURL": "Images-NewParty/Profile.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "DoRight": {
        "songNumber": "6",
        "songImageURL": "Images-PublicParty/commoner.jpg",
        "songName": "Do Right",
        "songArtist":"The Commonheart",
        "songAlbum":"Pressure",
        "whoAddedImageURL": "Images-PublicParty/isaiah.png",
        "whoAddedImageURLTwo": "Images-PublicParty/Rashad.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "LoneGone": {
      "songNumber": "5",
      "songImageURL": "Images-PublicParty/backalley.jpg",
      "songName": "Lone Gone",
      "songArtist":"Back Alley Sound",
      "songAlbum":"Lone Gone",
      "whoAddedImageURL": "Images-PublicParty/michele.png",
      "whoAddedImageURLTwo": "Images-PublicParty/spencer.png",
      "whoAddedImageURLThree": "Images-Party/noblend.png",
  },

    "RedTape": {
        "songNumber": "7",
        "songImageURL": "Images-PublicParty/exPilots.JPG",
        "songName": "Red Tape",
        "songArtist":"Ex Pilots",
        "songAlbum":"Ex Pilots",
        "whoAddedImageURL": "Images-PublicParty/Rachel.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "TwentyTwo": {
        "songNumber": "8",
        "songImageURL": "Images-PublicParty/gaadge.JPG",
        "songName": "Twenty-Two",
        "songArtist": "Gaadge",
        "songAlbum":"Yeah?",
        "whoAddedImageURL": "Images-PublicParty/Rashad.png",
        "whoAddedImageURLTwo": "Images-PublicParty/Sarah.png",
        "whoAddedImageURLThree": "Images-Party/Fourmore.png",
    },

    "Multiplication": {
        "songNumber": "9",
        "songImageURL": "Images-PublicParty/same.JPG",
        "songName": "Multiplication",
        "songArtist":"Same",
        "songAlbum":"Does It Go Any Faster?",
        "whoAddedImageURL": "Images-PublicParty/will.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "InTheAir": {
        "songNumber": "10",
        "songImageURL": "Images-PublicParty/barlow.JPG",
        "songName": "In The Air",
        "songArtist":"Barlow",
        "songAlbum":"Fell Asleep EP",
        "whoAddedImageURL": "Images-PublicParty/ameer.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    }
 
  };




  nextUp.push(new SongInfo(songs.Picture.songNumber, songs.Picture.songImageURL, songs.Picture.songName, songs.Picture.songArtist, songs.Picture.songAlbum, songs.Picture.whoAddedImageURL, songs.Picture.songTime)); 
  nextUp.push(new SongInfo(songs.Band.songNumber, songs.Band.songImageURL, songs.Band.songName, songs.Band.songArtist, songs.Band.songAlbum, songs.Band.whoAddedImageURL, songs.Band.songTime)); 
  nextUp.push(new SongInfo(songs.ThePressCorpse.songNumber, songs.ThePressCorpse.songImageURL, songs.ThePressCorpse.songName, songs.ThePressCorpse.songArtist, songs.ThePressCorpse.songAlbum, songs.ThePressCorpse.whoAddedImageURL, songs.ThePressCorpse.songTime)); 

  
  for (const song of nextUp) {
    createNextSongElement(song);
  }
  
  
  prevPlayed.push(new SongInfo(songs.Carol.songNumber, songs.Carol.songImageURL, songs.Carol.songName, songs.Carol.songArtist, songs.Carol.songAlbum, songs.Carol.whoAddedImageURL, songs.Carol.songTime)); 
  prevPlayed.push(new SongInfo(songs.Rotator.songNumber, songs.Rotator.songImageURL, songs.Rotator.songName, songs.Rotator.songArtist, songs.Rotator.songAlbum, songs.Rotator.whoAddedImageURL, songs.Rotator.songTime)); 
  prevPlayed.push(new SongInfo(songs.Baby.songNumber, songs.Baby.songImageURL, songs.Baby.songName, songs.Baby.songArtist, songs.Baby.songAlbum, songs.Baby.whoAddedImageURL, songs.Baby.songTime)); 


  for (const song of prevPlayed) {
    createPrevSongElement(song);
  }

  
  rec.push(new RecSongInfo(songs.LSFeet.songNumber, songs.LSFeet.songImageURL, songs.LSFeet.songName, songs.LSFeet.songArtist, songs.LSFeet.songAlbum, songs.LSFeet.whoAddedImageURL,songs.LSFeet.whoAddedImageURLTwo, songs.LSFeet.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Knife.songNumber, songs.Knife.songImageURL, songs.Knife.songName, songs.Knife.songArtist, songs.Knife.songAlbum, songs.Knife.whoAddedImageURL, songs.Knife.whoAddedImageURLTwo, songs.Knife.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Mankey.songNumber, songs.Mankey.songImageURL, songs.Mankey.songName, songs.Mankey.songArtist, songs.Mankey.songAlbum, songs.Mankey.whoAddedImageURL,songs.Mankey.whoAddedImageURLTwo, songs.Mankey.whoAddedImageURLThree )); 
  rec.push(new RecSongInfo(songs.NickSong.songNumber, songs.NickSong.songImageURL, songs.NickSong.songName, songs.NickSong.songArtist, songs.NickSong.songAlbum, songs.NickSong.whoAddedImageURL, songs.NickSong.whoAddedImageURLTwo, songs.NickSong.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.DoRight.songNumber, songs.DoRight.songImageURL, songs.DoRight.songName, songs.DoRight.songArtist, songs.DoRight.songAlbum, songs.DoRight.whoAddedImageURL, songs.DoRight.whoAddedImageURLTwo, songs.DoRight.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.LoneGone.songNumber, songs.LoneGone.songImageURL, songs.LoneGone.songName, songs.LoneGone.songArtist, songs.LoneGone.songAlbum, songs.LoneGone.whoAddedImageURL, songs.LoneGone.whoAddedImageURLTwo, songs.LoneGone.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.RedTape.songNumber, songs.RedTape.songImageURL, songs.RedTape.songName, songs.RedTape.songArtist, songs.RedTape.songAlbum, songs.RedTape.whoAddedImageURL,songs.RedTape.whoAddedImageURLTwo,songs.RedTape.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.TwentyTwo.songNumber, songs.TwentyTwo.songImageURL, songs.TwentyTwo.songName, songs.TwentyTwo.songArtist, songs.TwentyTwo.songAlbum, songs.TwentyTwo.whoAddedImageURL,songs.TwentyTwo.whoAddedImageURLTwo, songs.TwentyTwo.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Multiplication.songNumber, songs.Multiplication.songImageURL, songs.Multiplication.songName, songs.Multiplication.songArtist, songs.Multiplication.songAlbum, songs.Multiplication.whoAddedImageURL,  songs.Multiplication.whoAddedImageURLTwo,  songs.Multiplication.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.InTheAir.songNumber, songs.InTheAir.songImageURL, songs.InTheAir.songName, songs.InTheAir.songArtist, songs.InTheAir.songAlbum, songs.InTheAir.whoAddedImageURL, songs.InTheAir.whoAddedImageURLTwo, songs.InTheAir.whoAddedImageURLThree)); 
  

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







