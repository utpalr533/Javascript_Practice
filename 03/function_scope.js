function addNumbers(a, b) {
    return a + b;
}
const sum = addNumbers(3, 7);
console.log(addNumbers(5, 10));
console.log(sum)


//Scope in javascript refers to the accessibility of variables,
//  functions, and objects in some particular part of your code 
// during runtime. 
// JavaScript primarily has two types of scope:
//  global scope and local scope// (which includes function scope and block scope).
//global variable is defined outside of the function and can be accessed 
// inside the logGlobal function and almost anywhere in the code.

const globalvariable = 'I am a global variable';
function logGlobalvariable(){
    console.log(globalvariable);
}
logGlobalvariable(); // This will log 'I am a global variable'

function logLocalvariable(){
    const localvariable = 'I am a local variable';
    console.log(localvariable);
}
logLocalvariable(); // This will log 'I am a local variable'    
//local scope. Variables declared inside a function
//are considered local and can only be accessed within that function. 

//Summary

// Function in javascript are blocks of code designed to perform a particular task.
// They can take inputs, process them, and return outputs.
// Functions help in organizing code, promoting reusability, and enhancing readability.

// Scope in javascript refers to the accessibility of variables, functions, and objects
// in some particular part of your code during runtime. 
// JavaScript primarily has two types of scope: global scope and local scope
// (which includes function scope and block scope).
// Global scope means a variable is accessible from anywhere in the code.
// Local scope means a variable is accessible only within the function or block where it is defined.    