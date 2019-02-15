var CreationTableauLangages = function () {
    let array = ['Html', 'CSS', 'Java', 'PHP'];
    return array;   
}

var CreationTableauNombres = function () {
    let nombre = [0, 1, 2, 3,4, 5];
    return nombre;
}

var RemplacementElement = function (langages) {
    langages = ['Html', 'CSS', 'Java', 'PHP'];
    let array = langages.splice(2,1, "Javascript");
    return langages;   
}

var AjoutElementLangages = function (langages) {
    langages = ['Html', 'CSS', 'Javascript', 'PHP'];
    langages.push("Ruby", "Python");
    return langages;
}

var AjoutElementNombres = function (nombres) {
     nombres = [0, 1, 2, 3,4, 5];
     nombres.unshift(-2, -1);
     return nombres;
}

var SuppressionPremierElement = function (langages) {
    langages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    langages.shift();
    return langages;
}

var SuppressionDernierElement = function (langages) {
    langages = [ 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python' ];
    langages.splice(-1,1); //splice (Index:-1=le dernier, nombre d'éléments à retirer)
    return langages;

}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    reseaux_sociaux_chaine = "Facebook, Twitter, Google +, Viadeo, LinkedIn";
    let res= reseaux_sociaux_chaine.split(', ');//Va séparer et mettre en tableau tout les éléments séparés par une ', '
    return res;
}

var ConversionTableauChaine = function (langages) {
    langages = ["CSS", "Javascript", "PHP", "Ruby"];
    let arr = langages.toString();
    return arr;
}

var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux = ["Facebook", "Twitter", "Google +", "Viadeo", "LinkedIn"];
    reseaux_sociaux.sort(); //Trie par ordre alphabet, ou num
    return reseaux_sociaux;
}

var InversionTableau = function (langages){
    langages = ["CSS", "Javascript", "PHP", "Ruby"];
    langages.reverse();
    return langages;
}
