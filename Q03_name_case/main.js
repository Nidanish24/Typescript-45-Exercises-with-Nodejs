//Question 3 
// Name cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase
var person = "HAMMAD";
console.log(person.toLowerCase());
var person1 = "typescript";
console.log(person1.toUpperCase());
var person2 = "javascript";
console.log(person2.replace(/\b\w/g, function (a) { return a.toUpperCase(); }));
