/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  return isSubstring(s1.concat(s2), s2) && s2.length === s1.length;

}

let x = [1 ,2 ,34 3434,56,6,3];
x.filter(el => el % 2 == 0)




console.log(stringRotation("hello", "hello")) // -> true

console.log(stringRotation("hello", "llohe")) // -> true
console.log(stringRotation("hello", "he")) // -> false

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
