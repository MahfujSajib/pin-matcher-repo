function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        // console.log('got 3 digit and calling again')
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // console.log('got the value', pin)

}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed').value;
    const verified = document.getElementById('notify-success');
    const failed = document.getElementById('notify-failed');
    if (pin == typedNumbers) {

        verified.style.display = 'block';
        failed.style.display = 'none';
    }
    else {

        failed.style.display = 'block';
        verified.style.display = 'none';
    }
}