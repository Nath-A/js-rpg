// Creation du personnage
function characterCreation(id)
{
    let nickname = document.getElementById(`character${id}-name`).value;
    let race = document.getElementById(`character${id}-race`).value;
    let item = document.getElementById(`character${id}-item`).value;
    character = [nickname,race,item];
    return character;    
}

// Affichage des boutons de combat une fois le personnage créé et création du log de combat
function playing(id)
{
    //Affichage des boutons du combat
    document.getElementById(`hit-${id}`).style.display="block";
    document.getElementById(`heal-${id}`).style.display="block";
    document.getElementById(`yield-${id}`).style.display="block";
    
    //Suppression du contenu de creation et affichage des logs
    document.getElementById(`creation-${id}`).innerHTML="";
    titleLog = document.getElementById(`creation-${id}`);
    containerLog=document.getElementById(`creation-${id}`);
    containerLog.insertAdjacentHTML("afterbegin",`<div id ="log-combat-${id}"class="log-combat"></div>`);
    containerLog.insertAdjacentHTML("afterbegin","<h2>What is happening !?</h2>");
        
    characterPlaying = "character0"+id;
    console.log(characterPlaying);
    logCombat = document.getElementById(`log-combat-${id}`);
    console.log(logCombat);
    // Ca ca ne fonctionne pas : 
    // logCombat.innerHTML=characterPlaying.displayChar()+"<br>";

}


// Creer un nouveau personnage aléatoire
function randomEnemy()
{
    randomName = ["Selton","Gobanno","Isara","Catvrix","Brictom","Belenos","Alesia","Inis Mona"];
    randomRace = ["human","orc","elf","vampire"];
    randomItem = ["boots","staff","sword","bow"];

    randomCreationName = randomName[Math.floor(Math.random() * randomName.length)];
    randomCreationRace = randomRace[Math.floor(Math.random() * randomRace.length)];
    randomCreationItem = randomItem[Math.floor(Math.random() * randomItem.length)];

    randomCharacter=[randomCreationName,randomCreationRace,randomCreationItem];
    return randomCharacter;
}

// Avatar eco+
function avatar(race, item, playerPG)
{
    playground=document.getElementById(playerPG);
    playground.insertAdjacentHTML("beforeend",`<div class="avatar-container">
    <img class="avatar" id="avatar-${playerPG}" width="100px" alt="avatar"><span id="avatar-bonus-${playerPG}"></span><br/>
    <img class="item" id="item-${playerPG}" width="100px" alt="item"><span id="item-bonus-${playerPG}"></span>
    </div>`);

    avatarImg=document.getElementById(`avatar-${playerPG}`);
    itemImg=document.getElementById(`item-${playerPG}`);
    avatarBonus=document.getElementById(`avatar-bonus-${playerPG}`);
    itemBonus=document.getElementById(`item-bonus-${playerPG}`)

    switch (race) {
        case "human":
            avatarImg.setAttribute("src","../images/races/barbarian.svg");
            avatarImg.setAttribute("alt","avatar human");
            avatarImg.setAttribute("title","20% less damage taken");
            avatarBonus.insertAdjacentHTML("afterbegin","20% less damage taken");
            break;

        case "orc":
            avatarImg.setAttribute("src","../images/races/orc-head.svg");
            avatarImg.setAttribute("alt","avatar orc");
            avatarImg.setAttribute("title","40% more max health");
            avatarBonus.insertAdjacentHTML("afterbegin","40% more max health");
            break

        case "elf":
            avatarImg.setAttribute("src","../images/races/woman-elf-face.svg");
            avatarImg.setAttribute("alt","avatar elf");
            avatarImg.setAttribute("title","30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.");
            avatarBonus.insertAdjacentHTML("afterbegin","30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.");
            break;

        case "vampire":
            avatarImg.setAttribute("src","../images/races/vampire-dracula.svg");
            avatarImg.setAttribute("alt","avatar vampire");
            avatarImg.setAttribute("title","10% lifesteal from opponents current health at start of the vampire's turn.");
            avatarBonus.insertAdjacentHTML("afterbegin","10% lifesteal from opponents current health at start of the vampire's turn.");
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
            itemBonus.insertAdjacentHTML("afterbegin","30% chance to dodge an attack");
            break;

        case "staff":
            itemImg.setAttribute("src","../images/items/wizard-staff.svg");
            itemImg.setAttribute("alt","item staff");
            itemImg.setAttribute("title","20% increase in healing");
            itemBonus.insertAdjacentHTML("afterbegin","20% increase in healing");
            break;

        case "sword":
            itemImg.setAttribute("src","../images/items/two-handed-sword.svg");
            itemImg.setAttribute("alt","item sword");
            itemImg.setAttribute("title","30% more damage");
            itemBonus.insertAdjacentHTML("afterbegin","30% more damage");
            break;

        case "bow":
            itemImg.setAttribute("src","../images/items/crossbow.svg");
            itemImg.setAttribute("alt","item bow");
            itemImg.setAttribute("title","30% chance to attack twice");
            itemBonus.insertAdjacentHTML("afterbegin","30% chance to attack twice");
            break;

        default:
            break;
    }
} 


function races(character,race)
{
    switch (race) 
    {
        case "human" :
            character.resistance = 120;
            break;
   
        case "orc":
            character.currenthealth = character.currenthealth * 1.4;
            character.maxHealth = character.maxHealth *1.4;
            break;

        case "elf" :
            character.deflection = 30;

            break;
            
        case "vampires" :
            function lifesteal(attacker,victim)
            {
                stealing = victim.life*0.1;
                attacker.life = attacker.life + stealing;
                victim.life = victim.life - stealing;
            }
               break;
            
        default:
            break;
    }
}
// Desactivation des boutons de heal si la vie est au max
function checkHealth(character,idPlayground)
{
    if (character.currenthealth == character.maxHealth)
    {
        healButton = document.getElementById(`heal-${idPlayground}`);
        healButton.setAttribute("disabled",true);
        healButton.setAttribute("title","You are already at your maximum health... Don't abuse drugs !")
    }
}