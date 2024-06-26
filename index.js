//Module 3 Fundamentals Q1
"" + 1 + 0; // my answer: "10", console.log(): "10"
"" - 1 + 0; // my answer: -1, console.log(): -1
true + false; // my answer: 1, console.log(): 1
!true; // my answer: false, console.log(): false
6 / "3"; // my answer: 2, console.log(): 2
"2" * "3"; // my answer: 6, console.log(): 6
4 + 5 + "px"; // my answer: "9px", console.log(): "9px"
"$" + 4 + 5; // my answer: "$45", console.log(): "$45"
"4" - 2; // my answer: 2, console.log(): 2
"4px" - 2; // my answer: NaN, console.log(): NaN
" -9 " + 5; // my answer: "-9 5", console.log(): "-9 5"
" -9 " - 5; // my answer: -14, console.log(): -14
null + 1; // my answer: 1, console.log(): 1
undefined + 1; // my answer: NaN, console.log(): NaN
undefined == null; // my answer: true, console.log(): true
undefined === null; // my answer: false, console.log(): false
" \t \n" - 2; // my answer: -2, console.log(): -2

//Module 3 Fundamentals Q2
let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four; //This is wrong. Value = "34". This is a string concatenation, convert variable to number for the right result.
let multiplication = three * four; // Value  = 12
let division = three / four; // Value = 0.75
let subtraction = three - four; // Value = -1
let lessThan1 = three < four; // Value = True
let lessThan2 = thirty < four; // This is wrong. Value = True. Strings are compared lexicographically, convert variable to number for the right result.

//Module 3 Fundamentals Q3
if (0) console.log("#1 zero is true"); // No print. Condition is false, 0 = false
if ("0") console.log("#2 zero is true"); // Print. Condition is true, not false
if (null) console.log("null is true"); // No print. Condition is false, js classify null as false in an if condition
if (-1) console.log("negative is true"); // Print. Condition is true, any number outside of 0 = true
if (1) console.log("positive is true"); // Print. Condition is true, any number outside of 0 = true

//Module 3 Fundamentals Q4
let a = 6,
  b = 6;
let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

// += concatinates the number and string
result = a + b < 10 ? result + "less than 10" : result + "greater than 10";
console.log(result);

//Module 3 Fundamentals Q5
// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }
const getGreeting = function (name) {
  return "Hello " + name + "!";
};

// const getGreeting = (name) => {
//    return 'Hello ' + name + '!';
// };

//Module 3 Fundamentals Q6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Chan",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  //   getCatchPhrase(person) {
  //     if (person.numFingers === 6) {
  //       return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";
  //     }
  //     return "Nice to meet you.";
  //   },
  getCatchPhrase: (person) => {
    if (person.numFingers === 6) {
      return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";
    }
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

//Module 3 Fundamentals Q7
const basketballGame = {
  score: 0,
  numOfFouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " +
        this.score +
        "Number of fouls is " +
        this.numOfFouls
    );
    return this;
  },
  fullTime() {
    console.log(
      "Fulltime score is " +
        this.score +
        "Number of fouls is " +
        this.numOfFouls
    );
    return this;
  },
  fouls() {
    this.numOfFouls++;
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .fouls()
  .threePointer()
  .halfTime()
  .fullTime();

//Module 3 Fundamentals Q8
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const singapore = {
  name: "singapore",
  population: 5_121_000,
  state: "SG",
  founded: "09 August 1960",
  timezone: "GMT+8",
};

printObject(sydney);
printObject(singapore);

function printObject(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      console.log("key:" + key + ",value:" + element);
    }
  }
}

//Module 3 Fundamentals Q9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
// let moreSports = teamSports;
// moreSports.push("soccer");
// moreSports.unshift("basketball");
// let dog2 = dog1;
// dog2 = "pompom";
// let cat2 = cat1;
// cat2.name = "yuzu"
// console.log(teamSports);
// console.log(dog1);
// console.log(cat1);
// Changed. Assigned object with another object is passing a reference to the original object
let moreSports = [...teamSports];
let dog2 = { ...dog1 };
let cat2 = { ...cat1 };
moreSports.push("soccer");
moreSports.unshift("basketball");
dog2 = "pompom";
cat2.name = "yuzu";
console.log(teamSports);
console.log(dog1);
console.log(cat1);

//Module 3 Fundamentals Q10
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => {
    if (age < 18) {
      return false;
    } else return true;
  };
}

let mike = new Person("mike", "9");
let sally = new Person("sally", "20");

printObject(mike);
printObject(sally);

function PersonClass(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => {
    if (age < 18) {
      return false;
    } else return true;
  };
}

let jessica = new PersonClass("jessica", "10");
printObject(jessica);
console.log(jessica.canDrive());

