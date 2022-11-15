//Excersise 1
/*
Create a function to calculate array of student data
● The object has this following properties :
    Name → String
    Email → String
    Age → Date
    Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
   ■ Score
        Highest
        Lowest
        Average
   ■ Age
        Highest
        Lowest
        Average
 */

const studentData = [
  { name: "SiA", email: "a@gmail.com", age: 20, score: 90 },
  { name: "SiB", email: "b@gmail.com", age: 29, score: 80 },
  { name: "SiC", email: "c@gmail.com", age: 25, score: 60 },
  { name: "SiD", email: "d@gmail.com", age: 18, score: 75 },
];

const calculateStudentData = (studentData) => {
  let highestScore = Math.max(...studentData.map((e) => e.score));
  let lowestScore = Math.min(...studentData.map((e) => e.score));
  let avgScore =
    studentData.map((item) => item.score).reduce((a, b) => a + b) /
    studentData.length;

  let highestAge = Math.max(...studentData.map((e) => e.age));
  let lowestAge = Math.min(...studentData.map((e) => e.age));
  let avgAge =
    studentData.map((item) => item.age).reduce((a, b) => a + b) /
    studentData.length;

  return (student = {
    score: { Highest: highestScore, Lowest: lowestScore, Average: avgScore },
    age: { Highest: highestAge, Lowest: lowestAge, Average: avgAge },
  });
};

console.log(calculateStudentData(studentData));

//Excersise 2
/*
● Create a program to create transaction
● Product Class
    ○ Properties
        ■ Name
        ■ Price
● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty
    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data 
*/
class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}
class Transaction extends Product {
  constructor(productName, price, quantity) {
    super(productName, price);
    this.quantity = quantity;
    this.total = this.price * this.quantity;
  }
  addToCart() {
    return `Shopping Cart: \n Nama Produk: ${this.productName}, Harga: ${this.price}, Jumlah: ${this.quantity}`;
  }
  showTotal() {
    return `Total Price: ${this.total}`;
  }
  checkOut() {
    return `Checkout:\n Nama Produk: ${this.productName}\n Harga: ${this.price}\n Jumlah: ${this.quantity}\n Total: ${this.total}`;
  }
}
// const product = new Product("Galaxy Flip 2", 2000);
const transaction = new Transaction("Galaxy Flip 2", 2000, 2);
console.log(transaction.addToCart());
console.log(transaction.showTotal());
console.log(transaction.checkOut());

/////////
/* notes */
/////////
// const book = {
//   title: "Harry Potter",
//   author: "J. K. Rowling",
//   year: 2010,
//   actor: [
//     {
//       fullName: "Daniel Redcliffe",
//       phone: ["082154555", "0512488565"],
//       greeting: () => {
//         return "Hello";
//       },
//     },
//     { fullName: "Emma Watson", phone: ["0223115548778"] },
//   ],
// };

//Expected
//Daniell Redcliffe || PhoneNumber = 082154555, 0512488565
//Emma Watson || PhoneNumber = 0223115548778
// console.log(
//   `${book.actor[0].fullName} || PhoneNumber = ${book.actor[0].phone}`
// );
// console.log(
//   `${book.actor[1].fullName} || PhoneNumber = ${book.actor[1].phone}`
// );

// let person = {
//   name: "Frengky",
//   age: 24,
// };

// for (let key in person) {
//   console.log(key); // name, age
//   console.log(person[key]); //Frengky, 24
// }
