// Home

let i = 0;


// New Party


let members = [];
let friends = [];

let newMembers = [];
const newFriends = [];

const memberProfiles  = {    // array holding info to be used to populate the cart array when added
  "David": {
      "name": "David",
      "imageURL": "Images-ActivateParty/David.png",
  },
  "Raye": {
    "name": "Raye",
    "imageURL": "Images-ActivateParty/Raye.png" ,
},
  "Danielle": {
    "name": "Danielle",
    "imageURL": "Images-NewParty/Danielle.png",
},
  "Mike": {
    "name": "Mike",
    "imageURL": "Images-ActivateParty/Mike.png",
},
  "Vince": {
    "name": "Vince",
    "imageURL": "Images-ActivateParty/Vince.png",
},
  "Jason": {
    "name": "Jason",
    "imageURL": "Images-NewParty/Jason.png",
},
  "Marta": {
    "name": "Marta",
    "imageURL": "Images-NewParty/Marta.png",
},
 
};

const inviteProfiles = {
  "Ahmed": {
    "name": "Ahmed",
    "imageURL": "Images-Party/Ahmed.png",
  },
  "Tim": {
    "name": "Tim",
    "imageURL": "Images-NewParty/Tim.png",
  },
  "Amelia": {
    "name": "Amelia",
    "imageURL": "Images-NewParty/Amelia.png",
  },
  "Francesca": {
    "name": "Francesca",
    "imageURL": "Images-NewParty/Francesca.png",
  },
  "Matt": {
    "name": "Matt",
    "imageURL": "Images-NewParty/Matt.png",
  },
  "Ricardo": {
    "name": "Ricardo",
    "imageURL": "Images-ActivateParty/Ricardo.png",
  },
  "Eddie": {
    "name": "Eddie",
    "imageURL": "Images-NewParty/Eddie.png",
  },
}


const moreMemberProfiles = {
  "Will": {
    "name": "Will",
    "imageURL": "Images-PublicParty/will.png",
  },
  "Rachel": {
    "name": "Rachel",
    "imageURL": "Images-PublicParty/Rachel.png",
  }
}



const moreInviteProfiles = {
  "Hannah": {
    "name": "Hannah",
    "imageURL": "Images-PublicParty/hannah.png",
  },
  "Isaiah": {
    "name": "Isaiah",
    "imageURL": "Images-PublicParty/isaiah.png",
  },
  "Penelope": {
    "name": "Penelope",
    "imageURL": "Images-PublicParty/penelope.png",
  },
  "Rashad": {
    "name": "Rashad",
    "imageURL": "Images-PublicParty/Rashad.png",
  },
  "Michele": {
    "name": "Michele",
    "imageURL": "Images-PublicParty/michele.png",
  },
  "Royal": {
    "name": "Royal",
    "imageURL": "Images-PublicParty/Royal.png",
  },
  "Spencer": {
    "name": "Spencer",
    "imageURL": "Images-PublicParty/spencer.png",
  },
 
}

class Profile { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(imageURL, name) {
      this.imageURL = imageURL;
      this.name = name;
  }
}



members.push(new Profile(memberProfiles.David.imageURL, memberProfiles.David.name)); 
members.push(new Profile(memberProfiles.Raye.imageURL, memberProfiles.Raye.name)); 
members.push(new Profile(memberProfiles.Danielle.imageURL, memberProfiles.Danielle.name)); 
members.push(new Profile(memberProfiles.Mike.imageURL, memberProfiles.Mike.name)); 
members.push(new Profile(memberProfiles.Vince.imageURL, memberProfiles.Vince.name)); 
members.push(new Profile(memberProfiles.Jason.imageURL, memberProfiles.Jason.name)); 
members.push(new Profile(memberProfiles.Marta.imageURL, memberProfiles.Marta.name)); 



for (const member of members) {
  createMemberElement(member);
}


function createMemberElement(member) {
  const template = document.querySelector('#member-entry');
  const clone = template.content.cloneNode(true);
  member.element = clone.querySelector('.quick-invite');


  const btnDelete = member.element.querySelector('.quick-invite-remove');

  btnDelete.addEventListener('click', () => {
      removeMember(member);
  });

  const memberListElement = document.querySelector('#member-section');
  memberListElement.prepend(member.element);

  updateMemberElement(member);

}

