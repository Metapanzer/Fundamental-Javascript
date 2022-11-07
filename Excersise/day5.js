/*Excersise 1
Write a function to get the lowest, highest and average value in the array (with and without sort function).
*/
// const input = [2, -50, 6, 9, -21, 34, 83, 998];
// let getLowest = (input) => {
//   return console.log(Math.min(...input)); //2, -50, 6, 9, -21, 34, 83, 998
// };
// getLowest(input);

// let getHighest = (input) => {
//   return console.log(Math.max(...input));
// };
// getHighest(input);

// let getAvg = (input) => {
//   let avg = 0;
//   for (let num of input) {
//     avg += num;
//   }
//   return console.log(avg / input.length);
// };
// getAvg(input);

/*Excersise 2
Write a function that takes an array of words and returns a string by concatenating the words in 
the array, separated by commas and - the last word - by an 'and'.
*/
// let input = ["satu", "dua", "tiga", "empat"];
// let words = "";
// function stringCon(input) {
//   for (let i = 0; i < input.length - 1; i++) {
//     words += input[i] + ", ";
//   }
//   words += "and " + input[input.length - 1];
//   return console.log(words);
// }
// stringCon(input);

/*Excersise 3
Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”]
*/

// function stringSplit(input) {
//   return console.log(input.split(" "));
// }
// stringSplit("Hello World");

/*Excersise 4
Write a function to calculate each element in the same position from two arrays of integer. 
Assume both arrays are of the same length.
Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
// function arrayCalc(array1, array2) {
//   let sumArray = [];
//   for (let i = 0; i <= array1.length - 1; i++) {
//     sumArray[i] = array1[i] + array2[i];
//   }
//   return console.log(sumArray);
// }
// arrayCalc([1, 2, 3], [3, 2, 1]);

/*Excersise 5
Write a function that adds an element to the end of an array. However, the element should only 
be added if it is not already in the array.
*/
// let arrayElements = ["Apple", "Manggo", "Orange", "Kiwi"];
// function addElement(element) {
//   if (arrayElements.includes(element)) {
//     return console.log(arrayElements);
//   } else {
//     arrayElements.push(element);
//   }
//   return console.log(arrayElements);
// }
// addElement("Manggos");

/*Excersise 6
Write a function to remove all odd numbers in an array and return a new array that contains even 
numbers only
*/
// let removeOdd = (input) => {
//   let evenNumber = [];
//   for (let number of input) {
//     if (number % 2 == 0) {
//       evenNumber.push(number);
//     }
//   }
//   return console.log(evenNumber);
// };
// removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
