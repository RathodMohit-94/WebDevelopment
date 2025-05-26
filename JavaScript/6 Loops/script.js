console.log("For Loop");
// For Loop
let a = 5;
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++){
        console.log(i);
    }  
}

// while loop
console.log("While Loop");

let b = 0;
while(b<=5){
    console.log("Num::",b);
    b++;
}


console.log("Do While Loop");
// Do-while loop

let c = 9;
do {
    console.log("Num::",c); 
} while (c<5);


console.log("Break In Loop");

// break in loop

let d = 0;
while(d<=5){
    console.log("Num::",d);
    d++;
    if(d===4){
        break;
    }
}

console.log("Continue In Loop");

let e = 0;
while(e<=5){
    e++;
    if(e===2){
        continue;
    }
    console.log("Num::",e);
}