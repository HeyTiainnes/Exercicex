// recuperer heure //
    // document.querySelector('p')
// trouver generer heure actuelle
// recuperer heure dans format HH:MM:SS (methode)
// Modifier le contenu 

//////////////////////
/////CORRECTION////////
///////////////////////




 let paragraphe = document.querySelector('p')
    
    //on recupere le premier paragraphe et on le stock ds variaible
console.log(paragraphe);
let curentDate = new Date ();

let heures = curentDate.getHours();
let minutes = curentDate.getMinutes();
let secondes = curentDate.getSeconds();
console.log("heure", heures);
console.log("minutes", minutes);
console.log("secondes", secondes);

document.open();
let affichageHeure = 
document.write(paragraphe);
document.close();



/*let current = new Date();
let monHeure = new Object
/*({
    heures : getHours(),
    minutes : getMinutes(),
    secondes : getSecondes()

});*/
/*
console.log(paragraphe);
new Object {

heure : getHours();
minutes : getMinutes();
secondes : getSeconds();

}
*/