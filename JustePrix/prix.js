
function Random(min, max) { 
    let answer = Math.random() * (max - min) + min;
    return Math.round(answer);
}
function prix (){
    let nb = Random(20, 80);
    let quest;
    let guess;
    let count = 0;
    
    do{
        count++;
        quest = prompt('Entrez un nombre: ');
        guess=parseInt(quest);
        if(nb<guess){
            alert("C'est moins!");
        }
        else if(nb>guess){
            alert("C'est plus!");
        }
    }
    while(nb!=guess);
    
    if(nb===guess){
        alert('Tu as gagné en ' +count+ ' coups!');

    }
    console.log(answer);
  }

