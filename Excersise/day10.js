//-------------------------------------------
//Excersise 1
//-------------------------------------------
/* Create a function to convert Excel sheet column title to its corresponding column number.
● Example : 
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
…
● Example : 
    ○ Input : AB
    ○ Output : 28 
*/

function clmnConvert(input) {
  let table = "abcdefghijklmnopqrstuvwxyz"; //Create base to compare
  input = input.toLowerCase(); //Convert input variable to lowercase so case sensitive doesn't matter
  let result = 0; //Create variable to store result

  const getNumber = (input) => {
    //Create nested function to get last character if input length more than 1
    if (input.length > 1) {
      getNumber(input.slice(1)); //Recursive function to slice input until 1 char
    }
    console.log(input);
    result += (table.indexOf(input[0]) + 1) * Math.pow(26, input.length - 1);
    /*Get numeric value of first character of input variable and multiply with 26 (table.length) squared by input length -1)
    then store to result variable.
    if input length more than 1, iterate thru the rest input variable
    */
  };
  getNumber(input); //Run getNumber function with input parameter
  return result;
}

console.log(clmnConvert("ab"));

//v2

// function columnConvert(input) {
//   input = input.toUpperCase(); //Make every input uppercase to match with uppercase value from charCodeAt
//   var sum = 0;
//   for (var i = 0; i < input.length; i++) {
//     //create loop depend on input length
//     sum = sum * 26 + input.charCodeAt(i) - 64; //using charCodeAt to return unicode value of input character
//     //returns 1 for 'A' and 2 for 'B' etc
//   }
//   return sum;
// }
// console.log(columnConvert("aaa"));

//-------------------------------------------
//Excersise 2
//-------------------------------------------
/* Given a non-empty array of integers nums, every element appears twice except for one. Find 
that single one.
● Example 1:
    ○ Input: nums = [2,2,1]
    ○ Output: 1
● Example 2:
    ○ Input: nums = [4,1,2,1,2]
    ○ Output: 4
● Example 3:
    ○ Input: nums = [1]
    ○ Output: 1 
*/

function checkUnique(input) {
  let result = 0; //Create variable to store loop result
  input = input.sort((a, b) => a - b); //Sort input for easier comparison
  for (let i = 0; i < input.length; i++) {
    //Create loop to compare i with other index
    if (input[i] !== input[i - 1] && input[i] !== input[i + 1]) {
      //if i have different value with previous and index after store input[i] to result
      result = input[i];
    }
  }
  return result;
}
console.log(checkUnique([4, 1, 2, 1, 2]));

//-------------------------------------------
//Excersise 3
//-------------------------------------------
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
● Example 1:
    ○ Input: s = "anagram", t = "nagaram"
    ○ Output: true
● Example 2:
    ○ Input: s = "rat", t = "car"
    ○ Output: false
*/

function anagramCheck(s, t) {
  oriS = s; //Save original parameter
  oriT = t; //Save original parameter
  s = s.toLowerCase().split("").sort().join();
  //Make s lowercase so case sensitive doesn't matter, split per letter, sort, then join as string
  t = t.toLowerCase().split("").sort().join();
  //Make t lowercase so case sensitive doesn't matter, split per letter, sort, then join as string
  if (t == s) {
    //Create condition if s and t equal return true
    return `Word ${oriS} dan ${oriT} is an Anagram!`;
  } else {
    return `Word ${oriS} dan ${oriT} is NOT an Anagram!`;
  }
}

console.log(anagramCheck("anagram", "nagaram"));

//-------------------------------------------
//Excersise 4
//-------------------------------------------
/* You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 
or 2 steps. In how many distinct ways can you climb to the top?
● Example 1:
    ○ Input: n = 2
    ○ Output: 2
    ○ Explanation: There are two ways to climb to the top.
        ■ 1. 1 step + 1 step
        ■ 2. 2 steps
● Example 2:
    ○ Input: n = 3
    ○ Output: 3
    ○ Explanation: There are three ways to climb to the top.
        ■ 1. 1 step + 1 step + 1 step
        ■ 2. 1 step + 2 steps
        ■ 3. 2 steps + 1 step
*/
// T(n) = T(n-1) + T(n-2) (Mirip Fibonacci)
function climbStairs(n) {
  let climbWays = [1, 2]; //Create variable to store answer if n <=2

  for (let i = 2; i < n; i++) {
    //Create iteration to store distinc ways to reach destination to an array
    climbWays[i] = climbWays[i - 1] + climbWays[i - 2];
  } //if n = 3, climbWays[2] = climbWays[1] + climbWays[0]. if i still < n go to next iteration

  return climbWays[n - 1];
}
console.log(climbStairs(4));
