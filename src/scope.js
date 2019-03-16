// Global Scope
var firstFunction = function() {
  // firstFunction's Scope
  var secondFunction = function() {
    // secondFunction's Scope
  };
};

//var vs let
function doThing() {
  var num = 1;
  if (num >= 0) {
    let secondNum = 2;
    console.log(num); // 1
    console.log(secondNum); // 2
  }
  console.log(num); // 1
  console.log(secondNum); // Uncaught ReferenceError: secondNum is not defined
}
doThing();