function createReplacementMemberElement(member) {
  const template = document.querySelector('#member-entry');
  const clone = template.content.cloneNode(true);
  member.element = clone.querySelector('.quick-invite');


  const btnDelete = member.element.querySelector('.quick-invite-remove');

  btnDelete.addEventListener('click', () => {
      removeMember(member);
  });

  const memberListElement = document.querySelector('#member-section');
  memberListElement.append(member.element);

  updateMemberElement(member);

}



function updateMemberElement(member) {
  const memberImageElement = member.element.querySelector('.quick-invite-img');
  const memberTitleElement = member.element.querySelector('.quick-invite-name');
 
  memberImageElement.src = member.imageURL;
  memberTitleElement.innerText = member.name;
}


function removeMember(member) {
  friends.push(member); 
  member.element.remove(); 
  friends[6].element.remove();
  members.splice(members.indexOf(member), 1); 
  console.log(friends);
  console.log(members);

  createFriendElement(member);

  newMembers = members.slice(0, 7);

  members = newMembers;

  replaceMember();
}




friends.push(new Profile(inviteProfiles.Ahmed.imageURL, inviteProfiles.Ahmed.name)); 
friends.push(new Profile(inviteProfiles.Tim.imageURL, inviteProfiles.Tim.name)); 
friends.push(new Profile(inviteProfiles.Amelia.imageURL, inviteProfiles.Amelia.name)); 
friends.push(new Profile(inviteProfiles.Francesca.imageURL, inviteProfiles.Francesca.name)); 
friends.push(new Profile(inviteProfiles.Matt.imageURL, inviteProfiles.Matt.name)); 
friends.push(new Profile(inviteProfiles.Ricardo.imageURL, inviteProfiles.Ricardo.name)); 
friends.push(new Profile(inviteProfiles.Eddie.imageURL, inviteProfiles.Eddie.name)); 




for (const friend of friends) {
  createFriendElement(friend);
}


function createFriendElement(friend) {
  const template = document.querySelector('#friend-entry');
  const clone = template.content.cloneNode(true);
  friend.element = clone.querySelector('.quick-invite');

  const inviteBtn = friend.element.querySelector('.quick-invite-plus');

    inviteBtn.addEventListener('click', () => {
      invite(friend);
  });

  const friendListElement = document.querySelector('#friend-section');
  friendListElement.prepend(friend.element);

  updateFriendElement(friend);

}


function createReplacementFriendElement(friend) {
  const template = document.querySelector('#friend-entry');
  const clone = template.content.cloneNode(true);
  friend.element = clone.querySelector('.quick-invite');

  const inviteBtn = friend.element.querySelector('.quick-invite-plus');

    inviteBtn.addEventListener('click', () => {
      invite(friend);
  });

  const friendListElement = document.querySelector('#friend-section');
  friendListElement.append(friend.element);

  updateFriendElement(friend);

}

function updateFriendElement(friend) {
  const friendImageElement = friend.element.querySelector('.quick-invite-img');
  const friendTitleElement = friend.element.querySelector('.quick-invite-name');
 

  friendImageElement.src = friend.imageURL;
  friendTitleElement.innerText = friend.name;
  
}

function invite(friend){


  members.push(friend); 

  console.log(members)


  friends.splice(friends.indexOf(friend), 1); 
  friend.element.remove(); 

  createMemberElement(friend);
  replaceFriend();

}


function replaceFriend(){
  let replacementFriend = new Profile(Object.values(moreInviteProfiles)[i].imageURL, Object.values(moreInviteProfiles)[i].name);
  friends.push(replacementFriend); 
  createReplacementFriendElement(replacementFriend);

  i++;
}


function replaceMember(){

  let replacementMember = new Profile(Object.values(moreMemberProfiles)[i].imageURL, Object.values(moreMemberProfiles)[i].name);
  members.push(replacementMember);
  createReplacementMemberElement(replacementMember);
  
  i++;
}


function partyImgHover(img)
  {
    img.src = "Images-NewParty/ChoosePhoto.png"
  }

function partyImgHoverOut(img)
  {
    img.src = "Images-NewParty/NewParty.png"
  }

 
 


 

  



