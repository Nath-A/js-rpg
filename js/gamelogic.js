// Modificateurs de carac'
// switch (Person.race) {
//     case "human":

//         break;
//     case "orc":
//         Person.currenthealth = Person.currenthealth * 1.4;
//         Person.maxHealth = Person.maxHealth *1.4;
//         break;
// //Bon bah ca ne fonctionne pas ici... 

//     case "elf":
        
//         break;

//     case "vampire":
        
//         break;

//     default:
//         break;
// }

// // Modificateurs de carac'
// switch (item) {
//     case "boots":
        
//         break;

//     case "staff":
        
//         break;


//     case "sword":
        
        
//         break;

//     case "bow":
        
//         break;

//     default:
//         break;
// }

// Créer un personnage au hasard pour le player 2 ??? 

// randomName = ["Jean-Jacques","Gobanno","Isara","Catvrix","Brictom","Belenos","Alesia","Inis Mona"];
// randomRace = ["human","orc","elf","vampire"];
// randomItem = ["boots","staff","sword","bow"];

// randomCreationName = randomName[Math.floor(Math.random() * randomName.length)];
// randomCreationRace = randomRace[Math.floor(Math.random() * randomRace.length)];
// randomCreationItem = randomItem[Math.floor(Math.random() * randomItem.length)];

// console.log(randomCreationName,randomName[randomCreationName]);
// console.log(randomCreationRace,randomRace[randomCreationRace]);
// console.log(randomCreationItem,randomItem[randomCreationItem]);

// randomCharacter=[randomCreationName,randomName[randomCreationName],randomCreationRace,randomRace[randomCreationRace],randomCreationItem,randomItem[randomCreationItem]];





// Avatar eco+
function avatar(race, item, playerPG)
{
    playground=document.getElementById(playerPG);
    playground.insertAdjacentHTML("beforeend","<div class='avatar-container'><img class='avatar' id ='avatar-"+playerPG+"' width='100px'><img class='item' id='item-"+playerPG+"' width='100px'> </div>");
    // playground.insertAdjacentHTML("beforeend","<div class='avatar-container' id='avatar-"+playerPG+"'></div>");
    // avatarImg=document.createElement("img");
    // avatarImg.setAttribute("alt","avatar");
    // avatarImg.setAttribute("width","100px");
    // playground.appendChild(avatarImg);
    // avatarContainer = getElementById("avatar-"+playerPG);
    // avatarContainer.insertAdjacentElement("afterbegin",avatarImg);
    avatarImg=document.getElementById("avatar-"+playerPG);
    itemImg=document.getElementById("item-"+playerPG);


    // avatarImg=document.getElementById("avatar-"+playerPG);
    // avatarImg.insertAdjacentHTML("afterbegin","<img class='avatar' alt='avatar'/>");
// avatarContainer = document.createElement("div")
// avatarContainer.classList.add("avatar-container")
// avatarImg = document.createElement("img");
// avatarImg.classList.add("avatar");
// avatarContainer.insertAdjacentHTML("afterbegin","<img class='avatar' alt='avatar'>");

    
    switch (race) {
        case "human":
            avatarImg.setAttribute("src","../images/races/barbarian.svg");
            avatarImg.setAttribute("alt","avatar human");
            avatarImg.setAttribute("title","20% less damage taken");

            break;

        case "orc":
            avatarImg.setAttribute("src","../images/races/orc-head.svg");
            avatarImg.setAttribute("alt","avatar orc");
            avatarImg.setAttribute("title","40% more max health");

            break
        case "elf":
            avatarImg.setAttribute("src","../images/races/woman-elf-face.svg");
            avatarImg.setAttribute("alt","avatar elf");
            avatarImg.setAttribute("title","30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.");
            
            
            break;

        case "vampire":
            avatarImg.setAttribute("src","../images/races/vampire-dracula.svg");
            avatarImg.setAttribute("alt","avatar vampire");
            avatarImg.setAttribute("title","10% lifesteal from opponents current health at start of the vampire's turn.");

            break;

        default:
            break;
    }
    switch (item) 
    {
        case "boots":
            itemImg.setAttribute("src","../images/items/boots.svg");
            itemImg.setAttribute("alt","item boots");
            itemImg.setAttribute("title","30% chance to dodge an attack");
            break;

        case "staff":
            itemImg.setAttribute("src","../images/items/wizard-staff.svg");
            itemImg.setAttribute("alt","item staff");
            itemImg.setAttribute("title","20% increase in healing");
            break;

        case "sword":
            itemImg.setAttribute("src","../images/items/two-handed-sword.svg");
            itemImg.setAttribute("alt","item sword");
            itemImg.setAttribute("title","30% more damage");
            break;

        case "bow":
            itemImg.setAttribute("src","../images/items/crossbow.svg");
            itemImg.setAttribute("alt","item bow");
            itemImg.setAttribute("title","30% chance to attack twice");
            break;

        default:
            break;
    }
} 


