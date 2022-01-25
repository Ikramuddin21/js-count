const count = document.querySelector('.count');

const increment = () => updatedNumber(false);

const decrement = () => updatedNumber(true);

const reset = () => {
    displayColor('gray')
    count.innerText = 0;
}
const updatedNumber = negative => {
    const countTextToNum = parseInt(count.innerText);
    if (negative) {
        const decrement = countTextToNum - 1;
        if (decrement < 0) {
            displayColor('red');
        }
        else if ( decrement === 0) {
            displayColor('gray');
        }
        else {
            displayColor('green');
            }
        count.innerText = decrement;
    }
    else {
        const increment = countTextToNum + 1;
        if (increment > 0) {
            displayColor('tomato');
        }
        else if (increment === 0) {
            displayColor('gray');
        }
        count.innerText = increment;
    }
}
const displayColor = color => count.style.color = color;