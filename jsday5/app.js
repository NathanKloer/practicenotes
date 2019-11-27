(function () {
//     //     var person = {
//     //         firstName: Nathan,
//     //         lastName: Kloer,
//     //         getFullName: function() {
//     //             return this.firstName + this.lastName;
//     //         }
//     //     }

//     //chair

//     var chair = {
//         cushion: true,
//         numlegs: 4,
//         getChairStatus: function() {
//             return this.cushion + this.numlegs;
//         }
//     }

//     console.log(chair);

//     //animal

//     function animal(name, numlegs, tail) {
//         this.name = name,
//         this.numlegs = numlegs,
//         this.tail = tail
//     }

//     var Cheetah = new animal("Cheetah", 4, true)
//     console.log(Cheetah)

//     //table

//     var table = Object.create(null, {
//         height: {
//             value: "3ft",
//             writable: false
//         },
//         width: {
//             value: "8ft",
//             enumerable: true
//         }
//     });
//     console.log(table);
    // console.log(person)

    // person.age = 100
    // console.log(person.age)
    // console.log(person)

    // function person(first, last, occupation, age){
    //     this.first = first;
    //     this.last = last;
    //     this.occupation = occupation;
    //     this.age = age;
    //     this.getFullName = function() {
    //         return this.firstName + this.lastName;
    //     }
    // }

    // var Frank = new person("Frank", "Gilkes", "Front End Dev", 102)
    // var Ryan = new person("Ryan", "Tennyson", "Dev", 16)
    // var Winter = new person("Cassia", "Winterhaven", "Dev Lead", 65)

    // console.log(Frank);
    // // Frank.introduction()
    // console.log(Ryan);
    // console.log(Winter);

    // person.prototype.introduction = function(){
    //     console.log("This is my friend " + this.first);
    // }

    // Frank.introduction();
    // Ryan.introduction();
    // Winter.introduction();

    // String.prototype.reverse = function(){
    //     alert(this)
    // }

    // var name = 'Kayden';
    // name.reverse()

    // var car = Object.create(null, {
    //     name: {
    //         value: "Tesla",
    //         writable: false,
    //         enumerable: true,
    //         configurable: true
    //     },
    //     engine: {
    //         value: "electric",
    //         enumerable: false,
    //     },
    //     price: {
    //         value: "100 Thousand"
    //     },
    // });

    // console.log(car)
    // car.name = "Lexus";
    // console.log(car.name)

    function computer(ram, graphics, ssd, color) {
        Object.defineProperties(this, {
            ram: {
                value: ram,0
                ``
            }
        })
    }

    function computer(ram, graphics, ssd, color) {
        Object.defineProperties(this, {
            ram: {
                value: ram,
                writable: false
            },
            graphics: {
                value: graphics
            },
            ssd: {
                value: ssd
            },
            color: {
                value: color
            }
        })
    }
    var asus = new computer ("32 gbs", "1080 Ti", "1TB", "RGB")
    asus.ram = "16 gbs";
    console.log(asus);

    // var house = {
    //     length: 100,
    //     width: 200,
    // }

    // Object.defineProperties(house, {
    //     length: {
    //         writable: false,
    //         enumerable: false
    //     }
    // })
    // house.length = 1234;
    // console.log(house.length)
    // console.log(house)
})();