function conversionTemperature(){
let choix = prompt('Choisissez un converter en tapant le nombre correspondant :'+'\n 0. Fin du programme'+'\n 1.De Celsius vers Fahrenheit'+'\n 2.De Celsius vers Kelvin'+'\n 3.De Fahrenheit vers Celsius'+'\n 4.De Fahrenheit vers Kelvin'+'\n 5.De Kelvin vers Celsius'+'\n 6.De Kelvin vers Fahrenheit');  

    if(parseInt(choix)===0){
        alert('Au revoir!');
    }
    else if(parseInt(choix)===1){
        let type = prompt ('Entrer la température à convertir: ');
        let CF = (parseInt(type) * (9/5)) + 32;
        alert(CF+'F°');
    }
    else if(parseInt(choix)===2){
        let type = prompt ('Entrer la température à convertir: ');
        let CK = parseInt(type) + 273.15;
        alert(CK+'K');
    }
    else if(parseInt(choix)===3){
        let type = prompt ('Entrer la température à convertir: ');
        let FC = (parseInt(type) - 32) / (9/5);
        alert(FC+'°C');
    }
    else if(parseInt(choix)===4){
        let type = prompt ('Entrer la température à convertir: ');
        let FK = ((parseInt(type) - 32) * (5/9)) + 273.15;
        alert(FK+'K');
    }
    else if(parseIn(choix)===5){
        let type = prompt ('Entrer la température à convertir: ');
        let KC = parseInt(type) - 273.13;
        alert(KC+'°C');
    }
    else if(parseInt(choix)===6){
        let type = prompt ('Entrer la température à convertir: ');
        let KF = (parseInt(type) * (9/5)) - 459.67;
        alert(KF+'F');
    }
    else {
    alert('Error');
    }
}