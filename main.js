import { letters } from './components/controller/renderLetters.component.js'

import { currentValue } from './components/controller/generateCurrentValue.component.js';

import { setReviewDate } from './components/controller/setReviewDate.component.js'; 


// let s = ''
// document.querySelectorAll('[id]').forEach(el => {
//   let {id} = el
//   let name = id.replace(/-(.)/g, (_, c) => c.toUpperCase())
//   s += `const ${name} = document.getElementById('${id}')\n`
// })
// console.log(s)

console.log(currentValue);

setReviewDate(currentValue);

console.log(currentValue);



