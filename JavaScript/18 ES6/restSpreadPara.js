// rest parameter

function f(a, b, ...args) {
    console.log(args);
    console.log({ a, b });
}

f(1, 2, 3, 4, 5);


// Spread parameter
const odd = [1, 3, 5];
const combined = [...odd, 2, 4, 6];
console.log(combined);


//push method 
let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

// [].push.apply(rivers, moreRivers);
// console.log(rivers);

rivers.push(...moreRivers)
console.log(rivers);

// 1) Constructing array literal
// The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form.See the following example:

    let initialChars = ['A', 'B'];
    let chars = [...initialChars, 'C', 'D'];
    console.log(chars); // ["A", "B", "C", "D"]
 
// 2) Concatenating arrays
// Also, you can use the spread operator to concatenate two or more arrays:

    let numbers = [1, 2];
    let moreNumbers = [3, 4];
    let allNumbers = [...numbers, ...moreNumbers];
    console.log(allNumbers); // [1, 2, 3, 4]
 
// 3) Copying an array
// In addition, you can copy an array instance by using the spread operator:

    let scores = [80, 70, 90];
    let copiedScores = [...scores];
    console.log(copiedScores); // [80, 70, 90]


 
// Note that the spread operator only copies the array itself to the new one, not the elements.This means that the copy is shallow, not deep.

// JavaScript spread operator and strings
// Consider the following example:

    let chars1 = ['A', ...'BC', 'D'];
    console.log(chars1); // ["A", "B", "C", "D"]
