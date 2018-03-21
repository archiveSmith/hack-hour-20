/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // iterate thorugh array to find highest product of two numbers
// once found iterate again to find highest pruduct of previous result.

function highestProduct(array) {
    if (array.length<3) return 0;
    if (!Array.isArray(array)) return 0;

    let productOfTwo = 0;
    let productOfThree = 1;
     for (let i = 0; i < array.length; i++){
         for ( let j = i + 1; j < array.length; j++){
             if ((array[i]* array[j]) > productOfTwo){
                productOfTwo = (array[i]* array[j]);
             }
         }
     }
console.log(productOfTwo)
     for (let k = 0; k < array.length; k++){
         if (productOfTwo * array[k] > productOfThree) {
             productOfThree = productOfTwo * array[k]
         }
     }
     return productOfThree;
}
console.log(highestProduct([1,-2,4]))

module.exports = highestProduct;
