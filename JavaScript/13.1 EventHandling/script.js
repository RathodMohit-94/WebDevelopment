// function clicked(){
//     alert('Box-1 Clicked...');
    
// }

// function overed() {
//     setTimeout(() => {
//         alert('Box-2 is Hovred for 5 second...')
//     }, 5000);
// }

// function keyisup(){
//     console.log('key is up');
    
// }

// function keyisdown(){
//     console.log('key is down');
    
// }

// function keyispress(){
//     console.log('key is press');
    
// }


// box1
const box1 = document.getElementById('box-1')
box1.addEventListener('click',() => {
    console.log('box1 Clicked...');
    
})

const container = document.getElementById('container');
container.addEventListener('click',() => {
    console.log('container Clicked...');
    
},true)


// box2
const box2 = document.getElementById('box-2');
box2.addEventListener('mouseover',() => {
    console.log('Mouse Over...');
    
})


// box3
const  box3 = document.getElementById('box-3');
box3.addEventListener('mousemove' , (e) => {
    console.log('Mouse Pointer',e.clientX ,e.clientY);
})


// box4
const box4 = document.getElementById('box-4');

box4.addEventListener('click',(f) => {
    console.log('Key',f);
})

// imput

const input1 = document.getElementById('input1');
input1.addEventListener('keypress',() => {
    console.log('Key Down Pressed');
})
input1.addEventListener('keydown',() => {
    console.log('Key Down Pressed');
})
// input1.addEventListener('focus',(f) => {
//     console.log('Key',f);
// })