const count = document.querySelector('.count');

function increment() {
    updatedNumber(false);
}

function decrement() {
    updatedNumber(true);
}

function reset() {
    count.innerText = 0;
}

function updatedNumber(negative) {
    const countTextToNum = parseInt(count.innerText);
    if (negative) {
        const decrement = countTextToNum - 1;
        if (decrement >= 0) {
            count.innerText = decrement;
        }
        else {
            alert('Sorry, negative number not count')
        }
    }
    else {
        const increment = countTextToNum + 1;
        count.innerText = increment;
    }
}