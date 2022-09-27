//This project takes any given input and changes the syntax.
//The point is to speak like a whale. 


//Will be translated into 'Whale talk'.
let input = 'turpentine and turtles';
//Constant of vowels.
const vowels = ['a', 'e', 'i', 'o', 'u'];
//empty array to be filled with filtered out vowels.
let resultArray = [];


//nested for loop filtering out all non vowel letters from input
for (let i = 0; i < input.length; i ++) {
  //duplicate 'e' and 'a'
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}


//Combines all array elements & capitalizes them.
let resultString = resultArray.join('').toUpperCase();

console.log(resultString);


