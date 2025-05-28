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

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set age(value) {
        if (value < 0) throw new Error('Age cannot be negative');
        this._age = value;
    }
    get age() {
        return this._age;
    }
}

const person = new Person('Alice', 30);
console.log(person.name); // "ALICE"
person.age = 25; // Setter works
console.log(person.age); // 25
// person.age = -5; // Error: Age cannot be negative