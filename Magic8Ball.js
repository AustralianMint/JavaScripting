//Creates random number
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

//Gonna be filled with corresponding phrases
let eightBall = '';

//didn't utilize these two intutorial
let userName = 'Thomas';
let userQuestion = 'Hom much does lunch cost?';

//Ternary operator greeting either registered User or nobody.
!userName ? console.log('Hello') : console.log(`Hello ${userName}!`);


//Choosing correct number & phrase, inserting to eightBall variable.
//then print.
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    console.log(eightBall)
    break;
  case 1:
    eightBall = 'It is decidedly so';
    console.log(eightBall)
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    console.log(eightBall)
    break;
  case 3:
    eightBall = 'Cannot predict now';
    console.log(eightBall)
    break;
  case 4:
    eightBall = 'Don\'t not count on it';
    console.log(eightBall)
    break;
  case 5:
    eightBall = 'My sources say no';
    console.log(eightBall)
    break;
  case 6:
    eightBall = 'Outlook not so good';
    console.log(eightBall)
    break;
  case 7:
    eightBall = 'Signs point to yes';
    console.log(eightBall)
    break;
  default:
    console.log('nothin to report');
    break;
}
