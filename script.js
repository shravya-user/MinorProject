// Clears the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Appends clicked value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Evaluates the result of the expression on the display
function calculateResult() {
    let input = document.getElementById("display").value;
    try {
        // Handling exponentiation notation
        if (input.includes('**')) {
            input = input.replace('**', '^');
        }
        let result = eval(input); // Use eval() to evaluate basic expressions
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

// Calculates the square of the entered number
function square() {
    let input = document.getElementById("display").value;
    let number = parseFloat(input);
    if (!isNaN(number)) {
        document.getElementById("display").value = number * number;
    } else {
        document.getElementById("display").value = 'Error';
    }
}

// Calculates the square root of the entered number
function squareRoot() {
    let input = document.getElementById("display").value;
    let number = parseFloat(input);
    if (!isNaN(number)) {
        document.getElementById("display").value = Math.sqrt(number);
    } else {
        document.getElementById("display").value = 'Error';
    }
}
