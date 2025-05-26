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
