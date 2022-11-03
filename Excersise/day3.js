//Excersise 1
/*Write a code to display the multiplication table of a given integer.
Example : Number → 9
○ Output :
9 x 1
9 x 2
…
9 x 10
*/
const inputNumber = 9;
const multiply = 10;
for (let i = 1; i <= multiply; i++) {
  console.log(`${inputNumber} x ${i}`);
}

//Excersise 2
//Write a code to check whether a string is a palindrome or not.
let palindrome = `Kasur RusaK`;
palindrome = palindrome.toLowerCase(); //Mengubah variable palindrome ke huruf kecil semua agar jika ada huruf besar tetap bisa dianggap sama
let tempA = ``;
for (let i = palindrome.length - 1; i >= 0; i--) {
  tempA += palindrome.substr(i, 1); //atau bisa pakai palindrome.charAt(i)
} //Loop untuk mengisi tempA dengan huruf pada variable palindrome yang dibalik dari belakang ke depan
if (palindrome === tempA) {
  console.log(`Kata ${palindrome} merupakan sebuah palindrom!`);
} else {
  console.log(`Kata ${palindrome} BUKAN sebuah palindrom!`);
}

//Excersise 3
//Write a code to convert centimeter to kilometer. cm to km 1:100.000
const centimeter = 500000;
let kilometer = centimeter / 100000;
console.log(`${centimeter} cm sama dengan ${kilometer} Km`);

//Excersise 4
//Write a code to format number as currency (IDR) Example : 1000 → “Rp. 1.000,00”
const number = 1000;
console.log(
  number.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
); //Method yang ada dalam number, yaitu mengubah number jadi local currency Indonesia

//Excersise 5
/*Write a code to remove the ﬁrst occurrence of a given “search string” from a string.
Example : string = “Hello world”, search string = “ell” → “Ho world”
*/
let wordInput = "Hello world";
let search = "ell";
let resultReplace = wordInput.replace(search, ""); //Mereplace isi dari variable wordInput, yang sesuai string dalam variable search diubah menjadi string kosong
console.log(resultReplace);

//Excersise 6
/*Write a code to capitalize the ﬁrst letter of each word in a string
Example : “hello world” → “Hello World”
*/
let word = "hello world";
word = word.toLowerCase();
word = word.split(" "); //melakukan split string dengan separator spasi (hasilnya berupa array)
for (let i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
} //Loop untuk mengubah huruf pertama tiap kata jadi uppercase lalu digabung dengan huruf sisanya dari kata tersebut
console.log(word.join(` `)); //memunculkan variable word dengan terlebih dahulu menggabungkan array dengan separator spasi

//Excersise 7
//Write a code to reverse a string.
const reverseWord = "kebalik";
let result = ``;
for (let i = reverseWord.length - 1; i >= 0; i--) {
  result += reverseWord.charAt(i); // atau bisa pakai reverseWord.substr(i, 1)
} //Loop untuk mengisi result dengan huruf pada variable reverseWord yang dibalik dari belakang ke depan
console.log(result);

//Extra excersise 1
/*tentukan huruf berdasarkan nilai rata2 dari suatu murid
misal ada mtk=70, ipa=80, ips=90, bhs=60
Jika rata2 nilai > 60 maka nilai huruf = D
Jika rata2 nilai > 70 maka nilai huruf = C
Jika rata2 nilai > 80 maka nilai huruf = B
Jika rata2 nilai > 90 maka nilai huruf = A (nilai A bisa didapat jika nilai rata2 >90 dan nilai ipa >80)
Hasil yang diinginkan: nilai rata2 = 75, maka nilai huruf = C
*/
let math = 70,
  science = 80,
  social = 90,
  language = 60,
  grade = "";
let mean = (math + science + social + language) / 4;
if (mean > 60 && mean <= 70) {
  grade = "D";
} else if (mean > 70 && mean <= 80) {
  grade = "C";
} else if (mean > 80 && mean <= 90) {
  grade = "B";
} else if (mean > 90 && mean <= 100 && science > 80) {
  grade = "A";
}
console.log(`Nilai rata-rata = ${mean}, maka nilai huruf = ${grade}`);

//Extra excersise 2
//buatlah sebuah program untuk menghitung biaya parkir
//terdapat dua jenis kendaraan yaitu mobil dan motor
//motor untuk 2 jam pertama biaya parkir nya 2000
//biaya motor perjam setelahnya 1000
//mobil untuk 2 jam pertama biaya parkir nya 5000
//biaya motor perjam setelahnya 2000
//durasi parkir dihitung dalam bentuk menit
//jika durasi dalam menit di konversi ke jam, dan terdapat kelebihan menit,
// maka pembayaran akan dikenakan biaya tambahan satu jam
//inputan terdiri dari dua yaitu jenis kendaran, dan durasi
// ex: kendaraan = motor, durasi = 210 (dalam menit)

//Extra excersise 3
//buatlah pemrograman untuk menampilkan baris bilangan
//jika bilangan yang muncul adalah kelipatan 3 maka tampilkan dor
// jika bilangan yg muncul adalah kelipatan 5 makan tampilkan der
// jika bilangan yang muncul adalah kelipatan 3 dan 5 maka tampilkan duar
// input berupa angka
// ex: bilanganAngka = 10
// result: 1,2,dor,4,der,dor,7,8,dor,der
