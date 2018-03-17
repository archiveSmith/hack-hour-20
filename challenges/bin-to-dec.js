/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    let total = 0;
    for ( let i = 0 ; i < binary.length; i++){
        total += Math.pow(2, binary.length-1-i)*binary.charAt(i);
    }
    return total;
}
function decToBin(num) {
    const bin = [];
    let temp = num;
    for ( let i = 16; i >= 0 ; i--) {
        if ( num >= Math.pow(2, i)){
            bin.push(Math.floor(temp/Math.pow(2,i)));
            temp = temp % Math.pow(2,i);
        }
    }
    return bin.join('');
}
module.exports = binToDec;
