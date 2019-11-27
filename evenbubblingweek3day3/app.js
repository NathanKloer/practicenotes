//object destructuring 

// let myObj = {
//     val: 20,
//     val2: 30
// };

// let { val, val2 } = myObj;

// console.log(val);
// console.log(val2);

//array destructuring

// let myArr = [1,2,3,4,5]

// let [ a, b, c, d, e ] = myArr;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// function returnObject(name, occupation) {
//     return {
//         name,
//         occupation
//     }
// }

// console.log(returnObject("Kaden" , "Astronaut"));

// function callbackFunc(myCallback) {
//     console.log("CallbackFunc triggered");
//     myCallback();
// }

// callbackFunc(() => {
//     console.log("this is my callback!");
// })

// let a = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//         }, 2000)
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// setTimeout(() => {
//     console.log(4);
// }, 1000); 

// try{
//     console.log(aioefolaefri);
//     throw new Error("this ain't workin'")
// }
// catch(e){
//     console.dir(e);
// }
// finally{
//     alert('sorry there was an error');
// }

// async function myFunc(){
//     return "this is a promise coming from a function";
// }
// myFunc().then((data) =>{
// console.log(data);
// });

async function myAsyncFunction(){
    let promise = new Promise((res, rej) => {
        setTimeout(() => {res("done")}, 1000)
    });

    let stuff = await promise;

    console.log(stuff)
}

myAsyncFunction();