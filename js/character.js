//Use this script to generate your character
function Person(name,race,item){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    // if (this.race=="orc") 
    // {
    //     this.maxHealth = this.maxHealth *1.4;
    //     this.currenthealth = this.currenthealth * 1.4;
    // }

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(character)
    {
        if (this.currenthealth<this.maxHealth) 
        {

        }
    };

    this.damage = function()
    {

    };

    this.totalDamage = this.damage();

    this.displayChar = function(){
        // return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
        return (`Welcome ! You are now a kick-ass ${this.race} named ${this.name}, you wield an epic ${this.item} and your total health point are ${this.maxHealth} !`);
    };
}
// var character01;
// var character02="";
// pas utile

document.getElementById("create-character-1").addEventListener("click", () => 
{
    // Récupérer les données du formulaire
    var name1 = document.getElementById("character1-name").value;
    var race1 = document.getElementById("character1-race").value;
    var item1 = document.getElementById("character1-item").value;
    
    // Creer un nouveau personnage

    character01 = new Person(name1,race1,item1);
    //Possibilité de faire character01 = new Person(character-name1.value...) s'il n'y avait pas de tiret. 

    console.log(character01);

    // essai de la fonction qui gère les races... 
    races(character01,character01.race);

    //Mettre ici a l'interieur les displays et changements de styles

    // Afficher les boutons de combat une fois le personnage 1 créé
    document.getElementById("hit-1").style.display="block";
    document.getElementById("heal-1").style.display="block";
    document.getElementById("yield-1").style.display="block";

    // Faire disparaitre le choix de personnage une fois créé et faire un log a l'interieur
    document.getElementById("creation-1").innerHTML="";
    containerLog=document.getElementById("creation-1");
    logCombat=document.createElement("div");
    logCombat.classList.add("log-combat");
    containerLog.appendChild(logCombat);
    // logCombat.innerHTML="Test hahahaha... On va bien rigoler.";
    logCombat.innerHTML=character01.displayChar()+"<br>";

    //Rajout du titre pour les logs
    titleLog = document.getElementById("creation-1");
    titleLog.insertAdjacentHTML("afterbegin","<h2>What is happening !?</h2>");

    //Afficher le nom du perso et sa barre de vie
    playgroundName = document.getElementById("playground-1");
    playgroundName.insertAdjacentHTML("afterbegin","<h3 id='name-1'>"+ name1 +"</h3>");
    healthBar = document.getElementById("name-1");
    healthBar.insertAdjacentHTML("afterend","HP : <progress id='health-1' value='" + character01.currenthealth +"' max='"+ character01.maxHealth +"'></progress>" + character01.currenthealth + "/" + character01.maxHealth)
    
    //Creation de l'avatar
    avatar(character01.race,character01.item,"playground-1");

    //avec .textContent += 
    
    //Desactivation du bouton heal si le perso a sa santé au max
    if (character01.currenthealth == character01.maxHealth)
    {
        document.getElementById("heal-1").disabled=true;
        
    }


});

window.onload = function() 
{
        
    // Creer un nouveau personnage aléatoire

    randomName = ["Jean-Jacques","Gobanno","Isara","Catvrix","Brictom","Belenos","Alesia","Inis Mona"];
    randomRace = ["human","orc","elf","vampire"];
    randomItem = ["boots","staff","sword","bow"];

    randomCreationName = randomName[Math.floor(Math.random() * randomName.length)];
    randomCreationRace = randomRace[Math.floor(Math.random() * randomRace.length)];
    randomCreationItem = randomItem[Math.floor(Math.random() * randomItem.length)];

    randomCharacter=[randomCreationName,randomCreationRace,randomCreationItem];
    
    enemy = new Person(randomCharacter[0],randomCharacter[1],randomCharacter[2]);

    console.log(enemy);

    // essai de la fonction qui gère les races... 
    races(enemy,enemy.race);

    // Afficher les boutons de combat une fois le personnage  créé
    document.getElementById("hit-2").style.display="block";
    document.getElementById("heal-2").style.display="block";
    document.getElementById("yield-2").style.display="block";

    // Faire disparaitre le choix de personnage une fois créé et faire un log a l'interieur
    document.getElementById("creation-2").innerHTML="";
    containerLog=document.getElementById("creation-2");
    logCombat=document.createElement("div");
    logCombat.classList.add("log-combat");
    containerLog.appendChild(logCombat);
    // logCombat.innerHTML="Test hahahaha... On va bien rigoler.";
    logCombat.innerHTML=enemy.displayChar()+"<br>";

    //Rajout du titre pour les logs
    titleLog = document.getElementById("creation-2");
    titleLog.insertAdjacentHTML("afterbegin","<h2>What is happening !?</h2>");

    

    //test diminution santé pour tester le heal
    enemy.currenthealth = 50;
    
    //Afficher le nom du perso et sa barre de vie
    playgroundName = document.getElementById("playground-2");
    playgroundName.insertAdjacentHTML("afterbegin","<h3 id='name-2'>"+ enemy.name +"</h3>");
    healthBar = document.getElementById("name-2");
    healthBar.insertAdjacentHTML("afterend","HP : <progress id='health-2' value='" + enemy.currenthealth +"' max='"+ enemy.maxHealth +"'></progress>"+ enemy.currenthealth + "/" + enemy.maxHealth)

    //Création de l'avatar

    avatar(enemy.race,enemy.item,"playground-2");
    
    //Desactivation du bouton heal si le perso a sa santé au max
    if (enemy.currenthealth == enemy.maxHealth)
    {
        document.getElementById("heal-2").disabled=true;
        
    }

    
    
};

// console.log(character01.name);
// console.log(character02.name);
// pas utile parce que ca s'affiche quand on ouvre la page et du coup y a rien dedans vu qu'on a pas cliqué sur le bouton

// listener de clic pour chaque bouton attaque/heal./truc qu'on sait pas ce que c'est -> ca affichera un texte au panneau des logs