function faireChoix(){
let answer= prompt('Choisissez 1, 2 ou 3');
if (parseInt(answer)==1){
    alert('Merci');
}
else if (parseInt(answer)==2){
    alert('Bonjour');
}
else if (parseInt(answer)==3){
    alert('Au revoir');
}
else {
    alert('Pardon, que voulez-vous ?');
}
}