//Module 3 Intermediate Q1
function ucFirstLetters(string) {
  let result = "";
  let stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    result += stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    if (i != stringArray.length - 1) {
      result += " ";
    }
  }
  return result;
}
console.log(ucFirstLetters("los angeles")); //Los Angeles

//Module 3 Intermediate Q2
function truncate(str, max) {
  // if (str.length > max) {
  //     return str.substring(0, max) + "...";
  // }
  // else return str;
  return str.length > max ? str.substring(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

//Module 3 Intermediate Q3
const animals = ["Tiger", "Giraffe"];
animals.push("Dog", "Cat");
animals.unshift("Parrot", "Dove");
animals.sort();
function replaceMiddleAnimal(newValue) {
  let middleIndex = Math.ceil(animals.length / 2);
  animals[middleIndex] = newValue;
}
function findMatchingAnimals(beginsWith) {
  let result = [];
  animals.forEach((animal) => {
    let animalName = animal.toUpperCase();
    if (animalName.length >= beginsWith.length) {
      if (
        animalName.substring(0, beginsWith.length) === beginsWith.toUpperCase()
      ) {
        result.push(animal);
      }
    }
  });
  return result;
}

console.log(animals);
replaceMiddleAnimal("zebra");
console.log(animals);
console.log(findMatchingAnimals("Ti"));

//Module 3 Intermediate Q4
function camelCase(cssProp) {
  let result = "";
  let stringArray = cssProp.split("-");
  // for loop #1
  for (let i = 0; i < stringArray.length; i++) {
    // if (i === 0) {
    //   result += stringArray[i];
    // } else {
    //   result += stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    // }
    result =
      i === 0
        ? result + stringArray[i]
        : result +
          stringArray[i].charAt(0).toUpperCase() +
          stringArray[i].slice(1);
  }
  // for loop #2
  // let isFirstWord = true;
  // stringArray.forEach((word) => {
  //     if (isFirstWord) {
  //         result += word;
  //         isFirstWord = false
  //     }
  //     else {
  //         result += word.charAt(0).toUpperCase() + word.slice(1);
  //     }
  // })
  return result;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

//Module 3 Intermediate Q5
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working? toFixed() returns a string, so this is a string concatenation

function currencyAddition(float1, float2) {
  return parseFloat(float1) + parseFloat(float2);
}

console.log(currencyAddition(twentyCents, tenCents));

function currencyOperation(float1, float2, operation, numDecimals) {
  switch (operation) {
    case "+":
      return (parseFloat(float1) + parseFloat(float2)).toFixed(numDecimals);
    case "-":
      return (parseFloat(float1) - parseFloat(float2)).toFixed(numDecimals);
    case "/":
      return (parseFloat(float1) / parseFloat(float2)).toFixed(numDecimals);
    case "*":
      return (parseFloat(float1) * parseFloat(float2)).toFixed(numDecimals);

    default:
      console.log("invalid operation");
      break;
  }
}
console.log(currencyOperation(twentyCents, tenCents, "+", 2));
console.log(currencyOperation(twentyCents, tenCents, "-", 4));
console.log(currencyOperation(twentyCents, tenCents, "*", 6));
console.log(currencyOperation(twentyCents, tenCents, "/", 10));

//Module 3 Intermediate Q6
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

//Module 3 Intermediate Q7
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  return books.find((element) => element.id === bookId).title;
}

console.log(getBookTitle(4));

function getOldBooks() {
  return books.filter((element) => element.year < 1950);
}

console.log(getOldBooks());

function addGenre() {
  books.map((element) => {
    element.genre = "classic";
  });
}
addGenre();
console.log(books);

//Module 3 Intermediate Q8
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["Dennis", "88888888"],
  ["Elle", "99999999"],
  ["Fisher", "00000000"],
]);

console.log(phoneBookDEF.get("Dennis"));

phoneBookABC.set("Caroline", "0459999888");
console.log(phoneBookABC.get("Caroline"));

function printPhoneBook(contacts) {
  console.log([...contacts.entries()]);
}
printPhoneBook(phoneBookABC);

let combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
printPhoneBook(combinedPhoneBook);

//Module 3 Intermediate Q9
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (const [name, salary] of Object.entries(salaries)) {
    sum += salary;
  }
  return sum;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let highestSalary = 0;
  let highestEarner = "";
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      highestEarner = name;
    }
  }
  return highestEarner;
}

console.log(topEarner(salaries));

//Module 3 Intermediate Q10
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
console.log(
  today.getHours() * 60 +
    today.getMinutes() +
    " minutes have passed so far today"
);
console.log(
  today.getHours() * 60 * 60 +
    today.getMinutes() * 60 +
    today.getSeconds() +
    " seconds have passed so far today"
);

