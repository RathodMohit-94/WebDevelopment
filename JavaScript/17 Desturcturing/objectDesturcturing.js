
// // define Object
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     curage: 12 //undefined(to change age in destructing)
// };

// // // before ES6 object destruction
// // let firstName = person.firstName;
// // let lastName = person.lastName; 
// // console.log(firstName);
// // console.log(lastName);

// //IN ES6

// let {firstName, lastName, middlename = 'Rathod',curage: age = 23} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(middlename);
// console.log(age);

// // note: the age doesn`t change because the curage is already defined and it cant change untill its undefined..

// // Nested Object

// let employee = {
//     id: 1001,
//     name: {
//         firstName: 'John',
//         lastName: 'Doe'
//     }
// };
// let {
//     id:idd,
//     name: {
//         firstName,
//         lastName
//     }
// } = employee;

// console.log(firstName); // John
// console.log(lastName); // Doe
// console.log(idd);


// // desturcting object without ES6
// let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// display(person);

// with ES6
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);
