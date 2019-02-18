let canvas = document.getElementById('canvas');
let canv = canvas.getContext('2d');

//Tete
canv.fillStyle="green";
canv.beginPath();
canv.arc(600,200,100,0,Math.PI,true);
canv.closePath();   
canv.fill();

    //Yeux
    canv.fillStyle="white";
    canv.beginPath();
    canv.arc(575,150,10,0,Math.PI*2,true);
    canv.closePath();   
    canv.fill();

    canv.fillStyle="white";
    canv.beginPath();
    canv.arc(625,150,5,10,Math.PI*2,true);
    canv.closePath();   
    canv.fill();

    //Oreilles
    canv.lineWidth=5;
    canv.strokeStyle="green";
    canv.beginPath();
    canv.lineCap = "round";    
    canv.moveTo(560,115);
    canv.lineTo(530,80);       
    canv.stroke();
 

    canv.beginPath();
    canv.lineCap = "round";    
    canv.moveTo(650,115);
    canv.lineTo(680,80);  
    canv.stroke();

//Corps
canv.fillStyle = "green";
canv.fillRect(500,210,200,190);
canv.moveTo(500,410);
canv.beginPath();
canv.bezierCurveTo(503,400,500,420,530,420);
canv.lineTo(670,420);
canv.bezierCurveTo(670,420,698,420,697,400);
canv.closePath();
canv.stroke();
canv.fill();

//Jambes
canv.lineWidth=40;
canv.strokeStyle="green";
canv.beginPath();
canv.lineCap = "round";    
canv.moveTo(550,410);
canv.lineTo(550,470);       
canv.stroke();

canv.lineWidth=40;
canv.strokeStyle="green";
canv.beginPath();
canv.lineCap = "round";    
canv.moveTo(650,410);
canv.lineTo(650,470);       
canv.stroke();

//Bras
canv.lineWidth=40;
canv.strokeStyle="green";
canv.beginPath();
canv.lineCap = "round";    
canv.moveTo(470,235);
canv.lineTo(470,350);       
canv.stroke();

canv.lineWidth=40;
canv.strokeStyle="green";
canv.beginPath();
canv.lineCap = "round";    
canv.moveTo(730,235);
canv.lineTo(730,350);       
canv.stroke();