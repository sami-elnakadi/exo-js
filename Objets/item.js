//Exercice PNJ
// let character = {
//     name : "Jaja",
//     age: 26,
//     items_to_give:["Sword","Armor","Shield"],   
    
//    objetrandom : function giveItem(){
//         let item = this.items_to_give[Math.floor(Math.random()*this.items_to_give.length)];
//         return item;
//     }
    
// }

// for (let car in character){
//     console.log(`${character[car]}`);
// }
// console.log(character.objetrandom());

//Exercice SHOP

// class Shop{
//     constructor (title, physic, magic, minLevel, avaible){
//         this.title = title;
//         this.physic = physic;
//         this.magic = magic;
//         this.minLevel = minLevel;
//         this.avaible = avaible;

//     }
// }
// let object = [
// new Shop('Cloud', 25, 15, 5, true),
// new Shop('Hachoire', 40, 0, 5, true ),
// new Shop('Baton mage', 2, 40, 5, true),
// new Shop('Perce', 40, 20, 10, false),
// ]

//  function objetsNom(){
//      for (let i = 0; i<object.length; i++){
//         let test = object[i].title;
//         console.log("Nom objet: "+test);
//  }
// }
// objetsNom();


// function objetsDispo(){
//     for (let i = 0; i<object.length; i++){
//         if(object[i].avaible === true){
//             console.log("Objets disponibles: "+object[i].title);
//         }
//     }
// }
// objetsDispo()

// function objets10(){
//     for (let i = 0; i<object.length; i++){
//         if(object[i].minLevel >= 10){
//             console.log("Objets qui requierent le lvl 10 :"+object[i].title);
//         }
//     }
// }
// objets10()


//Exercice Personnage

// let mainCharacter = {

//     name : "Sami",
//     level : 15,
//     life : 100,
//     weapon : {  
//         name: "Berserk",
//         damage: 30,
//     },
//   atta : function() {
//     return this.name+ " attaque avec l'arme "+this.weapon.name+"! Les dégâts causés sont de "+this.level*this.weapon.damage+" PV!";
// }
// }

// console.log(mainCharacter.atta());

//Exercice Bonus

class Character{
    constructor(name, level, life, nameWeapon, damageWeapon){
        this.name = name;
        this.level = level;
        this.life = life;
        weapon :{
                this.nameWeapon = nameWeapon;
                this.damageWeapon = damageWeapon;
        }

        this.attack = function(name){
            let show = this.name + " attaque "+name;
            console.log(show);
        }

        this.arme = function(){
            let weapon = "avec un "+this.nameWeapon;
            console.log(weapon);
        }

        this.degats = function(){
            let damage = "et lui inflige "+this.damageWeapon+"PV de dégâts!";
            console.log(damage);
        }

        this.aie = function(damageWeapon){
            let deg = this.life-damageWeapon;
            let bobo = this.name+" à maintenant "+deg+" PV!";
            console.log(bobo);
        }
    }
}
let mainCharacter = new Character("Sami", 15, 100, "Berserk", 30);
let opponentCharacter = new Character("Jaja", 13, 80,"Ooooh",20);
mainCharacter.attack(opponentCharacter.name);
mainCharacter.arme();
mainCharacter.degats();
opponentCharacter.aie(mainCharacter.damageWeapon);
