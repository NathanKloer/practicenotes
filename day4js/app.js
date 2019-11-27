//scope
// function myFunc() {
//     var x = "Something";
//     console.log("Inside of function "+ x);
// }
// var x;
// console.log("Outside of function "+ x);
// myFunc();

//typeof
// console.log(typeof 30);
// console.log(typeof "Hello");
// console.log(typeof true);

// var person = {
//     firstName: 'Nathan',
//     lastName: 'Kloer'
// }

// console.log(person.firstName)
// delete person.firstName;
// console.log(person)

//In
// var person = {
//     firstName: 'Nathan',
//     lastName: 'Kloer'
// }
// console.log('firstName' in person);
// console.log(delete person.firstName);
// console.log(person)

//Instanceof
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var Frank = new Person("Frank", "Gilkes")
// console.log(Frank instanceof Person)
// console.log(typeof Frank)

//Hoisting
// dogName("Fido")
// function dogName(name) {
//     console.log("My dog's name is " + name);
// }

// num = 1;
// console.log(num);
// var num;

//this
// var person = {
//     first:'Nathan',
//     last:'Kloer',
//     sayHello:function() {
//         console.log('Hello', this.first, '!');
//     }
// }

// person.sayHello();
// console.log(person.first);

//Event Handling
// document.querySelector('button').onclick = function() {
//     alert("Hello Nathan, Happy Day")
// }

function random(number){
    return Math.floor(Math.random() * (number+1))
}

document.getElementById('ColorChange').onclick = function(){
    var rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndColor;
    console.log(rndColor)
}

//IIFE
// (function(){
//     var x = 10;
//     console.log(x);
//     function myFunc1(){
//         alert("Inside IIFE")
//     }
//     document.getElementById('ColorChange').onclick = myFunc1();
// });

// function myFunc2() {
//     alert('outside iife');
// }

// var i = 0
// for (i; i < 10; i++) {
//     console.log(i);
// }

// i = 0;
// while(i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }

// var i = 1
// for (; i < 26; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }
