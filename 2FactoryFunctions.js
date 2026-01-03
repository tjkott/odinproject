// The "New Way" (Arrow function shorthand)
const getBoard = () => board;

// The "Old Way" (Function keyword)
const getBoard = function() {
  return board;
};

//*PRIVATE VARIABLES AND FUNCTIONS*/
// A varaible by default is public in hjavascript. 
// In factory functions, private variables are achieved through closures. 

function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0; // Reputation remains private as it is not returned by the object. 
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});


//* PROTOTYPAL INHERITANCE*/
// Replaces complex parent-child hirearchy of objects.
// Copy one object to another object with Object.assign()

// Base factory
function createPlayer (name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}

// Inheriting factory
function createPlayer (name, level) {
  const user = createUser(name); // calls base factory

  const increaseLevel = () => level++;
  // Inheritance - user is actually just base factory
  return Object.assign({}, user, { increaseLevel });
}

//*Module pattern - IIFE
// IIFE is a fucntion which runs second it is defined. 
// example IIFE functions. 
const immediatefunc = (function() {
  console.log("I run immediately!");
})();
//immediatefunc(); // no need to call it. 


const calculator = (function() {
  // PRIVATE variables and functions
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;

  // PUBLIC interface
  return {
    add,
    sub
  };
})(); // runs but does not console log anything. 

calculator.add(3,5);


// Usage:
//console.log(calculator.add(5, 3)); // 8