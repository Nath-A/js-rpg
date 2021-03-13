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

    this.attackNumber = 1;

    this.dodge = 0;

    this.heal = function heal(id)
    {
        if (this.currenthealth<this.maxHealth) 
        {
            healingValue = Math.floor(Math.random()*this.maxHealing)+this.min;
            console.log(healingValue);
            if(this.currenthealth + healingValue <= this.maxHealth)
            {
                this.currenthealth = this.currenthealth + healingValue; 
            }
            else
            {
                healingValue = this.maxHealth - this.currenthealth;
                this.currenthealth = this.maxHealth
            }
            
            console.log(this.currenthealth);
            // return(this.currenthealth);

        }
    };

    this.damage = function()
    {

    };

    this.totalDamage = this.damage();

    // this.yield = function()
    // {
        
    // };
    this.displayChar = function()
    {

        if (this.item !="boots") 
        {
            return (`Welcome ! You are now a kick-ass ${this.race} named ${this.name}, you wield an epic ${this.item} and your total health point are ${this.maxHealth} !`);    
        } 
        else 
        {
            return (`Welcome ! You are now a kick-ass ${this.race} named ${this.name}, you wield some epic ${this.item} and your total health point are ${this.maxHealth} !`);
        }
        
    };
}

checkCharactersCreation=[];

 // Création du personnage de gauche
document.getElementById("create-character-1").addEventListener("click", () => 
{

    // Creer un nouveau personnage
    characterCreation(1);
    character01 = new Person(character[0],character[1],character[2]);
    
    // essai de la fonction qui gère les races et les items... WIP !!!!
    races(character01,character01.race);
    items(character01,character01.item);
    console.log(character01);

    //Log de combat à la place des options de création du personnage
    playing(1);
    
    // Afficher le log parce que dans gamelogic, ça veut pas... 
    logCombat.innerHTML=character01.displayChar()+"<br>";
    
    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(1,character01.name,character01.currenthealth,character01.maxHealth);
    
    //Creation de l'avatar

    avatar(character01.race,character01.item,1);

    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(character01,1);

    //Affichage des boutons de combat une fois les 2 personnages créés
    checkCharactersCreation.push(1);
    charactersCreated();

});

document.getElementById("random-character-1").addEventListener("click", () =>
 
{
        
    // Creer un nouveau personnage aléatoire

    randomCharacterCreation();
    character01 = new Person(randomCharacter[0],randomCharacter[1],randomCharacter[2]);
   
    // essai de la fonction qui gère les races et les items... WIP !!!!
    races(character01,character01.race);
    items(character01,character01.item);

    //Log de combat à la place des options de création du personnage
    playing(1);
        
    // Afficher le log parce que dans gamelogic, ça veut pas... 
    logCombat.innerHTML=character01.displayChar()+"<br>";

    //test diminution santé pour tester le heal
    character01.currenthealth = 1;
    
    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(1,character01.name,character01.currenthealth,character01.maxHealth);
 
    //Création de l'avatar

    avatar(character01.race,character01.item,1);

    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(character01,1);

    //Affichage des boutons de combat une fois les 2 personnages créés
    checkCharactersCreation.push(1);
    charactersCreated();

});
 // Création du personnage de droite
document.getElementById("create-character-2").addEventListener("click", () => 
{
    // Creer un nouveau personnage
    characterCreation(2);
    character02 = new Person(character[0],character[1],character[2]);

    // essai de la fonction qui gère les races et les items... WIP !!!!
    races(character02,character02.race);
    items(character02,character02.item);

    //Log de combat à la place des options de création du personnage
    playing(2);
    logCombat.innerHTML=character02.displayChar()+"<br>";

    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(2,character02.name,character02.currenthealth,character02.maxHealth);

    //Création de l'avatar
    avatar(character02.race,character02.item,2);

    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(character02,2);

    //Affichage des boutons de combat une fois les 2 personnages créés
    checkCharactersCreation.push(1);
    charactersCreated();
    
});
document.getElementById("random-character-2").addEventListener("click", () =>
 
{
        
    // Creer un nouveau personnage aléatoire

    randomCharacterCreation();
    
    character02 = new Person(randomCharacter[0],randomCharacter[1],randomCharacter[2]);
    // essai de la fonction qui gère les races et les items... WIP !!!!
    races(character02,character02.race);
    items(character02,character02.item);
    console.log(character02);

    //Log de combat à la place des options de création du personnage
    playing(2);
        
    // Afficher le log parce que dans gamelogic, ça veut pas... 
    logCombat.innerHTML=character02.displayChar()+"<br>";

    //test diminution santé pour tester le heal
    character02.currenthealth = 2;
    
    //Afficher le nom du perso et sa barre de vie
    nameAndHealthBar(2,character02.name,character02.currenthealth,character02.maxHealth);
 
    //Création de l'avatar
    avatar(character02.race,character02.item,2);

    // Desactivation du bouton heal si le perso a sa santé au max
    checkHealth(character02,2);
    
    //Affichage des boutons de combat une fois les 2 personnages créés
    checkCharactersCreation.push(1);
    charactersCreated();
});