function right(){

let b = document.getElementsByTagName('input')[0];
let b2 = document.getElementsByTagName('input')[1];
let t = document.getElementsByName('motdepasse')[0].value;
let t2 = document.getElementsByName('confirmation')[0].value;
console.log(t);
console.log(t2);
if ( t == t2){
    b.style.border = "2px solid green";
    b2.style.border = "2px solid green";
}
else{
    b.style.border = "2px solid red";
    b2.style.border = "2px solid red";
}
}