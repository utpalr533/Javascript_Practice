// function outer(){
//     const outerVar = 'I am from outer function';

//     function inner(){
//         const innerVar = 'I am from inner function';
//         console.log(outerVar); // Accessing outer function variable
//         console.log(innerVar); // Accessing inner function variable
//     }
//     return inner;  
//     // console.log(innerVar); // This would cause an error
// }
// const closureFunction = outer()
// closureFunction()
function outer(){
    const outerVar = 'I am from outer function';

    function inner(){
        const innerVar = 'I am from inner function';
        console.log(innerVar +' '+ outerVar);
       
    } inner();
}
outer();