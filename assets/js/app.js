const calculator = document.querySelector('#calculator')
const keys = calculator.querySelector('#buttons')

keys.addEventListener('click', e => {
    if (e.target.matches('#buttons')) {
        // Do something
    }
})

const key = e.target
const action = key.dataset.action

if (!action ) {
    console.log('number key!')
}

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide' || 
) {
    console.log('operator key!')
    key.classlist.add('is-depressed')
}

if (action === 'decimal') {
    console.log('decimal key!')
}

if (action === 'clear') {
    console.log('clear key!')
}

if (action === 'calculate') {
    console.log('equal key!')
}

if (action === 'percentage') {
    console.log('percent key!')
}

if (action === 'negative') {
    console.log('negative key!')
}


const display = document.querySelector('.display')

keys.addEventListener('click', e => {
    if (e.target.matches('0')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        // ...
    }
})

if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent
    }
}

if (action === 'decimal') {
    if (displayedNum === '.') {
    display.textContent = displayedNum + '.'
}