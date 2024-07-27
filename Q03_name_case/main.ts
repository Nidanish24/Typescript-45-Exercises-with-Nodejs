//Question 3 
// Name cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase

let person = "HAMMAD";
console.log(person.toLowerCase());
let person1 = "typescript";
console.log(person1.toUpperCase());
let person2 = "javascript";
console.log(person2.replace(/\b\w/g, a => a.toUpperCase()));