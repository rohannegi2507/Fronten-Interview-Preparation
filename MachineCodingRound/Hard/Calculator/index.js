function appendToDisplay(chr){
    const inputEle = document.getElementById('display')
    console.log(inputEle)
    inputEle.value +=chr
}


function clearDisplay(){
    const inputEle = document.getElementById('display')
    inputEle.value = ''
}


function calculate(){
    const value = document.getElementById('display')
   console.log(eval(value.value))
}


function eval(expression){
    const tokens = expression.split(' ');

    // Initialize the result to the first number in the expression
    let result = parseFloat(tokens[0]);

    // Iterate over the tokens, starting from the second one
    for (let i = 1; i < tokens.length; i += 2) {
        // Get the operator
        const operator = tokens[i];

        // Get the next number
        const nextNumber = parseFloat(tokens[i + 1]);

        // Perform the operation based on the operator
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                result /= nextNumber;
                break;
            default:
                throw new Error('Invalid operator: ' + operator);
        }
    }

    return result;
}