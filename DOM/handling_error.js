function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return numerator / denominator;
}

try {
    const result = divide(10, 0);
    console.log(result);
}catch (error) {
    console.log(error.message);  
}
//Handling errors and exceptions in JavaScript is an important part of writing robust and reliable Javascript code
//The try...catch statement allows you to handle exceptions gracefully without crashing the program