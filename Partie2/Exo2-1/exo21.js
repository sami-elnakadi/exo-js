function aire(){
    a = document.getElementById("largeur").value;
    b = document.getElementById("longueur").value;
    var aire = a * b;
    alert('Le rectangle a une aire de ' +aire+ ' cm²');
}

function perimetre(){
    a = document.getElementById("largeur2").value;
    b = document.getElementById("longueur2").value;
    var peri = 2*a + 2*b;
    alert('Le périmètre du rectangle est ' +peri+ ' cm');
}