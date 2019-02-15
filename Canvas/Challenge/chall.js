let canvas = document.getElementById('canvas');
let canv = canvas.getContext('2d');

//Drapeau
// noir
canv.fillRect(100,20,25,50);
canv.fillStyle = "yellow";
//jaune
canv.fillRect(125,20,25,50);
//rouge
canv.fillStyle = "red";
canv.fillRect(150,20,25,50);

//Bateau
//Mat
canv.fillStyle = "black";
canv.fillRect(100,70,5,80);


//Coque
canv.fillRect(80,150,150,80);
canv.beginPath();
canv.moveTo(80,150);
canv.lineTo(40,150);
canv.lineTo(80,230);

canv.closePath();
canv.fill();

canv.beginPath();
canv.moveTo(230,150);
canv.lineTo(270,150);
canv.lineTo(230,230);

canv.closePath();
canv.fill();


//maison
    //Toit
canv.fillStyle="brown";
canv.beginPath();
canv.moveTo(300,300);
canv.lineTo(375,260);
canv.lineTo(450,300);

canv.closePath();
canv.fill();


    //corps
canv.fillStyle="yellow";
canv.fillRect(300,300,150,100);

//Bonhomme
    //Tete
    canv.fillStyle="black";
canv.beginPath();
canv.arc(600,400,30,0,Math.PI*2,false);
canv.closePath();   
canv.fill();

    //Corps
canv.beginPath();    
canv.moveTo(600,415);
canv.lineTo(600,500);
canv.closePath();   
canv.stroke();
    //bras
    canv.beginPath();    
    canv.moveTo(600,455);
    canv.lineTo(580,430);
    canv.closePath();   
    canv.stroke();

    canv.beginPath();    
    canv.moveTo(600,455);
    canv.lineTo(620,430);
    canv.closePath();   
    canv.stroke();

    //Jambes
    canv.beginPath();    
    canv.moveTo(600,500);
    canv.lineTo(580,550);
    canv.closePath();   
    canv.stroke();

    canv.beginPath();    
    canv.moveTo(600,500);
    canv.lineTo(620,550);
    canv.closePath();   
    canv.stroke();




