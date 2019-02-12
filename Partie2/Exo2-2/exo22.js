function aireCercle(a){
    a = document.getElementById("rayon").value;

    var aireCercle= Math.PI * (a*a);

    alert('Le cercle a une surface de ' +aireCercle+ ' cm²');
}