
//////////////////
///Needs Review///
//////////////////

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
  /////////////////
  //My stupid way//
  /////////////////

  startingPoint = s2.indexOf(s1[0]);
  // console.log({startingPoint});

  for(let i = 0, f = startingPoint; i < s1.length; i++, f++){
    if(f === s1.length){
      f=0;
    }
    if(s1.charAt(i) !== s2.charAt(f)){
      return false
    }
  }
  return true

  ////////////////
  ///Better way///
  ////////////////
  // let compare = s1.concat(s1);
  // return compare.includes(s2);


}

console.log(stringRotation("hellos", "lloshe"));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
