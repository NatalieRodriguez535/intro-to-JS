// VERY EASY 
var numberOne = 6;
var numberTwo = 2;
var outPut = numberOne - numberTwo;
var str = 'The difference between 6 and 2 is' + " " + outPut;
console.log(str);

//EASY
var firstName = "Thomas";
var secondName = "John";
var nameLength = firstName.length - secondName.length;
var str = " The name Thomas is longer than John by  " + nameLength + " characters. ";
console.log(str);

//MEDIUM 
var greeting = prompt(" How are you? ");
if (greeting.toUpperCase() === greeting) {
    console.log(" Shouting ");
} else if (greeting.toLowerCase() === greeting) {
    console.log(" Whispering ");
} else {
    console.log(" Talking Normaly ");
}

//HARD
//add

function add(num1, num2) {

    return num1 + num2;

};

let sumOne = add(1, 2);

console.log(sumOne); // return 3


//subtract
function subtract(num3, num4) {

    return num3 - num4;

};

let sumTwo = subtract(9, 5);

console.log(sumTwo);


//multiply
function multiply(num5, num6) {

    return num5 * num6;

};

let sumThree = multiply(3, 3);

console.log(sumThree);


//divide
function divide(num7, num8) {
    if(typeof num7 !== "number" || typeof num8 !== "number"){
        return "can not be words.";
    }
    if(num8 === 0){
        return "can not divide by zero.";
    }
    return num7 / num8;

};

let sumFour = divide(2, 4);

console.log(sumFour);




//VERY HARD

function add (x,y) {
    return x+y
}

function subtract (x,y) {
    return x-y
}

function divide (x,y) {
    return x/y
}

function multiply (x,y) {
    return x*y
}

var x;
var y;
var operator;

x = parseInt(prompt("Enter your first number"));

operator = prompt("Enter an operator ex: * / + - ");

y = parseInt(prompt("Enter your second number"));

if(operator === "+") {
console.log(add(x,y));
}

else if(operator === "-"){
    console.log(subtract(x,y));
}

else if(operator === "/"){
    console.log(divide(x,y));
}

else if(operator === "*"){
    console.log(multiply(x,y));
}