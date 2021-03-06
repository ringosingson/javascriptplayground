// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

/*
function reverseInt(n){
  const reversed = n.toString().split('').reverse().join('')
  
  
  return parseInt(reversed)+ 12

  //parseInt convert back the string to number
  we can use parseFloat - for point and 
  Number only for number
  Math.sign(n) returns 1 if n is positve and -1 if negative
  }
  
  reverseInt(56);*/
