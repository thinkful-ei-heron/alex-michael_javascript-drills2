'use strict';
function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);
}
//console.log(jediName('Beyonce', 'Knowles'));


function beyond(num){
  if(num === 0){
    console.log('Staying Home');
  }
  else if(!isFinite(num)){
    console.log('And Beyond');
  }
  else if(num < 0){
    console.log('To negative infinity');
  }
  else {
    console.log('To infinity');
  }
}

function decode(str){
  let words = str.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean);
  return words.map(word => {
    let choice = word.charCodeAt(0) - "a".charCodeAt(0) + 1; 
    if (choice < 1 || choice > 4) return ' ';
    return word.charAt(choice)
  }).join('');
}

//console.log(decode('craft block argon meter bells brown croon droop'));


function numberDays(month, leapYear = false){
  let result;
  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      result = `${month} has 31 days.`
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      result = `${month} has 30 days.`
      break;
    case 'February':
      result = `February has ${leapYear ? 29 : 28} days.`
      break;  
    default:
      throw new Error('Must provide a valid month');
    }
  

  return result;
}

//console.log(numberDays('Splarch'));

function rps(choice){
  if (choice !== 1 && choice !== 2 && choice !== 3){
    throw new Error('Input must be 1 for rock, 2 for paper, or 3 for scissors');
  }
  const compChoice = Math.floor(Math.random() * 3) + 1;
  const options = ['','rock','paper','scissors'];
  console.log(`You played ${options[choice]}, computer played ${options[compChoice]}`);

  switch(choice){
    case 1:
      switch(compChoice){
        case 1:
          return 'Tie';
        case 2:
          return 'You lose';
        case 3:
          return 'You win';
      }
    case 2:
      switch(compChoice){
        case 1:
          return 'You win';
        case 2:
          return 'Tie';
        case 3:
          return 'You lose';
      }
    case 3:
      switch(compChoice){
        case 1:
          return 'You lose';
        case 2:
          return 'You win';
        case 3:
          return 'Tie';
      }
  }
}

console.log(rps(1));
console.log(rps(2));
console.log(rps(3));
console.log(rps(1));
console.log(rps(2));
console.log(rps(3));