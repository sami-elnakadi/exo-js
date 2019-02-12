function testWhile(){
    let answer;
    let cond = false; // Définir une valeur pour que l'ordi comprenne

    while(cond == false){
    answer = prompt('Veuillez insérer un texte contenant un "p":');
    cond = answer.includes("p");
    }
    alert(answer);

}