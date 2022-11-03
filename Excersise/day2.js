// //Excersise 1
// //Write a code to convert from celsius to fahrenheit (F=(C*1.8)+32)
// const celsius = 30;
// let toFahrenheit = celsius * 1.8 + 32;
// console.log(`${celsius}° Celcius is ${toFahrenheit}° Fahrenheit`);

// //Excersise 2
// //Write a code to check wether the number is odd or even
// const number = 53;
// if (number % 2 == 0) {
//   console.log(`${number} is an even number!`);
// } else {
//   console.log(`${number} is an odd number!`);
// }

// //Excersise 3
// //Write a code to check wether a number is prime number or not (Habis dibagi 2, 3, 5, 7, 11)
// const primeNumber = 121;
// if (primeNumber < 0) {
//   console.log(`Negative number is not a prime number by definition`);
// } else if (primeNumber == 1 || primeNumber == 0) {
//   console.log(`${primeNumber} is not a prime number by definition!`);
// } else if (primeNumber > 2 && primeNumber % 2 == 0) {
//   console.log(`${primeNumber} is not a prime number! It is divisible by 2`);
// } else if (primeNumber > 3 && primeNumber % 3 == 0) {
//   console.log(`${primeNumber} is not a prime number! It is divisible by 3`);
// } else if (primeNumber > 5 && primeNumber % 5 == 0) {
//   console.log(`${primeNumber} is not a prime number! It is divisible by 5`);
// } else if (primeNumber > 7 && primeNumber % 7 == 0) {
//   console.log(`${primeNumber} is not a prime number! It is divisible by 7`);
// } else if (primeNumber > 11 && primeNumber % 11 == 0) {
//   console.log(`${primeNumber} is not a prime number! It is divisible by 11`);
// } else {
//   console.log(`${primeNumber} is a prime number!`);
// }

//V2
let number = 12;
let isPrime = true;

if (number == 1 || number == 0) {
  console.log(`${number} is not a prime number by definition!`);
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime == true) {
    console.log(`${number} is a prime number!`);
  } else {
    console.log(`${number} is not a prime number!`);
  }
}

// //Excersise 4
// //Write a code to ﬁnd the sum of the numbers 1 to N. Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
// const number = 6;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum += i;
// }
// console.log(sum);

// //Excersise 5
// //Write a code to ﬁnd factorial of a number. Example : !4 → 4 x 3 x 2 x 1 = 24 (n! = n x (n-1)!)
// let num = 4;
// num = Math.abs(Math.round(num));
// let factorial = 1;
// for (let i = num; i >= 1; i--) {
//   factorial *= i;
// }
// console.log(factorial);

// //Excersise 6
// //Write a code to print the ﬁrst N ﬁbonacci numbers. (Un = Un-2 + Un-1) ##Masih nyontek
// const number = 7;
// let n1 = 0,
//   n2 = 1;
// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nn = n1 + n2;
//   n1 = n2;
//   n2 = nn;
// }

// //v2
// const fiboNumber = 7;
// let result = "0 1";
// let tempA = 0;
// let tempB = 1;
// let tempC = 0;
// if (fiboNumber <= 2) {
//   console.log(result);
// } else {
//   for (let i = 3; i <= fiboNumber; i++) {
//     result += ` ${tempA + tempB}`; // 0 1 1 2
//     tempC = tempA;
//     tempA = tempB;
//     tempB = tempC + tempB;
//   }
// }
// console.log(result);
