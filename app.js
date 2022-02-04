let preload = document.querySelector('.preload');
window.addEventListener('load', () => {
    preload.classList.add('preload-finish');
})

let RandomNumber = document.getElementById('para');
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    let randomValue =  Math.floor(Math.random() * 999999);
    RandomNumber.innerHTML = randomValue;
})
