var selectElementsStartingWithA = function (array) {
    return array.filter(mot => mot.indexOf('a')===0); // ou return array.filter((letter) => letter.startsWith("a"))
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter((letter) => letter.startsWith("a")||letter.startsWith("e")||letter.startsWith("i")||letter.startsWith("o")||letter.startsWith("u"));
   
    
}

var removeNullElements = function(array) {
    return array.filter(function(obj) { return obj !=null });
}

var removeNullAndFalseElements = function(array) {
    return array.filter(function(obj) { return obj ===0 || obj});
   
}

var reverseWordsInArray = function(array) {
    for(let i=0; i<array.length; i++){

    array[i]=array[i].split("").reverse();
    array[i] = array[i].join("");
}
    return array;
}

var everyPossiblePair = function(array) {
  let arrayTwo = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
      count = i + 1;
      if (count > array.length - 1) {
          count = 0;
      }
      arrayTwo.push([array[i], array[count]]);
      arrayTwo[i].sort();
  }
  return arrayTwo.sort();
}

var allElementsExceptFirstThree = function(array) {

    let a = array.splice(0,3);
    return array;
}

var addElementToBeginning = function(array, element) {
   let a= array.unshift(1);
   return array;
}

var sortByLastLetter = function(array) {  
  return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

var getFirstHalf = function(string) {
return string.slice(0,3);
   
  
}

var makeNegative = function(number) {
 
    return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  let count = 0;
  for(let i =0; i<array.length; i++){
    array[i]=array[i].split("");  
    if(array[i].join("")===array[i].reverse().join("")){
      count++;
    }
  }
  return count;
}

var shortestWord = function(array) {
  return array.reduce((a, b) => a.length <= b.length ? a : b)
    
}

var longestWord = function(array) {
  return array.reduce((a, b) => b.length <= a.length ? a : b)
}

var sumNumbers = function(array) {
  let res=0;
  for(let i=0; i<array.length;i++){
     res += array[i];
  }
    return res;
}

var repeatElements = function(array) {
  let a = array.join("").repeat(2).split("");
    return a;
}

var stringToNumber = function(string) {
    return parseInt(string);
}

var calculateAverage = function(array) {
  let sum=0;
  let res=0;
  for(let i =0; i<array.length;i++){
     sum += array[i];
     res = sum/array.length;
 
  }
    return res;
}

var getElementsUntilGreaterThanFive = function(array) {
  let a = array.slice(0,6);
    return a ;
//     var hasValueLessThanTen = false;
// for (var i = 0; i < myArray.length; i++) {
//   if (myArray[i] < 10) {
//     hasValueLessThanTen = true;
//     break;
//   }
// }
}

var convertArrayToObject = function(array) {
  let obj = {};
    for (let i = 0; i < array.length; i = i + 2) {
    obj[array[i]] = array[i+1];
    }
    return obj;
}

var getAllLetters = function(array) {
    // transforme tout le tableau en string toute collée. Puis transforme la string en un array dont chaque charactère est séparé.
    array = array.join("").split("").sort();
  
    let x = (array) => array.filter((v, i) => array.indexOf(v) === i);
    return x(array);
  }
 


var swapKeysAndValues = function(object) {
    let result = {};
    for(let key in object){
        result[object[key]] = key;
    }

    return result;


}

var sumKeysAndValues = function(object) {

  let result = 0;
  for(let key in object){
      result += Number(object[key]) + Number(key);
  }
  return result
}

var removeCapitals = function(string) {
  return string.replace(/(?![a-z ])./g, '');
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
return date.toISOString().slice(0, 10).split("-").reverse().join("/");
}

var getDomainName = function(string) {
  let substring = string.substring(string.lastIndexOf("@") + 1, string.lastIndexOf("."));
  return substring;
}

var titleize = function(string) {
  if(!string.split) return string;
    var _titleizeWord = function(strin) {
            return strin.charAt(0).toUpperCase() + strin.slice(1).toLowerCase();
        },
        result = [];
    string.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
}

var checkForSpecialCharacters = function(string) {
  let res=string.match(/\W/g)!= null;
  return res;
 
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  function factorial(n){
    if(n===0||n===1){
      return 1;
    }
    return n*factorial(n-1);
   }
   return factorial(number);
}

var findAnagrams = function(string) {
  // let array = string.split(""); 
  // let tab=[];
  // for(let i = 0; i<array.length; i++){
    
  //   console.log(array);
  // }
  let a = string.split('');
    let result = [];
    a.forEach(function (letter) {
        remainder = a.filter(function (element) {
            return element != letter;
        });
        result.push(letter + remainder.join(''), letter + (remainder.reverse()).join(''));
    });
    return result.sort();
}

var convertToCelsius = function(number) {
  return Math.round((number-32)*(5/9));
  
}

var letterPosition = function(array) {
  tab = [];

  for(let i = 0; i < array.length;i++){
  
  let tst = array[i].toString().toLowerCase();
  let r = tst.charCodeAt(0) - 96;

  tab.push(r);     
}
return tab;
};

