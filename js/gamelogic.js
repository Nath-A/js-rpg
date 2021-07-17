// Creation du personnage
function characterCreation(id)
{
    let nickname = document.getElementById(`character${id}-name`).value;
    let race = document.getElementById(`character${id}-race`).value;
    let item = document.getElementById(`character${id}-item`).value;
    character = [nickname,race,item];
    return character;    
}

// Création du log de combat
function playing(id)
{

    //Suppression du contenu de creation et affichage des logs
    document.getElementById(`creation-${id}`).innerHTML="";
    titleLog = document.getElementById(`creation-${id}`);
    containerLog=document.getElementById(`creation-${id}`);
    containerLog.insertAdjacentHTML("afterbegin",`<div id ="log-combat-${id}"class="log-combat"></div>`);
    containerLog.insertAdjacentHTML("afterbegin","<h2>What is happening !?</h2>");
        
    characterPlaying = "character0"+id;
    // console.log(characterPlaying);
    logCombat = document.getElementById(`log-combat-${id}`);
    // Ca ca ne fonctionne pas : 
    // logCombat.innerHTML=characterPlaying.displayChar()+"<br>";
    
}

//Affichage des boutons de combat une fois les 2 personnages créés
function combatButtons()
{
    
    document.getElementById(`hit-1`).style.display="block";
    document.getElementById(`heal-1`).style.display="block";
    document.getElementById(`yield-1`).style.display="block";
    document.getElementById(`hit-2`).style.display="block";
    document.getElementById(`heal-2`).style.display="block";
    document.getElementById(`yield-2`).style.display="block";
}

//Vérification improvisée de la création de 2 personnages pour l'affichage des boutons
function charactersCreated()
{
    if (checkCharactersCreation.length == 2)
    {
        combatButtons();
        defineFirstOne();

    }

}
// Creer un nouveau personnage aléatoire
function randomCharacterCreation()
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
// Nom et barre de vie WIP
function nameAndHealthBar(id,nickname,currentHealth,maxHealth)
{
    playgroundName = document.getElementById(`playground-${id}`);
    playgroundName.insertAdjacentHTML("afterbegin",`<h3 id="name-${id}">${nickname}</h3>`);
    currentHealth = currentHealth; 
    maxHealth = maxHealth;
    healthBar = document.getElementById(`name-${id}`);
    healthBar.insertAdjacentHTML("afterend",`HP : <progress id="health-${id}" value="${currentHealth}" max="${maxHealth}"></progress> <span id="health-value-${id}">${currentHealth}</span> / ${maxHealth}`);
}
// Avatar eco+
function avatar(race, item, playerPG)
{
   
    playground=document.getElementById(`playground-${playerPG}`);
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
            avatarImg.setAttribute("src","images/races/barbarian.svg");
            avatarImg.setAttribute("alt","avatar human");
            avatarImg.setAttribute("title","20% less damage taken");
            avatarBonus.insertAdjacentHTML("afterbegin","20% less damage taken");
            break;

        case "orc":
            avatarImg.setAttribute("src","images/races/orc-head.svg");
            avatarImg.setAttribute("alt","avatar orc");
            avatarImg.setAttribute("title","40% more max health");
            avatarBonus.insertAdjacentHTML("afterbegin","40% more max health");
            break

        case "elf":
            avatarImg.setAttribute("src","images/races/woman-elf-face.svg");
            avatarImg.setAttribute("alt","avatar elf");
            avatarImg.setAttribute("title","30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.");
            avatarBonus.insertAdjacentHTML("afterbegin","30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.");
            break;

        case "vampire":
            avatarImg.setAttribute("src","images/races/vampire-dracula.svg");
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
            itemImg.setAttribute("src","images/items/boots.svg");
            itemImg.setAttribute("alt","item boots");
            itemImg.setAttribute("title","30% chance to dodge an attack");
            itemBonus.insertAdjacentHTML("afterbegin","30% chance to dodge an attack");
            break;

        case "staff":
            itemImg.setAttribute("src","images/items/wizard-staff.svg");
            itemImg.setAttribute("alt","item staff");
            itemImg.setAttribute("title","20% increase in healing");
            itemBonus.insertAdjacentHTML("afterbegin","20% increase in healing");
            break;

        case "sword":
            itemImg.setAttribute("src","images/items/two-handed-sword.svg");
            itemImg.setAttribute("alt","item sword");
            itemImg.setAttribute("title","30% more damage");
            itemBonus.insertAdjacentHTML("afterbegin","30% more damage");
            break;

        case "bow":
            itemImg.setAttribute("src","images/items/crossbow.svg");
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
            character.resistance = character.resistance * 1.2;
            break;
   
        case "orc":
            character.maxHealth = character.maxHealth *1.4;
            character.currenthealth = character.maxHealth;
            
            break;

        case "elf" :
            function deflection()
            {
                checkDeflection = Math.floor(Math.random() * 10);
                if (checkDeflection < 4)
                {
                    character.deflection = true;
                }
            }
            break;
            
        case "vampires" :
            function lifesteal(attacker,victim)
            {
                stealing = victim.life * 0.1;
                attacker.life = attacker.life + stealing;
                victim.life = victim.life - stealing;
            }
               break;
            
        default:
            break;
    }
}

