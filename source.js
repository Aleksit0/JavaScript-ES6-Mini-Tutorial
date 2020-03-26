// JAVASCRIPT SOURCE CODE

// Podesavanje JS u html
// <script src = "js fajla"> </script>

// VARIJABLE
// var, let, const
let rstring = "This is a string!";
const num = 5;

// DATA TYPES
// String, Number, Boolean, null, undefined, Symbol
const name = "John";
const rnum = 100;
const rating = 5.5;
const bool = true; // malim slovom
const x = null; // prazna varijabla
const y = undefined; // nedefinisana varijabla

// Concatination
console.log('Hi my name is ' + name + '.');

//Template String
const temp = `Hi my name is ${name}`;

// STRING
const greeting = 'Hello World!';                                
//Method je sa ()
//Property je BEZ ()

// ARRAYS
const numbers = new Array(1, 2, 3); // ovo je Construktor
    // array je zero-based
const fruits = ['apples', 'oranges', 'bananas'];
console.log(fruits[1]); // prvi element 
fruits[3] = 'watermelons';
fruits.push('grapes'); // dodaje value na kraj arraya
fruits.unshift('mangos'); // dodaje value na pocetak
fruits.pop(); // uklanja element arraya

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

const { firstName, lastName, adress: { city } } = person; // destructuring
console.log(firstName);

person.email = 'alex@gmail.com'; // dodavanje elementa u array
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

//JSON
//JSON je data format(u njemu nema ''!)
const todoJSON = JSON.stringify(todos); //pravi JSON string
console.log(todoJSON); 

// LOOPS

// FOR LOOP
for (let i = 0; i < 10; i++) { // moraju biti 3 uslova
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
// U to spadaju forEach, map, filter
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
// == se koristi za isti value varijable
// === se koristi za isti data type
// || se koristi kao ili(or)
// && se koristi kao i (and)
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

// Pravimo object
const person1 = new Person('Mike', 'McHam', '1-2-1990'); // new = constructor
console.log(person.ime);
console.log(person1.getFullName);

//  Class
class Person {
    constructor(ime, prezime, dr) {
        this.ime = ime;
        this.prezime = prezime;
        this.dr = new Date(dr);
    }
}