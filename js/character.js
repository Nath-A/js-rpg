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
    this.resistance = 100;
    this.deflection = 0;

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

    // Creer un nouveau personnage
    characterCreation(1);
    character01 = new Person(character[0],character[1],character[2]);
    
    // essai de la fonction qui gère les races... WIP !!!!
    races(character01,character01.race);
    console.log(character01);

    //affichage des boutons de combat une fois le personnage créé
    playing(1);
    
    // Afficher le log parce que dans gamelogic, ça veut pas... 
    logCombat.innerHTML=character01.displayChar()+"<br>";

    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(1,character01.name,character01.currenthealth,character01.maxHealth);
    
    //Creation de l'avatar

    avatar(character01.race,character01.item,1);


    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(character01,1);

    //pour les logs avec .textContent += 

});

document.getElementById("create-character-2").addEventListener("click", () => 
{
    // Creer un nouveau personnage
    characterCreation(2);
    character02 = new Person(character[0],character[1],character[2]);

    // essai de la fonction qui gère les races... WIP !!!!
    races(character02,character02.race);
    console.log(character02);

    //affichage des boutons de combat une fois le personnage créé
    playing(2);
    logCombat.innerHTML=character02.displayChar()+"<br>";

    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(2,character02.name,character02.currenthealth,character02.maxHealth);

    //Création de l'avatar
    avatar(character02.race,character02.item,2);

    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(character02,2);
    
});
document.getElementById("random-enemy").addEventListener("click", () =>
 
{
        
    // Creer un nouveau personnage aléatoire

    randomEnemy();
    
    enemy = new Person(randomCharacter[0],randomCharacter[1],randomCharacter[2]);
    // essai de la fonction qui gère les races... 
    races(enemy,enemy.race);
    console.log(enemy);

    //affichage des boutons de combat une fois le personnage créé
    playing(2);
        
    // Afficher le log parce que dans gamelogic, ça veut pas... 
    logCombat.innerHTML=enemy.displayChar()+"<br>";

    //test diminution santé pour tester le heal
    enemy.currenthealth = 50;
    
    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(2,enemy.name,enemy.currenthealth,enemy.maxHealth);
 
    //Création de l'avatar

    avatar(enemy.race,enemy.item,2);

    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(enemy,2);
    

});


// listener de clic pour chaque bouton attaque/heal./truc qu'on sait pas ce que c'est -> ca affichera un texte au panneau des logs