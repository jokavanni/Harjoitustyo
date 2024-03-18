const button2 = document.getElementById('planbutton')
const input_datetime = document.getElementById('datetime')
const input_exercise = document.getElementById('exercise')
const input_sets = document.getElementById('sets')
const input_reps = document.getElementById('reps')
const input_weight = document.getElementById('weight')
const output_training1 = document.getElementById('training1')
const output_training2 = document.getElementById('training2')
const output_training3 = document.getElementById('training3')
const output_training4 = document.getElementById('training4')
const output_training5 = document.getElementById('training5')

button2.addEventListener('click', () => {
    output_training1.innerHTML = "Datetime: " + input_datetime.value
    output_training2.innerHTML = "Exercise: " + input_exercise.value
    output_training3.innerHTML = "Sets: " + input_sets.value
    output_training4.innerHTML = "Reps: " + input_reps.value
    output_training5.innerHTML = "Weight: " + input_weight.value
})