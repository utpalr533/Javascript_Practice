let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
fruits[1]= "Orange";
console.log(fruits);
fruits.push("Pineapple");
console.log(fruits);
fruits.pop();
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let person ={
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false,
};
console.log(person.name);
console.log(person ['age']);

person.age = 31;
console.log(person.age);

person.city = "Los Angeles";
console.log(person);

for (let key in person ){
    console.log(key +': ' +person[key]);
    
}

function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]