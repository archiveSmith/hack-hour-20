//////////////////
///Needs Review///
//////////////////

// Write a function "countTwos" that takes a number as an argument, n. The
// function will return the number of 2s encountered when counting from 1 to n
// (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number
// one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.


//my notes:
/*
I need to keep time complexity in mind here. I can always loop through all the numbers
then loop through each number to see how many '2s'
*/
//this solution is O(n^2). Not good !!!
function countTwos(num) {
    //handle edge case
    if (typeof num !== "number")return null;
    let count = 0;
    for(let i = 0 ; i <= num; i++){
        let x = JSON.stringify(i);
        for(let j = 0; j < x.length; j++){
            if(x[j]==='2')count++
        }
    }
    return count;
}


console.log(countTwos(1));//  -> 0
console.log(countTwos(3));//  -> 1
console.log(countTwos(13));//  -> 2
console.log(countTwos(1000));//  -> 300
console.log(countTwos(11420));//  -> 4483

module.exports = countTwos;
