function sum(a,b){
    sum = a+b;
    console.log(sum);
    
}


const a = 10;
const b =10;

sum(a,b);

// function expression

const addition = function (a,b){
    a++;
    b++;
    sum = a+b;
    console.log(sum);
}

addition(20,20);

// call function in const

function add(a){
    return a+10;
}

let c = 1 ;
const f = add(c)
console.log(f);

// nested function

function power(a,b){

    function pow(a){
        return a*a;
    }

    a = pow(a);
    b = pow(b);

    return a+b;    
}

console.log(power(2,3));

// // var 
// var no1 = 1;
// var no1 = 2;
// console.log(no1);//2

// // let
// let no2 = 1;
// console.log(no2);
// let no2 = 2;
// console.log(no2);

// { // enter new scope, TDZ starts
//     let log = function () {
//         console.log(message); // messagedeclared later
//     };

//     // This is the TDZ and accessing log
//     // would cause a ReferenceError

//     var message= 'Hello'; // TDZ ends if you use let this will not react as global
//     log(); // called outside TDZ
// }
// console.log(message);
