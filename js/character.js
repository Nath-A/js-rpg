//Use this script to generate your character
function Person(name,race,item){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
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
    // console.log("On va y arriver avant le 15/03");
    console.log(character01);


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
    logCombat.innerHTML=character01.displayChar;

    

    
    



});

document.getElementById("create-character-2").addEventListener("click", () => 
{
    // Récupérer les données du formulaire
    var name2 = document.getElementById("character2-name").value;
    var race2 = document.getElementById("character2-race").value;
    var item2 = document.getElementById("character2-item").value;
    
    // Creer un nouveau personnage
    character02 = new Person(name2,race2, item2);

    console.log(character02);

    // Afficher les boutons de combat une fois le personnage 1 créé
    document.getElementById("hit-2").style.display="block";
    document.getElementById("heal-2").style.display="block";
    document.getElementById("yield-2").style.display="block";

    // Faire disparaitre le choix de personnage une fois créé et faire un log a l'interieur
    document.getElementById("creation-2").innerHTML="";


    
    
});

// console.log(character01.name);
// console.log(character02.name);
// pas utile parce que ca s'affiche quand on ouvre la page et du coup y a rien dedans vu qu'on a pas cliqué sur le bouton

// listener de clic pour chaque bouton attaque/heal./truc qu'on sait pas ce que c'est -> ca affichera un texte au panneau des logs