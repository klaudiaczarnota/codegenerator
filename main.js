const chars = 'ABCDEFGHIJK0123456789'; //among what characters we wanna choose

const btn = document.querySelector('button'); 
const section = document.querySelector('section'); 

const codesNumber = 1000; //how many codes
const charsNumber = 10; //how long is the code

const codesGenerator = () => {
//loop
for (let i = 0; i < codesNumber; i++) { //startting from 0, executing till 1000
let code = "";
for (let i = 0; i < charsNumber; i++) {
const index = Math.floor(Math.random() * 20)
code += chars[index]; //dodajemy kazdorazowo wylosowany index
}
const div = document.createElement('div');
div.textContent = code;
section.appendChild(div);

}

}

btn.addEventListener('click', codesGenerator)