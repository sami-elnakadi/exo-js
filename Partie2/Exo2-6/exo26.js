const tab = [-2,1,4];
// var first = tab[1];
// var last = tab[tab.length -1];

function soustrait (x){ 


    if(x-2 >= 0){
        const result = x-2;
        return result;
    }
    else{
        return('Nombre négatif!');    
    }
}

function affiche(){
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length -1]));
}