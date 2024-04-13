/* var example = 5;
function printNumber() {
  var test = 10;
  console.log(example);
  console.log(test);
}
printNumber();
console.log(example);
console.log(test);
 */

/* function scopeExample() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  if (true) {
    let a = 10;
    console.log(a);
    console.log(i);
  } else {
    let b = 20;
    console.log(b);
    console.log(i);
  }
  {
    let c = 30;
    console.log(c);
    console.log(i);
  }
}
scopeExample();
 */

/* (arg1) => {
  10, 2;
};

(arg1 = 10) => {
  console.log(arg1);
};

() => {
  console.log(20);
};
(arg1, arg2) => {
  console.log(`This is arg1: ${arg1}`);
  console.log(`This is arg2: ${arg2}`);
};
(arg1, arg2) => console.log(`This is arg1: ${arg1}`);
(num1, num2) => {
  return num1 + num2;
};
(num1, num2) => num1 + num2;
(numArray) =>
  numArray
    .filter((n) => n > 5)
    .map((n) => n - 1)
    .every((n) => n < 10);
(num1, num2) => ({ prop1: num1, prop2: num2 });
 */

/* function formalGreeting() {
  console.log("How are you?");
}

function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}
greet("casual", formalGreeting, casualGreeting);
 */

/* const arr1 = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2);
 */

/* const arr1 = [1, 2, 3];
const arr2 = arr1.map(function (item) {
  return item * 2;
});
console.log(arr2); */

/* const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
  let age = 2018 - birthYear[i];
  ages.push(age);
}
console.log(ages);
 */

/* const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map((year) => 2018 - year);
console.log(ages); */

/* const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];
const fullAge = persons.filter((person) => person.age >= 18);
console.log(fullAge);
 */

/* const example = "pretty";
console.log(`Template literals are ${example} useful!!!`);
function javascriptOrCPlusPlus() {
  return "JavaScript";
}
const outputLiteral = `We are learning about ${`Professional ${javascriptOrCPlusPlus()}`}`;
 */

/* function tagFunction(strings, numExp, fruitExp) {
  const str0 = strings[0];
  const str1 = strings[1];
  const quantity = numExp < 10 ? "very few" : "a lot";
  const str2 = strings[2];
  return str0 + quantity + str1 + fruitExp + str2;
}
const fruit = "apple",
  num = 8;
const output = tagFunction`We have ${num} of ${fruit}. Exciting!`;
console.log(output); */

/* function getPersonES5(name, age) {
  return {
    name: name,
    age: age,
  };
}
function getPersonES6(name, age) {
  return {
    name,
    age,
  };
}
console.log(getPersonES5("John", 30));
console.log(getPersonES6("Mike", 25));
 */

/* const varName = "firstName";
const person = {
  [varName]: "John",
  lastname: "Smith",
};
console.log(person.firstName);
 */

/* let names = ["John", "Michael"];
let [name1, name2] = names;
console.log(name1);
console.log(name2);
 */

/* function fn(num1, num2, ...args) {
  console.log(num1);
  console.log(num2);
  console.log(args);
}
fn(1, 2, 3, 4, 5, 6);
 */

/* function fn2(...[n1, n2, n3]) {
  console.log(n1, n2, n3);
}
fn2(1, 2);

const [n1, n2, n3, ...remaining] = [1, 2, 3, 4, 5, 6];
console.log(n1);
console.log(n2);
console.log(n3);
console.log(remaining); */

/* const obj = { firstName: "Bob", lastName: "Smith" };
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName); */
