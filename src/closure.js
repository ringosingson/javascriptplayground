/*closure - a closure is an inner function that has access to the scope of an enclosing function

  a closure has access to variables in 3 seperate scopes;
1. variables in its scope
2.variables in the scope of the outer function
4.variables in the global scoope,

  The closure also has access to:
1. its own parameters
2. parameters of outer functionss

code eg.*/

const globalVariable = "global var";

function outterFunc(param1) {
  const variable1 = "var one";

  function innerFunc(param2) {
    const variable2 = "var two";

    console.log("globalVariable: ", globalVariable);
    console.log("variable1: ", variable1);
    console.log("variable2: ", variable2);
    console.log("param1: ", param1);
    console.log("param2: ", param2);
  }

  innerFunc("param one");
}

outterFunc("param two");

//2nd example of closure

function instructionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}
let generatedFunc = instructionGenerator();
let result = generatedFunc(3); //
