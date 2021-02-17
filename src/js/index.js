import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


const spanTxt = document.querySelector('.text');
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
versions of Lorem Ipsum.`

let indexText = 0;
const time = 40;
const addLetter = () => {
spanTxt.textContent += text[indexText];
    indexText++;
    if (indexText === text.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);

