// arrow function with epression

const arrow1 = () => "Hello Mohit...";
console.log(arrow1);


// arrow function 

const arrow2 = (a,b) => {
    return a+b;
};

console.log(arrow2(2,3));

// CallBack Function 


function Mohit (name , callback){
    console.log('Mohit !');
    callback();
}
function callback() {
    console.log("hello");
}

console.log(Mohit('2',callback));

