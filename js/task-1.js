const items=document.querySelectorAll(`.item`)
const totalCategories = items.length;
console.log(`Number of categories: ${totalCategories}`)

const categoriesItem=items.forEach((item)=>{
    const titleCategory = item.querySelector(`h2`).textContent;
    const elementsCount =item.querySelectorAll(`li`).length
console.log(`Category: ${titleCategory}`)
console.log(`Elements: ${elementsCount}`)

}) 
