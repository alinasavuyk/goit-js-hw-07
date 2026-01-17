const inputElement=document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
inputElement.addEventListener("input", (event) => {
   if(event.currentTarget.value.trim() === ''){
return output.textContent = `Anonymous`
   }
  output.textContent = event.currentTarget.value;
});