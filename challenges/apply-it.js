/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  console.log(args)
for(var i = 0; i < arguments[0].length; i++) {

  if(arguments[0].length != args.length) return 'Can\'t match these up!'
  if(arguments[i] === args[i]) {
    func.replace(/arguments/[i]/i, args[i])
  }
}
}

//solution notes
//can use eval(code) > harmful bc checks to see if code evals to code, or is legit JS
//right ans -> reduce over args and add comma, eval runs in IIFE

module.exports = applyIt;
