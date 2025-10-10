const age =12
if (age >= 18) {                       // the if statement checks if the condition is true
    console.log("You are an adult.");
} else {                        // the else statement runs if the condition is false        
    console.log("You are a minor.", age);
}

const age2 = 12;

console.log(
  age >= 0 && age <= 12 ? `You are a child. Your age is ${age}.` :
  age >= 13 && age <= 17 ? `You are a teenager. Your age is ${age}.` :
  age >= 18 ? `You are an adult. Your age is ${age}.` :
  "Invalid age."
);

