//Question 23
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//Have at least one True and one False result for each of the following:
//• Tests forMore Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

//equality
console.log("Equality test with strings: ","Apple" === "Apple");
//inequality
console.log("Equality test with strings: ", ("Apple" as string) != "orange");

//lower case
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

//numeric equality
console.log("Equality test with numbers: ", 28 === 28);

//numeric inequality
console.log("Inequality test with numbers: ", (28 as number) != 30);


//greater than
console.log("Greater than test: ", 10 > 5); 
//less than
console.log("Less than test: ", 5 < 10);

//greater equal too
console.log("Greater than and equal to test: ", 10 >= 10);

//lessthan
console.log("less than or equal to test: ", 5 <= 10);

//and operator
console.log("And operator test: ", 5 === 5 && 10 > 5);

//or operator
console.log("Or operator test: ", 5 === 5 || 4 > 5 ); //false ik value 

//array 
const fruits: string[] =["Pear","Orange","Mango"];
console.log('Test "Pear" in the array: ', fruits.includes("Pear"));

//not array
console.log('Testing "Apple" is not in array: ', !fruits.includes("Apple"));
