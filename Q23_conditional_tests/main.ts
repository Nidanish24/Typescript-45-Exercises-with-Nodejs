//Question 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

let car : string = "subaru";

console.log("Is car ==='subaru'? I predict True.");
console.log(car === 'subaru');



//test 1
console.log("Is car =='subaru'? I predict True.");
console.log(car == 'subaru');
//test 2
console.log("Is car !='Honda'? I predict True.");
console.log(car != 'Honda');
//test 3
console.log("Is car !=='ford'? I predict True.");
console.log(car !== 'ford');
//test 4
console.log("Is car.Upper case =='SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
//test 5
console.log("Is car =='SUBARU'? I predict false.");
console.log(car == 'SUBARU');
//test 6
;console.log("Is car ==='SUBARU'? I predict false.");
console.log(car === 'SUBARU');
//test 7
console.log("Is car ==='Train'? I predict false.");
console.log(car === 'Train');
