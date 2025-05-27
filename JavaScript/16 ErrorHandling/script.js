// try {
//     console.log(age);
    
// } catch (e) {
//     console.log(e.name);
//     console.log(e.message);
// }

try {
    const mohit = prompt('Are you Mohit?');
    if (mohit=='yes') {
        throw{
            message:"How r .."
        };
    }
} catch (error) {
    console.log(error.message);
} finally {
    console.log("This will execte everytime...");
}

console.log("Hiiii,Mohit");
