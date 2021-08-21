// JAVASCRIPT SOURCE CODE

// AUTHOR: @Aleksit0

// IMPLEMENT JS IN HTML
// <script src = "name.js"> </script>

// VARIABLES
// var, let, const
let rstring = "This is a string!";
const num = 5;

// DATA TYPES
// String, Number, Boolean, null, undefined, Symbol
const name = "John";
const rnum = 100;
const rating = 5.5;
const bool = true; // CASE SENSITIVE
const x = null; // EMPTY
const y = undefined;

// CONCATINATION
console.log('Hi my name is ' + name + '.');

// TEMPLATE STRING
const temp = `Hi my name is ${name}`;

// STRING
const greeting = 'Hello World!';                                
// METHOD = WITH ()
// PROPERTY = WITHOUT ()

// ARRAYS
// ARRAYS ARE ZERO-BASED
const numbers = new Array(1, 2, 3); // CONSTRUCTOR
const fruits = ['apples', 'oranges', 'bananas'];
console.log(fruits[1]); // GET THE FIRST ELEMENT
fruits[3] = 'watermelons';
fruits.push('grapes'); // ADD VALUE TO THE END
fruits.unshift('mangos'); // ADD VALUE TO START
fruits.pop(); // REMOVE ITEM

// OBJECTS
const person = {
    firstName: 'Alex',
    lastName: 'Johnson',
    hobbies: ['music', 'technology'],
    adress: {
        street: '50 Main Street',
        ZIP: 005,
        city: 'Boston'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.adress.city);

const { firstName, lastName, adress: { city } } = person; // DESTRUCTURING
console.log(firstName);

person.email = 'name@gmail.com'; // ADDING ELEMENTS TO OBJECT
console.log(person);

// ARRAYS OF OBJECTS
const todos = [
    {
        id: 1,
        text: 'Izbaciti smece',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Oprati auto',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Popraviti busilicu',
        isCompleted: false,
    }
];

console.log(todos[1].text);

// JSON
const todoJSON = JSON.stringify(todos); // MAKES A JSON STRING
console.log(todoJSON); 

// LOOPS

// FOR LOOP
for (let i = 0; i < 10; i++) { // THERE MUST BE 3 CONDITIONS (EXCEPT YOU CREATED A COUNTER BEFORE)
    console.log(`For loop number: ${ i }`);
}

// WHILE LOOP
let i = 0;
while (i < 10) {
    console.log(`While loop number: ${ i }`);
    i++;
}   

const cars = ['tesla', 'audi', 'bmw', 'mercedes'];
for (let car of cars) {
    console.log(car);
}

// HIGH ORDER ARRAY METHODS
// FOREACH, MAP, FILTER..
const languages = ['Serbian', 'Srpski'];
// FOR EACH
languages.forEach(function(language) {
    console.log(language);
});

// MAP
const mapArr = languages.map(function(language) {
    return language;
});

// FILTER
const filterArr = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(filterArr);

// CONDITIONALS
const randNum = 10;
// == USE TO CHECK SAME VARIABLES
// === USE TO CHECK SAME VARIABLE DATA TYPE
// || = OR
// && = AND
if (randNum == 10) {
    console.log('Yes, randNum is equal to 10');
} else {
    console.log('No, randNum is not equal to 10');
}

// TERNARY OPERATOR
const b = 11;
const color = x > 10 ? 'red' : 'blue';

// SWITCH
switch(color) {
    case 'red':
        console.log('Color is red!');
        break;
    case 'blue':
        console.log('Color is blue!');
        break;
    default:
        console.log('Color is not red or blue!');
        break;
}
// FUNCTIONS
function addNums(num1, num2) {
    return(num1 + num2);
}
console.loog(addNums(5, 4));

// ARROW FUNCTIONS
const add = (num1 + num2) => {
    return num1 + num2;
}
console.log(add(5, 5));

// OOP
function Person(ime, prezime, dr) {
    this.ime = ime;
    this.prezime = prezime;
    this.dr = new Date(dr);
    
    this.getFullName = function() {
        return  `${ime} ${prezime}`;
    }
}

// MAKING A OBJECT
const person1 = new Person('Mike', 'McHam', '1-2-1990'); // new = constructor
console.log(person.ime);
console.log(person1.getFullName);

// CLASS
class Person {
    constructor(ime, prezime, dr) {
        this.ime = ime;
        this.prezime = prezime;
        this.dr = new Date(dr);
    }
}