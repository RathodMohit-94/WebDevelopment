// // ES6 Syntax in class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hello, I'm ${this.name}!`;
//     }
//     }

// const person = new Person('Alice', 30);
// console.log(person.greet()); // "Hello, I'm Alice!"

//getterr and setter

// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         return this._name.toUpperCase();
//     }
//     set age(value) {
//         if (value < 0) throw new Error('Age cannot be negative');
//         this._age = value;
//     }
//     get age() {
//         return this._age;
//     }
// }

// const person = new Person('Alice', 30);
// console.log(person.name); // "ALICE"
// person.age = 25; // Setter works
// console.log(person.age); // 25
// // person.age = -5; // Error: Age cannot be negative

// // Static and Intance in class
// class Person {
//   static count = 0; // Static property to track number of instances

//   constructor(name) {
//     this.name = name; // Instance property
//     Person.count++; // Increment static counter
//   }

//   greet() {
//     // Instance method
//     return `Hello, I'm ${this.name}!`;
//   }

//   static getCount() {
//     // Static method
//     return `Total people: ${Person.count}`;
//   }
// }

// const john = new Person("John");
// const jane = new Person("Jane");

// console.log(john.greet()); // Output: Hello, I'm John!
// console.log(Person.getCount()); // Output: Total people: 2
// console.log(john.count); // Undefined (instance cannot access static property)
// console.log(Person.greet); // Undefined (class cannot access instance method)

// //instance are called with object name 
// //static called with class name in this person is class so person.count is valid but john.count is unvalid





// class abc {

//     constructor (name,age){
//         this.name = name;
//         this.age = age;
//     }
//     login(){
//         console.log(`${this.name} is login`);
//         return this
//     }
//     logout(){
//         console.log(`${this.name} is Logout.`);
//         return this;
//     }
// }
// class xyz extends abc {
//     delete(user){
//         all = all.filter( u => {
//             return u.name != user.name
//         })
//     }
// }

// let one = new abc('mohit',20);
// let two = new abc('rohit',18);
// let three = new abc('Krishna',9)

// let all  = [one, two, three]

// let delet = new xyz();
// delet.delete(two);

// console.log(all);
// // delete user in class with InHeritance...




class ABC {
    aaa(){
        console.log('aaa');
    }
    bbb(){
        console.log('bbb');
    }
    ccc(){
        console.log('ccc');
    }
}

ABC.prototype.login = ()=>{
    console.log("Login succesfully...")
}

let aa = new ABC();
console.log(aa);

