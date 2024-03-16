const button = document.querySelector('button')
const maxweight = document.querySelector('maxweight')
const maxreps = document.querySelector('maxreps')
const output = document.querySelector('output')
button.addEventListener('click', () => {
const onerepmax = maxweight / ( 1.0278 - 0.0278 * maxreps ) 
output.innerHTML = onerepmax.toFixed(2) + "kg"
}) 