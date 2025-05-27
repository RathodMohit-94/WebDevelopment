const array1 = [
    { id: '001', name: 'Neha', sport: 'Table Tennis' },
    { id: '002', name: 'Aryan', sport: 'Basketball' },
    { id: '003', name: 'Priya', sport: 'Cricket' },
    { id: '004', name: 'Kabir', sport: 'Football' },
    { id: '005', name: 'Simran', sport: 'Volleyball' },
    { id: '006', name: 'Aditya', sport: 'Hockey' },
    { id: '007', name: 'Rohan', sport: 'Badminton' },
    { id: '008', name: 'Meera', sport: 'Tennis' },
    { id: '009', name: 'Sanya', sport: 'Basketball' },
    { id: '0010', name: 'Vikram', sport: 'Cricket' }
];


// const filtered = array1.filter((value) => {
//     if(value.id %= 2){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(filtered);

// const moht = array1.map((value) => {
//     console.log(value.name);
// })
// const mohit = array1.map((value) => {
//     console.log(value.sport);
// })


//  direct all name
// const mapp = array1.map((value)=>{
//     return `<li>${value.name}</li>`;
// })

// const div = document.getElementById('container');

// div.innerHTML = `<ul>${mapp.join("")}</ul>`; 


// filtered using map
// const mappp = array1.map((value)=>{
//     if (value.sport=='Cricket') {
//         return `<li>${value.name}</li>`;
//     }
// })

// const divv = document.getElementById('container');

// divv.innerHTML = `<ol>${mappp.join("")}</ol>`;

// using both

const filtermap = array1
.filter((value) => {
    if (value.sport == 'Cricket') {
        return true;
    } else {
        return false;
    }
})
.map((value)=>{
    return `<li>${value.name}</li>`;
})

// console.log(filtermap);

const divv = document.getElementById('container');

divv.innerHTML = `<ol>${filtermap.join("")}</ol>`;