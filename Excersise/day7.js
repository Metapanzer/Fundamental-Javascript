//Excersise 1
//Create a function to check if two objects are equal
function checkEqual(a, b) {
  return Object.entries(a).toString() == Object.entries(b).toString();
}
console.log(
  checkEqual(
    { name: "Abdul", age: 10 },
    { name: "Abdul", age: 10, address: "SBY" }
  )
);

//Excersise 2
/*Create a function to get the intersection of two objects
● Example
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 }
*/

function intersect(a, b) {
  let aProp = Object.keys(a);
  let aValue = Object.values(a);
  let bProp = Object.keys(b);
  let bValue = Object.values(b);

  let aCombine = [];
  let bCombine = [];

  for (let i = 0; i < aProp.length; i++) {
    aCombine[i] = aProp[i] + ":" + aValue[i];
    bCombine[i] = bProp[i] + ":" + bValue[i];
  }

  let answer = {};
  for (let j = 0; j < aCombine.length; j++) {
    for (let k = 0; k < bCombine.length; k++) {
      if (aCombine[j] == bCombine[k]) {
        // Object.assign(answer, { [aProp[j]]: aValue[j] });
        answer[bProp[k]] = bValue[k];
      }
    }
  }
  return answer;
}
console.log(intersect({ a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 3 }));

//Excersise 3
/*Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example : 
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  }

]

Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 3’, email : ‘student3@mail.com’  }

]

● Result : 
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  },
{ name: ‘Student 3’, email : ‘student3@mail.com’  }

]
*/
function mergeArray(array1, array2) {
  let mergeArray = array1.concat(array2);
  for (let i = 0; i <= array1.length || i <= array2.length; i++) {
    for (let j = 0; j <= array1.length || j <= array2.length; j++) {
      if (mergeArray[i] == mergeArray[j]) {
        mergeArray.splice(i, 1);
      }
      return mergeArray;
    }
  }
}

console.log(
  mergeArray(
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 2", email: "student2@mail.com" },
      { name: "Student 4", email: "student4@mail.com" },
    ],
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 3", email: "student3@mail.com" },
    ]
  )
);

//Excersise 4
/*Create a function that can accept input as an array of objects and switch all values into 
property and property into value
● Example : 
○ Input : [{ name: 'David', age: 20 }]
○ Output : [{ David: 'name', 20: ‘age’}]
*/
function switchValue(input) {
  let key = Object.values(input[0]);
  let value = Object.keys(input[0]);
  let tempA = [];
  tempA.push([key[0], value[0]]);
  tempA.push([key[1], value[1]]);
  return Object.fromEntries(tempA);
}

console.log(switchValue([{ name: "David", age: 20 }]));

//Excersise 5
//Create a function to ﬁnd a factorial number using recursion
function factorial(num) {
  if (num <= 1) {
    return num;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));
