function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body=document.querySelector('body');
const colorSpan = document.querySelector('.color')
const button=document.querySelector('button.change-color');
button.addEventListener('click', handleClick);
function handleClick (){
colorSpan.textContent = getRandomHexColor();
body.style.backgroundColor=colorSpan.textContent;
}