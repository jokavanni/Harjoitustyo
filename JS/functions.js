const button = document.querySelector('#maxbutton')
const input_maxweight = document.querySelector('#maxweight').value
const input_maxreps = document.querySelector('#maxreps').value
const output = document.querySelector('#onerepmax')

button.addEventListener('click', () => {
    const onerepmax = maxweight.value / (1.0278 - (0.0278 * maxreps.value)) 
    output.innerHTML = onerepmax.toFixed(2) + "kg"
}) 
