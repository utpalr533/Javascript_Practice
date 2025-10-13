const age =12
if (age >= 18) {                       // the if statement checks if the condition is true
    console.log("You are an adult.");
} else {                        // the else statement runs if the condition is false        
   // console.log("You are a minor.", age);
}

const age2 = 13;

console.log(
  age2 >= 0 && age2 <= 12 ? `You are a child. Your age is ${age2}.` :
  age2 >= 13 && age2 <= 17 ? `You are a teenager. Your age is ${age2}.` :
  age2 >= 18 ? `You are an adult. Your age is ${age2}.` :
  "Invalid age."
);
 

let Viratage =22;
if (Viratage >0 && Viratage<= 12){
    console.log('HE iS Child');    
}
else if (Viratage>=13 && Viratage<=17){
    console.log("He is a teenager.");
}
else if (Viratage>=18){
    console.log("He is Gay.");
}
else{
    console.log("Invalid age.");

}
let UtpalAge = 25;
if (UtpalAge>=0 && UtpalAge<=12){
    console.log("You are a child. Your age is " + UtpalAge);
}
else if (UtpalAge>=13 && UtpalAge<=17){
    console.log("You are a teenager. Your age is " + UtpalAge);
}
else if (UtpalAge>=18){
    console.log("You are an adult. Your age is " + UtpalAge);
}
else{
    console.log("Invalid age.");
}
let UtpalAge2 = 5;
if (UtpalAge2>=0 && UtpalAge2<=12){
    console.log("You are a child. Your age is " + UtpalAge2);
}
else if (UtpalAge2>=13 && UtpalAge2<=17){
    console.log("You are a teenager. Your age is " + UtpalAge2);
}
else if (UtpalAge2>=18){
    console.log("You are an adult. Your age is " + UtpalAge2);
}
else{
    console.log("Invalid age.");
}

// Ternary oprator
let age4 = 13;
console.log(
  age4 <= 12 ? "Child" :
  age4 <= 17 ? "Teenager" :
  "Adult"
);
// Output: Child


// Write a JavaScript program that:

// Takes a variable age (number).

// Uses ternary operators only (no if–else) to print:

// "Child: age is X" → if age is 0–12

// "Teenager: age is X" → if age is 13–17

// "Adult: age is X" → if age is 18 or above

// "Invalid age" → if age is negative or not a number

// Test your program for these ages: 10, 15, 20, -5.

let Variableage = 10;
console.log(
    Variableage<0? "Invalid age":
    Variableage<=12? `Child: age is ${Variableage}`:
    Variableage<=17? `Teenager: age is ${Variableage}`:
    `Adult: age is ${Variableage}`
)
 let Variableage2 = 15;
 console.log(
    Variableage2 <=0  ? "Invalid age":
    Variableage2 <=12 ? `Child: age is ${Variableage2}`:
    Variableage2 <=17 ? `Teenager: age is ${Variableage2}`:
    `Adult: age is ${Variableage2}`
)
let Variableage3 = 20;
console.log(
    Variableage3 <0? "Invalid age":
    Variableage3 <=12? `Child: age is ${Variableage3}`:
    Variableage3 <=17? `Teenager: age is ${Variableage3}`:
    `Adult: age is ${Variableage3}`
)
let Variableage4 = -5;
console.log(
    Variableage4<0? "Invalid age":
    Variableage4<=12? `Child: age is ${Variableage4}`:
    Variableage4<=17? `Teenager: age is ${Variableage4}`:
    `Adult: age is ${Variableage4}`
)


const disNumber = 3;
switch (disNumber) {
    case 1:
        console.log("You ordered a burger")
        break;
    case 2:
        console.log("You ordered a pizza")
        break;
    case 3:
        console.log("You ordered a pasta")
        break;
    default:
        console.log("Invalid order")
        break;        
    
}