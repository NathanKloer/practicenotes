(function () {

    //truthy falsy

    // var x;

    // if(x){
    //     alert("True")
    // } else {
    //     alert("False");
    // }

    // if({}){
    //     alert("True");
    // }else{
    //     alert("False");
    // }

    // if([]){
    //     alert("True");
    // }else{
    //     alert("False");
    // }

    // var array = [1,2,3]
    // if(array[3]){
    //     alert("True");
    // }else{
    //     alert("False");
    // }

    // varmyObj = {
    //     thing: "something"
    // };
    // if(varmyObj.thing){
    //     alert("true");
    // }else{
    //     alert("false");
    // }

    //evaluated as false, even though an object that exists
    // if(null){
    //     alert("True");
    // }else{
    //     alert("False");
    // }


    //evaluated as false, even though an object that exists
    // if(undefined){
    //     alert("True");
    // }else{
    //     alert("False");
    // }

    //order below, 5done, 4,2,1,3

    // setTimeout(function() {
    //     alert("timeout1 done")
    // }, 3000);
    // setTimeout(function() {
    //     alert("timeout2 done")
    // }, 1000);
    // setTimeout(function() {
    //     alert("timeout3 done")
    // }, 5000);
    // setTimeout(function() {
    //     alert("timeout4 done")
    // }, 0);

    // alert("5done");

    //Promises

    // let myPromise = new Promise(function(resolve, reject) {
    //     if (true) {
    //         resolve();
    //     } else {
    //         reject();
    //     }

    // }).then(function () {
    //     alert("success");
    // }).catch(function() {
    //     alert("failed");
    // }).finally(function(){
    //     alert("Done");
    // });

    // setTimeout(function() {
    //     alert("timeout1 Done")
    // },3000);

    // setTimeout(function() {
    //     alert("timeout2 Done")
    // }, 1000);

    // alert("3done");

    // try{
    //     throw new Error("Our Custom Error")
    // }catch{
    //     console.log("There was an error in your code");
    // }

    //http://es6-features.org/#Constants
    //Promise Usage, Array Matching, String Interpoliuation, Blockscoped Variables


    //let
    // for(let i = 0;i<5;i++){
    //     setTimeout(function(){
    //         console.log(i)
    //     }, 1000);
    // }

    //const
    // const name = "Kaden";

    // const myObj = {
    //     name: "Nathan",
    //     age: 100
    // }
    // myObj.name = "Ryan";
    // myObj.occ = "dev"
    // delete myObj.age;
    // console.log(myObj)

    // myObj = {};

    //Default Params

    // function myFunc(x=10, y=11) {
    //     return x+y;
    // }

    // alert(myFunc(myFunc(), myFunc()));

    //rest params
    // function manyParams(x, ...params){
    //     console.log(x);
    //     console.log(params);
    //     console.log(...params);
    // }

    // manyParams(1,2,3,4,5,6,7,8,9)

    // spread operator
    // let arr1=[1,2,3,4];
    // let arr2=[1, ...arr1];
    // console.log(arr2);

    // function myFunc(a,b,c,d){
    //     return a+b+c+d;
    // }
    // console.log(myFunc(...arr1));

    //string interpolation
    // let firstName = "Nathan";
    // let age = 100;

    // alert(`This is ${firstName} \n and he is ${age} years old`)

    //mul function

    // function myFunc(a){
    //     return function(b){
    //         return function(c){
    //             return a+b+c;
    //         }
    //     }
    // }
    // console.log(myFunc(1)(2)(3));

    // function Animal(numLegs, tail){
    //     this.numLegs = numLegs;
    //     this.tail = tail;
    // }
    // function Dog(bark, numLegs, tail){
    //     Animal.call(this, numLegs, tail)
    //     this.bark = bark;
    // }

    // console.log(new Dog("woof", 4, 1));

    //apply
    // let arr = [1,2];
    // let arr2= [3,4];
    // arr.push.apply(arr, arr2);
    // console.log(arr);
    // console.log(arr.length)
    // console.log(arr2);

    function cars() {
        this.name = "my car"
    }

    function volvo() {
        cars.call(this)
    }

    volvo.prototype = Object.create(cars.prototype);
    const newCar= new volvo();

    console.log(newCar.name)

    // var carType = new car2 ("Honda");
    // console.log(carType);

})();