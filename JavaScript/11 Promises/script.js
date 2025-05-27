const ticket = new Promise(function(resolve , reject) {
    const ifBoarded = true;
    if (ifBoarded) {
        resolve("You have boarded the flight.");
        
    } else {
        reject("You have not boarded the flight.");
    }
 });

 ticket.then((data)=>{
    console.log(data);
 })
 .catch((data) =>{
    console.log(data);
 })