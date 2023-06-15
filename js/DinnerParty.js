var className = "dinner-party-inverted"


const members = []

const profiles = {
 
  "Danielle":{
    "profileImageURL":"Images-Party/Danielle.png",
    "name":"Danielle"
  },
  "Amelia":{
    "profileImageURL":"Images-Party/amelia.png",
    "name":"Amelia"
  },
  "Ahmed":{
    "profileImageURL":"Images-Party/Ahmed.png",
    "name":"Ahmed"
  },
  "Jason":{
    "profileImageURL":"Images-Party/jason.png",
    "name":"Jason"
  }
}

const nextUp = [];
const prevPlayed = [];
const rec = [];

const songs = {    // array holding info to be used to populate the cart array when added
    "Sunrise": {
        "songNumber": "1",
        "songImageURL": "Images-Party/Sunrise.jpg",
        "songName": "Sunrise",
        "songArtist":"Norah Jones",
        "songAlbum":"Feels Like Home",
        "whoAddedImageURL": "Images-Party/Ahmed.png",
        "songTime": "3:21"
    },

    "OnlyLove": {
        "songNumber": "2",
        "songImageURL": "Images-Party/onlyLove.jpg",
        "songName": "Only Love",
        "songArtist":"Ben Howard",
        "songAlbum":"Every Kingdom",
        "whoAddedImageURL": "Images-Party/jason.png",
        "songTime": "4:09"
    },

    "Hill": {
        "songNumber": "3",
        "songImageURL": "Images-Party/hill.jpg",
        "songName": "hill that i'll die on",
        "songArtist": "Jonah Kagen",
        "songAlbum": "hill that i'll die on",
        "whoAddedImageURL": "Images-Party/Danielle.png",
        "songTime": "2:25"
    },

    "Records": {
        "songNumber": "1",
        "songImageURL": "Images-Party/corrinne.jpg",
        "songName": "Put Your Records On",
        "songArtist": "Corinne Bailey Rae",
        "songAlbum":"Corinne Bailey Rae",
        "whoAddedImageURL": "Images-Party/jason.png",
        "songTime": "3:35"
    },

    "Dedicated": {
        "songNumber": "2",
        "songImageURL": "Images-Party/walkoffthisearth.JPG",
        "songName": "Dedicated to the One I Love",
        "songArtist":"Walk Off The Earth",
        "songAlbum":"Dedicated to the One I Love",
        "whoAddedImageURL": "Images-Party/jason.png",
        "songTime": "2:58"
    },

    "OnOff": {
        "songNumber": "3",
        "songImageURL": "Images-Party/maggieRogers.JPG",
        "songName": "On + Off",
        "songArtist":"Maggie Rogers",
        "songAlbum":"Heard It In a Past Life",
        "whoAddedImageURL": "Images-NewParty/Profile.png",
        "songTime": "3:41"
    },
    "SecretLife": {
        "songNumber": "1",
        "songImageURL": "Images-Party/SecretLife.jpg",
        "songName": "Stay Alive",
        "songArtist":"Jose Gonzales",
        "songAlbum":"Stay Alive (From the Secret Life...",
        "whoAddedImageURL": "Images-Party/amelia.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "HouseWeShare": {
        "songNumber": "2",
        "songImageURL": "Images-Party/HouseWeShare.JPG",
        "songName": "House We Share",
        "songArtist":"Chance Emerson",
        "songAlbum":"House We Share",
        "whoAddedImageURL": "Images-Party/Danielle.png",
        "whoAddedImageURLTwo": "Images-Party/amelia.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "DontKnowWhy": {
        "songNumber": "3",
        "songImageURL": "Images-Party/DontKnowWhy.jpg",
        "songName": "Don't Know Why",
        "songArtist":"Norah Jones",
        "songAlbum":"Don't Know Why",
        "whoAddedImageURL": "Images-Party/amelia.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "AtLast": {
        "songNumber": "4",
        "songImageURL": "Images-Party/atLast.jpg",
        "songName": "At Last",
        "songArtist":"Etta James",
        "songAlbum":"At Last!",
        "whoAddedImageURL": "Images-Party/amelia.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "Exception": {
        "songNumber": "5",
        "songImageURL": "Images-Party/TheOnlyException.JPG",
        "songName": "The Only Exception",
        "songArtist":"Katelyn Tarver",
        "songAlbum":"The Only Exception",
        "whoAddedImageURL": "Images-Party/jason.png",
        "whoAddedImageURLTwo": "Images-NewParty/Profile.png",
        "whoAddedImageURLThree": "Images-Party/Onemore.png",
    },

    "Guess": {
        "songNumber": "6",
        "songImageURL": "Images-Party/sobRock.jpg",
        "songName": "I Guess I Just Feel Like",
        "songArtist":"John Mayer",
        "songAlbum":"Sob Rock",
        "whoAddedImageURL": "Images-NewParty/Profile.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },
 
    "BadBadNews": {
        "songNumber": "7",
        "songImageURL": "Images-Party/BadBadNews.jpg",
        "songName": "Bad Bad News",
        "songArtist":"Leon Bridges",
        "songAlbum":"Good Thing",
        "whoAddedImageURL": "Images-Party/Danielle.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "OurHouse": {
        "songNumber": "8",
        "songImageURL": "Images-Party/CSNY.JPG",
        "songName": "Our House",
        "songArtist":"Crosby, Stills, Nash and Young",
        "songAlbum":"Feels Like Home",
        "whoAddedImageURL": "Images-Party/Danielle.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "ForYou": {
        "songNumber": "9",
        "songImageURL": "Images-Party/IfNotForYou.JPG",
        "songName": "If Not For You",
        "songArtist":"George Harrison",
        "songAlbum":"All Things Must Pass",
        "whoAddedImageURL": "Images-Party/jason.png",
        "whoAddedImageURLTwo": "Images-Party/noblend.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    },

    "Moonlight": {
        "songNumber": "10",
        "songImageURL": "Images-Party/Dancing.jpg",
        "songName": "Dancing in the Moonlight",
        "songArtist":"King Harvest",
        "songAlbum":"Dancing in the Moonlight",
        "whoAddedImageURL": "Images-Party/jason.png",
        "whoAddedImageURLTwo": "Images-Party/Danielle.png",
        "whoAddedImageURLThree": "Images-Party/noblend.png",
    }
 
  };

  class PartyMember { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

    constructor(profileImageURL, name) {
        this.profileImageURL = profileImageURL;
        this.name = name;
    }
  }

  members.push(new PartyMember(profiles.Danielle.profileImageURL, profiles.Danielle.name));
  members.push(new PartyMember(profiles.Amelia.profileImageURL, profiles.Amelia.name));
  members.push(new PartyMember(profiles.Ahmed.profileImageURL, profiles.Ahmed.name));
  members.push(new PartyMember(profiles.Jason.profileImageURL, profiles.Jason.name));

  for (const member of members) {
    createMemberElement(member);
  }

    
  function createMemberElement(member) {
    const template = document.querySelector('#member');
    const clone = template.content.cloneNode(true);
    member.element = clone.querySelector('.party-member');
  
    const memberListElement = document.querySelector('.party-members');
    memberListElement.append(member.element);
  
    updateMemberElement(member);
  
  }

  function updateMemberElement(member) {
    const memberImageElement = member.element.querySelector('.host-img');
    const memberNameElement = member.element.querySelector('#member-name');

    memberImageElement.src = member.profileImageURL;
    memberNameElement.innerText = member.name;
  }
  



  nextUp.push(new SongInfo(songs.Sunrise.songNumber, songs.Sunrise.songImageURL, songs.Sunrise.songName, songs.Sunrise.songArtist, songs.Sunrise.songAlbum, songs.Sunrise.whoAddedImageURL, songs.Sunrise.songTime)); 
  nextUp.push(new SongInfo(songs.OnlyLove.songNumber, songs.OnlyLove.songImageURL, songs.OnlyLove.songName, songs.OnlyLove.songArtist, songs.OnlyLove.songAlbum, songs.OnlyLove.whoAddedImageURL, songs.OnlyLove.songTime)); 
  nextUp.push(new SongInfo(songs.Hill.songNumber, songs.Hill.songImageURL, songs.Hill.songName, songs.Hill.songArtist, songs.Hill.songAlbum,songs.Hill.whoAddedImageURL, songs.Hill.songTime)); 
  
  for (const song of nextUp) {
    createNextSongElement(song);
  }
  
  
  prevPlayed.push(new SongInfo(songs.Records.songNumber, songs.Records.songImageURL, songs.Records.songName, songs.Records.songArtist, songs.Records.songAlbum, songs.Records.whoAddedImageURL, songs.Records.songTime)); 
  prevPlayed.push(new SongInfo(songs.Dedicated.songNumber, songs.Dedicated.songImageURL, songs.Dedicated.songName, songs.Dedicated.songArtist, songs.Dedicated.songAlbum, songs.Dedicated.whoAddedImageURL, songs.Dedicated.songTime)); 
  prevPlayed.push(new SongInfo(songs.OnOff.songNumber, songs.OnOff.songImageURL, songs.OnOff.songName, songs.OnOff.songArtist, songs.OnOff.songAlbum, songs.OnOff.whoAddedImageURL, songs.OnOff.songTime)); 


  for (const song of prevPlayed) {
    createPrevSongElement(song);
  }
  
  
  rec.push(new RecSongInfo(songs.SecretLife.songNumber, songs.SecretLife.songImageURL, songs.SecretLife.songName, songs.SecretLife.songArtist, songs.SecretLife.songAlbum, songs.SecretLife.whoAddedImageURL, songs.SecretLife.whoAddedImageURLTwo, songs.SecretLife.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.HouseWeShare.songNumber, songs.HouseWeShare.songImageURL, songs.HouseWeShare.songName, songs.HouseWeShare.songArtist, songs.HouseWeShare.songAlbum, songs.HouseWeShare.whoAddedImageURL, songs.HouseWeShare.whoAddedImageURLTwo, songs.HouseWeShare.whoAddedImageURLThree));
  rec.push(new RecSongInfo(songs.DontKnowWhy.songNumber, songs.DontKnowWhy.songImageURL, songs.DontKnowWhy.songName, songs.DontKnowWhy.songArtist, songs.DontKnowWhy.songAlbum, songs.DontKnowWhy.whoAddedImageURL, songs.DontKnowWhy.whoAddedImageURLTwo, songs.DontKnowWhy.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.AtLast.songNumber, songs.AtLast.songImageURL, songs.AtLast.songName, songs.AtLast.songArtist, songs.AtLast.songAlbum, songs.AtLast.whoAddedImageURL, songs.AtLast.whoAddedImageURLTwo, songs.AtLast.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Exception.songNumber, songs.Exception.songImageURL, songs.Exception.songName, songs.Exception.songArtist, songs.Exception.songAlbum, songs.Exception.whoAddedImageURL, songs.Exception.whoAddedImageURLTwo, songs.Exception.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Guess.songNumber, songs.Guess.songImageURL, songs.Guess.songName, songs.Guess.songArtist, songs.Guess.songAlbum, songs.Guess.whoAddedImageURL, songs.Guess.whoAddedImageURLTwo, songs.Guess.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.BadBadNews.songNumber, songs.BadBadNews.songImageURL, songs.BadBadNews.songName, songs.BadBadNews.songArtist, songs.BadBadNews.songAlbum, songs.BadBadNews.whoAddedImageURL,songs.BadBadNews.whoAddedImageURLTwo, songs.BadBadNews.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.OurHouse.songNumber, songs.OurHouse.songImageURL, songs.OurHouse.songName, songs.OurHouse.songArtist, songs.OurHouse.songAlbum, songs.OurHouse.whoAddedImageURL,songs.OurHouse.whoAddedImageURLTwo, songs.OurHouse.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.ForYou.songNumber, songs.ForYou.songImageURL, songs.ForYou.songName, songs.ForYou.songArtist, songs.ForYou.songAlbum, songs.ForYou.whoAddedImageURL, songs.ForYou.whoAddedImageURLTwo,  songs.ForYou.whoAddedImageURLThree)); 
  rec.push(new RecSongInfo(songs.Moonlight.songNumber, songs.Moonlight.songImageURL, songs.Moonlight.songName, songs.Moonlight.songArtist, songs.Moonlight.songAlbum, songs.Moonlight.whoAddedImageURL, songs.Moonlight.whoAddedImageURLTwo, songs.Moonlight.whoAddedImageURLThree)); 
  

  for (const song of rec) {
    createRecSongElement(song);
  };
  


  function invert (main){
    if (main.scrollTop >= 250) {
        header[0].classList.add(className);
        headerTitle.style.color = "white"
    } else {
        header[0].classList.remove(className);
        headerTitle.style.color = "transparent"
    }

}

 
 