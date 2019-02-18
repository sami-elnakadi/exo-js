function calculMoyenne() {

    let nombre = prompt('Entrer un nombre entier: ');
    let somme = 0;
    let count = 0;

    do {
        if (Number.isInteger(nombre)) {
            count++;
            somme += Numbers(nombre);
        } 
        else {
            alert('Erreur');
        }
        console.log(nombre);
        nombre = prompt('Entrer un nombre entier: ');
    }
    while (nombre >= 0);

    if (nombre < 0) {
        let moyenne = somme / count;
        alert(moyenne);
    }

}
