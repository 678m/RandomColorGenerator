window.onload = function() {
   addColor();
}

for(let i = 0; i < 9; i++) {
   const box = document.createElement('div');
   box.classList.add('box');
   document.querySelector('.container').appendChild(box);
}
 
const Btn = document.querySelector('.btn');
const boxes = document.querySelectorAll('.box');

function HexColors(){
   let chars = '0123456789ABCDEF';
   let colorLength = 6;
   let color = '';
   for(let i = 0; i < colorLength; i++){
      let randomClor = (Math.floor(Math.random() * chars.length));
      color += chars.substring(randomClor, randomClor + 1);
   }
return '#' + color;
}

function addColor(){
   boxes.forEach(box => {
      let newColor = HexColors();
      box.style.backgroundColor = newColor;
      box.innerHTML = newColor;
   });
}
