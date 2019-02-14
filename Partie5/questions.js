/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    texte1 = 'Le javascript ';
    texte2 = 'est super' ;
    let text = texte1.concat(texte2);
    return text;
}
var afficherCar5 = function (texte) {
    texte = 'Je remets ca demain';
   let text = texte.substring(4,5);
   return text; 
}
var afficher9Car = function (texte) {
    texte = 'Je dirait ca demain';
   let text = texte.substring(0,9);
   return text; 
}
var majusculeString = function (texte) {
    texte = 'un autre excellent exercice';
    let text= texte.toUpperCase();
    return text;
}
var minusculeString = function (texte) {
   texte = 'CELUI CI AUSSI!';
    let text= texte.toLowerCase();
    return text;
}
var SupprEspaceString = function (texte) {
   texte = " Rome ne s'est pas construite en un jour ";
      let text = texte.trim();
    
    return text;
}
var IsString = function (texte) {
   texte="blablabla";
   text = texte.includes("",0);
   return text;
}

var AfficherExtensionString = function (texte) {
   texte = "image.jpg";
   text = texte.slice((texte.lastIndexOf(".") - 1 >>> 0) + 2);;
   return text;
}
var NombreEspaceString = function (texte) {
   texte= "il me faut 5 espaces !";
   let spacecount= (texte.split(" ").length  -1);
   return spacecount;
}
var InverseString = function (texte) {
   texte = "Après demain, à partir d'aujourd'hui?"
   return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
   x = 2;
   y = 3;
   let answer = Math.pow(x,y);
   return answer;
}
var valeurAbsolue = function (nombre) {
   nombre = 5;
   answer = Math.abs(nombre);
   return answer;

}
var valeurAbsolueArray = function (array) {
   array = [ 5, 50, 25, 568 ];
   answer = [Math.abs(array[0]),Math.abs(array[1]),Math.abs(array[2]),Math.abs(array[3]) ];
   return answer;
}
var sufaceCercle = function (rayon) {
   rayon="5";
   aire= Math.PI*(Math.pow(rayon,2));
   answer= Math.round(aire);
   return answer;
}
var hypothenuse = function (ab, ac) {
  
   return Math.hypot(ab,ac);
  
}
var calculIMC = function (poids, taille) {
   let imc = (poids/(Math.pow(taille,2)));
  return Number(imc.toFixed(2)); 
}
