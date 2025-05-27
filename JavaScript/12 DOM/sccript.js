const boxs = document.querySelectorAll('.box');
setTimeout(() => {
    for (let i = 0; i < boxs.length; i++){
    boxs[i].classList.add('rounded');
}
}, 5000);


