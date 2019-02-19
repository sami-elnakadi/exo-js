let answer = ['b','o','n','j','o','u','r'];
//['m','a','c','h','i','n','e']
let guess = ['','','','','','',''];
      
function guessLetter (){
   let quest = prompt('Entrez une lettre s.v.p: ');
// Fonctionne, mais pas pour les doubles lettres:   
//    let pos;
//    for(let i=0; i<guess.length;i++){
//       for(let j=0; j<guess.length;j++){
//         answer[i]=guess[j];
//     }
     

//    if(answer.includes(quest)) {
 
//       if(guess.includes(quest) === false){
//          pos = answer.indexOf(quest);
//          guess.splice(pos,1,quest);
//          alert('Bien joué!')
//       }
//       if(guess.value===answer.value){
//          alert('GG à toi, tu as trouvé le mot!');
//       }
//    }
//    else 
//       alert('Nop, essaies encore!');

// }

for(let i=0; i<guess.length;i++){
   if(quest === answer[i]){
      guess[i] = quest;
      alert('Bravo, vous avez trouvé '+guess[i]);
      alert('Vous avez '+guess);
      }
   }
if(answer.includes(quest)===false) {   
   alert('Nop, essaies encore!');
   }

let over = 0;
for(let i=0; i<guess.length;i++){
   if(guess[i] === answer[i]){
      over++;
      }
   if(over===answer.length){
      alert('Bien joué, tu as trouvé le mot!')
      }

   }
}