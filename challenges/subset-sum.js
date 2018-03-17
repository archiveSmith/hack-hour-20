/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let add = function(a, b){
      return  a + b;
    } 

    if (array.reduce(add, 0) === target) return true;
    else return array.some((acc, curr) => { //tests whether at least one element in the array passes the test implemented by the provided function.
      return subsetSum(array.slice()), target)=== true;
    })
} 


console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([8, 2, 4, 12], 13)

module.exports = subsetSum;

const createAsyncArticle = async () => {
    await connectToDB();
    let html = await getLocalArtice();
    for(let i = 0; i < 20; i++) {
        console.log(i);
    }
    return await createAsyncArticle(html);
 }

 createAsyncArticle().then((result) => console.log('sucess', result));