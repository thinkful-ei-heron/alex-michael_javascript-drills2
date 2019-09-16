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

console.log(decode('craft block argon meter bells brown croon droop'));
