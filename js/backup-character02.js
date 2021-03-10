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
    containerLog=document.getElementById("creation-2");
    logCombat=document.createElement("div");
    logCombat.classList.add("log-combat");
    containerLog.appendChild(logCombat);
        logCombat.innerHTML=character02.displayChar()+"<br>";

    //Rajout du titre pour les logs
    titleLog = document.getElementById("creation-2");
    titleLog.insertAdjacentHTML("afterbegin","<h2>What is happening !?</h2>");

    //Afficher le nom du perso et sa barre de vie
    playgroundName = document.getElementById("playground-2");
    playgroundName.insertAdjacentHTML("afterbegin",`<h3 id="name-2"> ${name2} </h3>`);
    healthBar = document.getElementById("name-2");
    healthBar.insertAdjacentHTML("afterend",`HP : <progress id="health-2" value="${character02.currenthealth}" max="${character02.maxHealth}"></progress> ${character02.currenthealth} / ${character02.maxHealth}`);

    //Création de l'avatar


    
    
});