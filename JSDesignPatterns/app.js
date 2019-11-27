//Singleton

// let projector = (function() {
//     let projectorInstance;

//     function projectorCreate(){
//         function project(){
//             console.log("Projecting");
//             this.projecting = true;
//         }

//         function stopProjecting(){
//             console.log("Projector Off")
//             this.projecting = false;
//         }

//         return {
//             project: project,
//             stopProjecting: stopProjecting,
//             projecting: false
//         }
//     }

//     return {
//         getInstance: function(){
//             if(!projectorInstance){
//                 projectorInstance = projectorCreate();
//             }
//             return projectorInstance;
//         }
//     }

// })();

// let myProjector1 = projector.getInstance();
// let myProjector2 = projector.getInstance();
// myProjector1.project();
// console.log(myProjector2.projecting)

//Modular Pattern
// let patient = (function(){
//     let name = "Nathan Kloer";
//     let disease = "Dead";

//     let showPatientData = () => {
//         alert(name + " is " + disease)
//     }

//     return {
//         executeShowData(){
//             showPatientData();
//         }
//     }
// })();

// let newPatient = patient.executeShowData();

//prototype

// let car = function(){
//     this.make = "Masarati";
//     this.interior = "Black Leather";
//     this.exterior = "Red";
//     this.details = "Badass";
// }

// car.prototype.owner = "Kaden(One Day)";

// let myCar = new car();
// let yourCar = new car();

// console.log(myCar.owner);
// console.log(yourCar.owner);

// myCar.owner = "Bank";
// console.log(myCar.owner);
// console.log(yourCar.owner);

//Reveeal Prototype Pattern

// let house = function(){
//     this.sqrFeet = 50000;
//     this.pool = "Lazy River Pool";
//     this.garage = 15;
// }

// house.prototype = (function(){
//     let basement = "Wine Cellar"
//     let gatePass = "Masarati"
//     function getGatePass(){
//         return gatePass;
//     }
//     function changePass(newPass){
//         gatePass = newPass
//         return gatePass;
//     }
//     function getBasement(){
//         return basement;
//     }

//     return {
//         getGatePass,
//         getBasement,
//         changePass
//     }

// })();

// let nathansHouse = new house;
// console.log(nathansHouse);

// console.log(nathansHouse.getGatePass())
// console.log(nathansHouse.changePass("You don't have that car"))
// console.log(nathansHouse.getBasement())

//Currying

// function multiply(a){
//     a += 3;
//     return function(b){
//         b += 2;
//         return function(c){
//             c += 6;
//             return a * b * c
//         }
//     }
// }



// let myFunc = multiply(2)(4);
// console.log(myFunc(4))
// console.log(multiply(2)(3)(4));

//switch case
function amountSwitch(cash){
    let cashAmount = cash;

    switch(cashAmount){
        case 100:
            alert("That's Awesome");
            break;
        case 200:
            alert("that's double awesome")
            break;
        default:
            alert("Are you even trying?")
    }
}

amountSwitch(100);
amountSwitch(200);
amountSwitch(0);