const myBirthdayDate = new Date();
myBirthdayDate.setMonth(1);
myBirthdayDate.setDate(25);
let Difference_In_Time = today.getTime() - myBirthdayDate.getTime();
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
let months = Math.floor(Difference_In_Days / 30);
let day = Difference_In_Days % 30;
console.log(
  "I am %s years, %s months and %s days old",
  today.getFullYear() - 1997,
  months,
  day
);

function daysInBetween(date1, date2) {
  let Difference_In_Time = date1.getTime() - date2.getTime();
  return (Difference_In_Days = Math.round(
    Difference_In_Time / (1000 * 3600 * 24)
  ));
}

console.log(daysInBetween(today, myBirthdayDate));

//Module 3 Advanced Q1
function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2
// let counter2 = makeCounter();
// counter2(); // 1. Yes it is independent
let counter3 = makeCounter(5, 2);
counter3();

//Module 3 Advanced Q2
// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); //4th
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); //3rd
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); //2nd
delayMsg("#4: Not delayed at all"); //1st
clearTimeout(setTimeout(delayMsg, 10000, "#5: Delayed by 10s"));

//Module 3 Advanced Q3
function printMe(msg) {
  console.log("printing debounced message", msg);
}
printMe = debounce(printMe, 1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);
setTimeout(function () {
  printMe("hello");
}, 100);
setTimeout(function () {
  printMe("hello");
}, 200);
setTimeout(function () {
  printMe("hello");
}, 300);

function debounce(func, ms) {
  let timer;
  const timeout = ms;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

//Module 3 Advanced Q4
let fibonacciSequence = [];
function printFibonacci() {
  if (fibonacciSequence.length === 0 || fibonacciSequence.length === 1) {
    fibonacciSequence.push(1);
  } else {
    fibonacciSequence.push(
      fibonacciSequence[fibonacciSequence.length - 2] +
        fibonacciSequence[fibonacciSequence.length - 1]
    );
  }
  console.log(fibonacciSequence);
}

// setInterval(printFibonacci, 1000);

function printFibonacciTimeouts(limit) {
  if (fibonacciSequence.length === 0 || fibonacciSequence.length === 1) {
    fibonacciSequence.push(1);
  } else {
    fibonacciSequence.push(
      fibonacciSequence[fibonacciSequence.length - 2] +
        fibonacciSequence[fibonacciSequence.length - 1]
    );
  }
  console.log(fibonacciSequence);
  if (fibonacciSequence.length < limit) {
    setTimeout(function () {
      printFibonacciTimeouts(5);
    }, 1000);
  }
}

// setTimeout(function () {
//   printFibonacciTimeouts(5);
// }, 1000);

//Module 3 Advanced Q5
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
// setTimeout(car.description, 200); //fails. car.description is referring to the function in car. The function itself does not
//contain the attributes of car due to it being a reference, hence it prints undefined.
// setTimeout(function(){car.description()}, 200);
setTimeout(car.description.bind(car), 200);

car = { ...car };
car.year = 2000;

//Module 3 Advanced Q6
function multiply(a, b) {
  console.log(a * b);
}

multiply.prototype.delay = function (ms) {
  return function (a, b) {
    setTimeout(function () {
      console.log(a * b);
    }, ms);
  };
};

multiply = new multiply(5, 5);

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//Module 3 Advanced Q7
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]

Person.prototype.toString = function personToString() {
  return `${this.name}`;
};
const person2 = new Person("Brown James", 37, "female");
const person3 = new Person("Tabby Tom", 40, "male");
console.log("person2: " + person2.toString());

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = "B6";
}

Student.prototype.toString = function studentToString() {
  return `${this.name}`;
};
const student1 = new Student("Brown James", 37, "female");
const student2 = new Student("Tabby Tom", 40, "male");
console.log("student1: " + student1.toString());

//Module 3 Advanced Q8
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
// const myClock = new DigitalClock("my clock:");
// myClock.start();

class PrecisionClock extends DigitalClock {
  constructor(precision = 1) {
    this.precision = precision;
  }
}

class AlarmClock extends DigitalClock {
  constructor(wakeupTime = "07:00") {
    this.wakeupTime = wakeupTime;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    let alarmTime = this.wakeupTime.split(":");
    if (hours === alarmTime[0] && mins === alarmTime[1]) {
      console.log("Wake Up");
      this.stop();
    }
  }
}

//Module 3 Advanced Q9
function randomDelay() {
  // your code
  let delay = (Math.floor(Math.random() * 20) + 1) * 1000;
  return new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      if ((delay / 1000) % 2 === 0) {
        myResolve(delay);
      } else {
        myReject(delay);
      }
    }, delay);
  });
}
randomDelay()
  .then((delay) =>
    console.log("There appears to have been a delay." + delay / 1000)
  )
  .catch((delay) => console.log("There's an error." + delay / 1000));
