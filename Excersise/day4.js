// //Excersise 1
// /*Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10
// Parameters : height → triangle height
// */
const trianglePattern = (height) => {
  let pattern = "", //Membuat variable untuk menampung hasil operasi loop
    numberSeries = 1; //Membuat variable untuk menentukan angka pertama
  //Loop pertama untuk menentukan tinggi segitiga
  for (let i = 1; i <= height; i++) {
    //Nested loop untuk mengisi urutan angka dalam segitiga
    for (let j = 1; j <= i; j++) {
      if (numberSeries < 10) {
        numberSeries = `0${numberSeries}`; //Membuat kondisi jika angka <10 ditambahkan dengan 0 di depan
      }
      pattern += numberSeries + " "; //Menambahkan variable numberSeries dan spasi ke dalam variable pattern
      numberSeries++;
    }
    pattern += "\n";
  }
  console.log(pattern.trim()); //Menghilangkan string sisa setelah angka terakhir
};
trianglePattern(5);

// //Excersise 2
/*Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
Parameters : n → total looping
*/
function fizzBuzz(numberInput) {
  for (let i = 1; i <= numberInput; i++) {
    //Membuat loop untuk menampilkan angka sejumlah input
    if (i % 3 == 0 && i % 5 == 0) {
      //Membuat kondisi untuk menampilkan Fizz, Buzz, dan FizzBuzz sesuai kriteria
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);

// //Excersise 3
// /*Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”
//  */
function bodyMassCalc(weight, height) {
  let bmi = weight / Math.pow(height / 100, 2); //Menghitung BMI dan memasukan ke variable bmi
  if (bmi < 18.5) {
    //Membuat kriteria BMI sebagai output dari function
    console.log("less weight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("ideal");
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    console.log("overweight");
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    console.log("very overweight");
  } else {
    console.log("obesity");
  }
}
bodyMassCalc(80, 180);

//Excersise 4
/*Write a function to remove all odd numbers in an array and return a new array that contains
even numbers only
 */
const mixNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function showEvenNumbers(number) {
  return number % 2 == 0; //Melakukan pengecekan kriteria angka genap
}
console.log(mixNumbers.filter(showEvenNumbers)); //.filter method array untuk menampilkan item yang memenuhi kriteria

// //v.2
// function showEvenNumbers(number) {
//   let evenNumbers = []; //Membuat array kosong untuk menampung angka genap
//   for (let i = 0; i <= mixNumbers.length; i++) {
//     //Melakukan loop untuk cek tiap index dari array memenuhi kriteria
//     let extractedNumber = mixNumbers[i]; //Membuat variable sementara untuk menyimpan item yang di cek
//     if (extractedNumber % 2 == 0) {
//       //Melakukan cek kriteria angka genap
//       evenNumbers.push(extractedNumber); //Memasukan item yang lolos pengecekan angka genap ke dalam variable evenNumbers
//     }
//   }
//   console.log(evenNumbers);
// }
// showEvenNumbers(mixNumbers);

//Excersise 5
/*Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
//  */
function stringSplitter(word) {
  console.log(word.split(" "));
}
stringSplitter("Hello World");
