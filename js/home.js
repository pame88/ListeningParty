const yours = [];
const forYou = [];
const popular = [];


const yourParties = {
 
    "Xmas":{
      "partyImageURL":"Images-Home/ChristmasParty.jpg",
      "partyTitle":"Christmas Party",
      "partyDescription":"You + 7 others"
    },
   
    "DandD":{
        "partyImageURL":"Images-Home/D&D.jpg",
        "partyTitle":"D&D",
        "partyDescription":"You + 13 others"
    }

  }

  const partiesForYou = {
 
    "Amelia":{
      "partyImageURL":"Images-Home/AmeliasParty.jpg",
      "partyTitle":"Amelia's Party",
      "partyDescription":"Amelia + 7 others"
    },
   
    "Jason":{
        "partyImageURL":"Images-Home/JasonsParty.png",
        "partyTitle":"Jason's Party",
        "partyDescription":"JasonB + 7 others"
    },

    "Fictions":{
        "partyImageURL":"Images-Home/ShortFictionsParty.jpg",
        "partyTitle":"Short Fictions Liste...",
        "partyDescription":"FictionsFan1 + 50 others"
    },

    "Danielle":{
        "partyImageURL":"Images-Home/Beach.jpg",
        "partyTitle":"Danielle's Party",
        "partyDescription":"Danielle + 5 others"
    },

    "Feeble":{
        "partyImageURL":"Images-Home/FLH.jpg",
        "partyTitle":"Feeble little horse Li...",
        "partyDescription":"FLHFan + 210 others"
    },

    "Jazzy":{
        "partyImageURL":"Images-Home/jazz.png",
        "partyTitle":"Jazzy Night",
        "partyDescription":"JazzyJeff + 39 others"
    }

  }

  const popularParties = {
 
    "Drake":{
      "partyImageURL":"Images-Home/Drake.jpg",
      "partyTitle":"Drake Listening Part...",
      "partyDescription":"IsabelS98 + 2,032 others"
    },
   
    "Emo":{
        "partyImageURL":"Images-Home/Emo.jpg",
        "partyTitle":"Emo!",
        "partyDescription":"EmmaTaye + 500 others"
    },

    "Curry":{
        "partyImageURL":"Images-Home/StephCurry.jpg",
        "partyTitle":"Steph Curry's Party",
        "partyDescription":"Steph Curry + 8,930 others"
    },

    "Hits":{
        "partyImageURL":"Images-Home/2000s.jpg",
        "partyTitle":"2000's hits",
        "partyDescription":"Kiss108 + 4,298 others"
    },

    "Taylor":{
        "partyImageURL":"Images-Home/Taylor.jpg",
        "partyTitle":"Taylor Swift's Party",
        "partyDescription":"Taylor Swift + 20,140 others"
    },

    "Needle":{
        "partyImageURL":"Images-Home/needledrop.jpg",
        "partyTitle":"TheNeedleDrop Listeni...",
        "partyDescription":"TND + 1,093 others"
    }

  }


  class Party { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

    constructor(partyImageURL, partyTitle, partyDescription) {
        this.partyImageURL = partyImageURL;
        this.partyTitle = partyTitle;
        this.partyDescription = partyDescription;
    }
  }

  yours.push(new Party(yourParties.Xmas.partyImageURL, yourParties.Xmas.partyTitle, yourParties.Xmas.partyDescription));
  yours.push(new Party(yourParties.DandD.partyImageURL, yourParties.DandD.partyTitle, yourParties.DandD.partyDescription));

  for (const party of yours) {
    createYourPartyElement(party);
  }

  function createYourPartyElement(party) {
    const template = document.querySelector('#party-entry');
    const clone = template.content.cloneNode(true);
    party.element = clone.querySelector('.section-entry');
  
    const partyListElement = document.querySelector('#yours');
    partyListElement.append(party.element);
  
    updateYourPartyElement(party);
  
  }
  
  function updateYourPartyElement(party) {
    const partyImageElement = party.element.querySelector('.section-img');
    const partyTitleElement = party.element.querySelector('.section-info-title');
    const partyDescriptionElement = party.element.querySelector('.section-info-description');

    partyImageElement.src = party.partyImageURL;
    partyTitleElement.innerText = party.partyTitle;
    partyDescriptionElement.innerText = party.partyDescription;

  }

  forYou.push(new Party(partiesForYou.Amelia.partyImageURL, partiesForYou.Amelia.partyTitle, partiesForYou.Amelia.partyDescription));
  forYou.push(new Party(partiesForYou.Jason.partyImageURL, partiesForYou.Jason.partyTitle, partiesForYou.Jason.partyDescription));
  forYou.push(new Party(partiesForYou.Fictions.partyImageURL, partiesForYou.Fictions.partyTitle, partiesForYou.Fictions.partyDescription));
  forYou.push(new Party(partiesForYou.Danielle.partyImageURL, partiesForYou.Danielle.partyTitle, partiesForYou.Danielle.partyDescription));
  forYou.push(new Party(partiesForYou.Feeble.partyImageURL, partiesForYou.Feeble.partyTitle, partiesForYou.Feeble.partyDescription));
  // forYou.push(new Party(partiesForYou.Jazzy.partyImageURL, partiesForYou.Jazzy.partyTitle, partiesForYou.Jazzy.partyDescription));

  for (const party of forYou) {
    createPartyForYouElement(party);
  }

  function createPartyForYouElement(party) {
    const template = document.querySelector('#party-entry');
    const clone = template.content.cloneNode(true);
    party.element = clone.querySelector('.section-entry');
  
    const partyListElement = document.querySelector('#for-you');
    partyListElement.append(party.element);
  
    updatePartyForYouElement(party);
  
  }
  
  function updatePartyForYouElement(party) {
    const partyImageElement = party.element.querySelector('.section-img');
    const partyTitleElement = party.element.querySelector('.section-info-title');
    const partyDescriptionElement = party.element.querySelector('.section-info-description');

    partyImageElement.src = party.partyImageURL;
    partyTitleElement.innerText = party.partyTitle;
    partyDescriptionElement.innerText = party.partyDescription;

  }

  popular.push(new Party(popularParties.Drake.partyImageURL, popularParties.Drake.partyTitle, popularParties.Drake.partyDescription));
  popular.push(new Party(popularParties.Emo.partyImageURL, popularParties.Emo.partyTitle, popularParties.Emo.partyDescription));
  popular.push(new Party(popularParties.Curry.partyImageURL, popularParties.Curry.partyTitle, popularParties.Curry.partyDescription));
  popular.push(new Party(popularParties.Hits.partyImageURL, popularParties.Hits.partyTitle, popularParties.Hits.partyDescription));
  popular.push(new Party(popularParties.Taylor.partyImageURL, popularParties.Taylor.partyTitle, popularParties.Taylor.partyDescription));
  popular.push(new Party(popularParties.Needle.partyImageURL, popularParties.Needle.partyTitle, popularParties.Needle.partyDescription));

  for (const party of popular) {
    createPopularPartyElement(party);
  }

  function createPopularPartyElement(party) {
    const template = document.querySelector('#party-entry');
    const clone = template.content.cloneNode(true);
    party.element = clone.querySelector('.section-entry');
  
    const partyListElement = document.querySelector('#popular');
    partyListElement.append(party.element);
  
    updatePopularPartyElement(party);
  
  }
  
  function updatePopularPartyElement(party) {
    const partyImageElement = party.element.querySelector('.section-img');
    const partyTitleElement = party.element.querySelector('.section-info-title');
    const partyDescriptionElement = party.element.querySelector('.section-info-description');

    partyImageElement.src = party.partyImageURL;
    partyTitleElement.innerText = party.partyTitle;
    partyDescriptionElement.innerText = party.partyDescription;

  }


function partyHovered(theme){
      theme.classList.toggle("hovered"); 
  }



