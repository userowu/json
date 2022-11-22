let valItems = document.getElementById('girls');
let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


let jsonDatabase = [
  {
    "img":"imgs/jett.jpeg",
    "name":"Jett",
    "role":"Duelist",
    "desc":"Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them."
  },

  {
    "img":"imgs/reyna.jpeg",
    "name":"Reyna",
    "role":"Duelist",
    "desc":"Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance."
  },

  {
    "img":"imgs/sage.jpg",
    "name":"Sage",
    "role":"Sentinel",
    "desc":"The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight."

  },

  {
    "img":"imgs/viper.jpeg",
    "name":"Viper",
    "role":"Controller",
    "desc":"The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will."
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON){

  let newGirl = document.createElement("DIV");
  newGirl.classList.add("item");


  let newCover = document.createElement("IMG");
  newCover.classList.add("cover");
  newCover.src = incomingJSON['img'];
  newGirl.appendChild(newCover);

  let newName = document.createElement("p");
  newName.classList.add("name");
  newName.innerText = incomingJSON['name'];
  newGirl.appendChild(newName);

  let newRole = document.createElement("p");
  newRole.classList.add("role");
  newRole.innerText=incomingJSON['role'];
  newGirl.appendChild(newRole);


  let newDesc = document.createElement("p");
  newDesc.classList.add("desc");
  newDesc.innerText = incomingJSON["desc"];
  newGirl.appendChild(newDesc);

  valItems.appendChild(newGirl);
}
