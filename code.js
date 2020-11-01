const John = document.getElementById('toJohn');
const Tanya = document.getElementById('toTanya');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

John.onclick = () => {
    slide1.classList.add('slide1');
    slide2.classList.add('from1');
    slide1.classList.remove('from2');
}

Tanya.onclick = () => {
    slide1.classList.remove('slide1');
    slide2.classList.remove('from1');
    slide1.classList.add('from2');
}