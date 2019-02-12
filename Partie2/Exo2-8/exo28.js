function jourDeLaSemaine(){
let date = new Date();
let Days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
let Day = Days[date.getDay()];
alert("Aujourd'hui nous sommes " +Day);
}