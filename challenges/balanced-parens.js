/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
//if string is has parentheses or brackets one most have another
//if string includes ( then it must also have )
//^ same with brackets
//make a counter to count the () and the [] and the {}
if(input.includes('(') && input.includes(')')) {
  return true;
} else if(input.includes('[') && input.includes(']')) {
  return true;
} else if(input.includes('{') && input.includes('}')) {
  return true;
} //else if((paren + square + curly) % 2 === 0) {
  //return true;
return false;
}


console.log( balancedParens('{}'));

module.exports = balancedParens;

//hack-hour: used with stack
//go through each bracket character
//the first one will go out last
//the first then next should be the pairs of brackets
//made a key with obj value and key/pair value as the characters
//new array with value of empty array
//use for loop
//give char value of input[i]
//if(char in matches) then push to the new array
//else if char is any of the brackets -->
//matches[brackets.pop()] is not the char
//return false
//