// example 1
var ninja = 'Libby';
setTimeout( function (){ console.log(ninja); }, 2000 ); // run the function defined after 2000 milliseconds
console.log(ninja);

// example 1.5
var ninja = 'First';
var janin = 'Second';
setTimeout( function (){ console.log(janin); }, 2000 ); // run the function defined after 2000 milliseconds
console.log(ninja);

// example 2
console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';
setTimeout( function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
);
console.log("Printing ninja value.");
console.log(ninja, "NOW");

// example 3
var a = 2;
var b = function() { console.log("something"); };
function doSomething(x) {
  console.log(typeof(x));
}
doSomething(a);
doSomething(b);

// example 3.5
function doSomething(possibleCallback) {
    if (typeof(possibleCallback) === 'function'){
      console.log('possibleCallback is a callback!');
      possibleCallback(); //we can invoke the callback!
    }
    else {
      console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
    }
  }
  doSomething(function myCallback(){ console.log('yes, I am a callback!') });
  doSomething('string');
  
// alternate 3.5
function doSomething(x) {
    if (typeof(x) === 'function'){
      console.log('possibleCallback is a callback!');
      x(); //we can invoke the callback!
    }
    else {
      console.log('possibleCallback: ', x, ' is not a callback function.');
    }
  }
  doSomething(function myCallback(){ console.log('yes, I am a callback!') });
  doSomething('stuff and things');

//   example 4
function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    console.log("Pasta is done!");
    return pasta + " Pasta! Voila!";
  }
  makePasta("Penne");
  makePasta("Farfalle");
  
//   example 4.5
function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    // create a variable for sauce!
    var sauce = makeSauce();          // invoke makeSauce, our callback
    console.log("Mixing sauce");
    console.log("Pasta is done!");
    return pasta + " Pasta with " + sauce + " sauce! Voila!";
  }
  function makePesto() {
    console.log("Making Pesto");
    return "pesto";
  }
  function makeAlfredo() {
    console.log("Making Alfredo");
    return "alfredo";
  }
  // we pass the whole makePesto recipe to makePasta!
  console.log(makePasta("Penne", makePesto));
  // notice lack of parentheses after makePesto.
  // Remember: we want to pass the function, not execute it and pass a return value.
  console.log(makePasta("Farfalle", makeAlfredo));
  
// Ajax
// assuming you have jQuery
$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){     
        favoritePokemon = data.name;
    });
    console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
});       

