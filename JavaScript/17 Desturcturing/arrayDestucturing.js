// // first example

// const array1 = [2,3,2,1,3,'Mohit',4,5];
// // const [first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth] = array1
// const [first,second,third,...args] = array1

// console.log(second);
// // console.log(sixth);
// // console.log(tenth);
// // console.log(eighth);
// console.log(...args);


// //2nd example normal array

// function getScores() {
//   return [70, 80, 90];
// }

// // console.log(getScores());


// let scores = getScores();

// // console.log(scores);

// let x = scores[0],
//   y = scores[1],
//   z = scores[2];

// console.log({ x, y, z });

//3rd example ES6

// function getScores() {
//   return [70, 80, 90];
// }

// let [x, y, z] = getScores();

// console.log({ x, y, z });

// rest in ES6 

// function Scores() {
//   return [70, 80, 90, 100, 110 ,120];
// }

// let [x, y, z, ...mohit] = Scores();

// console.log({ x, y, z });
// console.log( {...mohit});

// Ternary Exapmle
// let a=10;
// const rohit = a<=10 ? console.log('a is less than 10 or 10')
// : console.log('value is bgrater than 10..');
//  ; 


// assign defualt value to new array elemnt using  es6

// function getItems() {
//   return [10, 20];
// }

// // let items = getItems();
// // let thirdItem = items[2] != undefined ? items[2] : 0;

// // console.log({ thirdItem }); // 0
// // console.log(items);

// // es6 
// let [, , thirdItem = 0] = getItems();

// console.log(thirdItem); // 0

// filling empty array in function

// function getItems() {
//     return null;
// }

// let [a = 10, b = 20] = getItems() || [];

// console.log(a); // 10
// console.log(b); // 20


// Nested Array Desrtucrting

// function getProfile() {
//     return [
//         'John',
//         'Doe',
//         ['Red', 'Green', 'Blue']
//     ];
// }
// let [
//     firstName,
//     lastName,
//     [
//         color1,
//         color2,
//         color3
//     ]
// ] = getProfile();

// console.log(color1, color2, color3); // Red Green Blue



// // Swapping Variables with Array Destruction

// let a = 10, 
//     b = 20;

// [a, b] = [b, a];

// console.log(a); // 20
// console.log(b); // 10

// let x=1,y=2;

// // can use this also

// let temp;

// temp=x;
// x=y;
// y=temp;

// console.log(x,'and',y);

function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}
let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10