function items(character,item)
{
    switch (item) {
        case "boots":
            checkDodge = Math.floor(Math.random() * 10) + 1;
            if (checkDodge < 4)
            {
                character.dodge = true;
            }
            break;
        
        case "staff":
            character.maxHealing = character.maxHealing * 1.2;
            break;

        case "sword":
            character.damage = character.damage * 1.3;
            break;

        case "bow":
            checkAttackTwice = Math.floor(Math.random() * 10) + 1;
            if (checkAttackTwice < 4)
            checkAttackTwice = 2;
            {
                character.attackNumber = 2;
            }
            console.log(checkAttackTwice);
            console.log(character);
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
        healButton.setAttribute("title","You are already at your maximum health... Don't abuse drugs !");
    }
}

// Fonction qui va pseudo-gerer les tours
function changeTurn(idPlayerNow,idPlayerAfter)
{
    // Désactiver le boutons du joueur qui vient de jouer
    document.getElementById(`hit-${idPlayerNow}`).setAttribute("disabled",true);
    document.getElementById(`heal-${idPlayerNow}`).setAttribute("disabled",true);
    document.getElementById(`yield-${idPlayerNow}`).setAttribute("disabled",true);
    
    // Réactiver les boutons du joueur qui va jouer
    // checkHealth(`character0-${idPlayerAfter}`,idPlayerAfter);

    document.getElementById(`hit-${idPlayerAfter}`).removeAttribute("disabled");
    document.getElementById(`heal-${idPlayerAfter}`).removeAttribute("disabled");
    document.getElementById(`yield-${idPlayerAfter}`).removeAttribute("disabled");
}

// Définition aléatoire du tour au démarrage
function defineFirstOne()
{
    idFirstOne=Math.floor(Math.random()*2)+1;
    console.log(idFirstOne);
    idSecondOne = 0;
    
    if (idFirstOne == 1) 
    {
        idSecondOne = 2;
    } 
    else 
    {
        idSecondOne = 1;     
    }
    console.log(idFirstOne + "-" + idSecondOne);
    changeTurn(idSecondOne,idFirstOne);

}
//Gestion des boutons du character 01
// Fighting
document.getElementById("hit-1").addEventListener("click",()=>
{
    character01.damage();
    character02.currenthealth = character02.currenthealth - character01.total
    changeTurn(1,2);
    checkHealth(character02,2);
});

//Healing
document.getElementById("heal-1").addEventListener("click", () =>
{
    character01.heal();
    healthBar = document.getElementById(`health-1`);
    characterHealth = character01.currenthealth;
    healthBar.setAttribute("value",`${character01.currenthealth}`);
    healthValue = document.getElementById("health-value-1");
    healthValue.innerHTML=characterHealth;
    
    healthLog = document.getElementById("log-combat-1");
    healthLog.insertAdjacentHTML("beforeend",`You heal yourself of ${healingValue} HP ! You now have ${characterHealth} HP !<br>`);

    changeTurn(1,2);
    checkHealth(character02,2);
});

//Yield
document.getElementById("yield-1").addEventListener("click",() =>
{
    winnerName = character02.name;
    looserName = character01.name;
    
    yieldAlert = confirm(`${looserName} !? Are you sure you want to give up !?`);
    if (yieldAlert == true) 
    {
        yieldLogLooser = document.getElementById("log-combat-1");
        yieldLogLooser.insertAdjacentHTML("beforeend",`You are not brave enough for this fight...`);
        yieldLogWinner = document.getElementById("log-combat-2");
        yieldLogWinner.insertAdjacentHTML("beforeend",`You win the game because ${looserName} gives up...`);
        setTimeout(function () 
        {
            alert(`${winnerName} wins the game thanks to ${looserName}'s cowardice !\nLet's try another game !`);
            location.reload();
        }, 5000);

    }
    
})

//Gestion des boutons du character 02
//Healing
document.getElementById("heal-2").addEventListener("click", () =>
{
    character02.heal();
    healthBar = document.getElementById(`health-2`);
    characterHealth = character02.currenthealth;
    healthBar.setAttribute("value",`${character02.currenthealth}`);
    healthValue = document.getElementById("health-value-2");
    healthValue.innerHTML=characterHealth;
    
    healthLog = document.getElementById("log-combat-2");
    healthLog.insertAdjacentHTML("beforeend",`You heal yourself of ${healingValue} HP ! You now have ${characterHealth} HP !<br>`);
    
    changeTurn(2,1);
    checkHealth(character01,1);

});

//Yield
document.getElementById("yield-2").addEventListener("click",() =>
{
    winnerName = character01.name;
    looserName = character02.name;
    yieldAlert = confirm(`${looserName} !? Are you sure you want to give up !?`);
    if (yieldAlert == true) 
    {
        yieldLogLooser = document.getElementById("log-combat-2");
        yieldLogLooser.insertAdjacentHTML("beforeend",`You are not brave enough for this fight...`);
        yieldLogWinner = document.getElementById("log-combat-1");
        yieldLogWinner.insertAdjacentHTML("beforeend",`You win the game because ${looserName} gives up...`);
        setTimeout(function () 
        {
            alert(`${winnerName} wins the game thanks to ${looserName}'s cowardice !\nLet's try another game !`);
            location.reload();
        }, 5000);
    }
    
})