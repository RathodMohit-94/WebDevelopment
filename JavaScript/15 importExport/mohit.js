export function sum(a,b,c){
    return a+b+c;
}

function multiply(a,b,c){
    return a*b*c;
}

function subtraction(a,b,c){
    return (a-b-c);
}

export {
    multiply as mul,
    subtraction as sub
}


export default function division(a,b,c) {
    return ((a/b)/c);
}