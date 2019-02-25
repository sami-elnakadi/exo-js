//Créer le tableau random
    // liste de 16 images = 2x8
var tab =[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    .map(p=> [p,Math.random()])
    .sort( (a,b)=> a[1]-b[1])
    .map(p=> p[0])

var pics = document.getElementsByTagName('img');
var checkScore = document.getElementById('score');
var checkTime = document.getElementById('time');
var score = 0;
var step = 1;
var p1, p2;
var timer = null;

for(let i=0; i<pics.length;i++){
    pics[i].src2 = "assets/img/carte" + tab[i] + ".jpg";
}


//Le jeu

document.addEventListener("click", function(a){
    switch(step){
        case 1: // 1er click
            if(a.target.tagName=='IMG'){
                a.target.src = a.target.src2;
                p1 = a.target;
                step = 2;
            }
        break;
        case 2: // 2e click
            if(a.target.tagName=='IMG'){
                a.target.src = a.target.src2;
                p2 = a.target;
                step = 3;
            }
        break;
        timer = setTimeout(check, 2000);
        case 3: //click qui suit: compare
            clearTimeout(timer);
            check();
            
        break;
    }
});

function check() {
    if(p1.src2==p2.src2){
        p2.src = p1.src = 'assets/img/transp1.png';
        score=+ 50;
        alert("Bien joué, tu as trouvé une paire!");
    }
    else{
        p2.src = p1.src = 'assets/img/carte.jpg';
        score = Math.max(0, score-20);
        alert('Les 2 images sont différentes ');
    }
    step = 1;
    checkScore.textContent = score;

    //fin du jeu
    if(document.getElementsByTagName('img').length==0){
        alert('Vous avez gagné!');
        checkScore.textContent = 'Gagné!';
    }
}

//recommencer
function rejoue(){
    document.location.reload(true);
}