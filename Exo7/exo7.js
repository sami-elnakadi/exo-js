function calcul(a,b){
    a = document.getElementById("pointure").value;
    b = document.getElementById("annee").value;
    /*var doublep = a * 2;
    var step2 = doublep + 5;
    var step3 = step2 * 50;
    var step4 = step3 - b;
    var resultat = step4 + 1766;*/
    var resultat = (a * 2 + 5)*50 - b + 1766;
    alert(resultat);
}