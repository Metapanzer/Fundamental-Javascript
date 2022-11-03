//Excersise 1
//Write a code to convert from celsius to fahrenheit (F= C * (9/5) + 32)
const celsius = 30;
let toFahrenheit = celsius * (9 / 5) + 32;
console.log(`${celsius}° Celcius is ${toFahrenheit}° Fahrenheit`);

//Excersise 2
//Write a code to check wether the number is odd or even
const numberInput = 53;
if (numberInput % 2 == 0) {
  console.log(`${numberInput} is an even number!`);
} else {
  console.log(`${numberInput} is an odd number!`);
}

//Excersise 3
//Write a code to check wether a number is prime number or not (Habis dibagi 2, 3, 5, 7, 11)
let primeNumber = 12; //Angka yang akan dicek
let isPrime = true; //Menentukan baseline awal, nantinya akan berubah sesuai hasil pengecekan

if (primeNumber == 1 || primeNumber == 0) {
  console.log(`${primeNumber} is not a prime number by definition!`); //Membuat angka 1 dan 0 sudah pasti bukan bilangan prima
} else if (primeNumber > 1) {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i == 0) {
      isPrime = false;
      break;
    }
  } //Looping untuk mencari angka lain yang bisa membagi habis bilangan yang dicek selain 1 dan angka itu sendiri
  if (isPrime == true) {
    console.log(`${primeNumber} is a prime number!`);
  } else {
    console.log(`${primeNumber} is not a prime number!`);
  }
}

//Excersise 4
//Write a code to ﬁnd the sum of the numbers 1 to N. Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
const number = 6;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);

//Excersise 5
//Write a code to ﬁnd factorial of a number. Example : !4 → 4 x 3 x 2 x 1 = 24
let num = 4;
num = Math.abs(Math.round(num)); //Mengubah angka input menjadi absolut dan membulatkannya kebawah
let factorial = 1;
for (let i = num; i >= 1; i--) {
  factorial *= i;
}
console.log(factorial);

//Excersise 6
//Write a code to print the ﬁrst N ﬁbonacci numbers.
const fiboNumber = 7;
let result = "0 1"; //Membuat bilangan fibonacci urutan ke 1 dan 2, yaitu 0 dan 1
let tempA = 0;
let tempB = 1;
let tempC = 0;
if (fiboNumber <= 2) {
  console.log(result); //Menampilkan 0 dan 1 jika diminta 2 bilangan fibonacci pertama
} else {
  for (let i = 3; i <= fiboNumber; i++) {
    result += ` ${tempA + tempB}`; //Menambahkan nilai tempA dan tempB lalu ditambah ke dalam result sebagai string (0 1 1 2 dst)
    tempC = tempA;
    tempA = tempB;
    tempB = tempC + tempB;
  }
}
console.log(result);
