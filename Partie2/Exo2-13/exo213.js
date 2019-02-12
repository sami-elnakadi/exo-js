function calculImc(){

let poids = prompt('Inscrivez votre poids');
let taille = prompt('Inscrivez votre taille');
let imc = poids/(taille*taille);


if(imc<16.5){
    alert(imc.toFixed(2)+' famine');
}
else if(imc>=16.5 && imc<18.5){
    alert(imc.toFixed(2)+' maigreur');
}
else if(imc>=18.5 && imc<25){
    alert(imc.toFixed(2)+' corpulence normale');
}
else if(imc>=25 && imc<30){
    alert(imc.toFixed(2)+' surpoids');
}
else if(imc>=30 && imc<35){
    alert(imc.toFixed(2)+' obésité modérée');
}
else if(imc>=35 && imc<40){
    alert(imc.toFixed(2)+' obésité sévère');
}
else if(imc>=40){
    alert(imc.toFixed(2)+' obésité morbide');
}
}