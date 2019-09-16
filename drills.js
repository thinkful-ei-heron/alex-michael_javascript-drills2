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