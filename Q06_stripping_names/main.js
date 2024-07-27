//Question 6
//Stripping names: Store a person's name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n" at least once.
//Print the name once, so the white space around the name is displayed. Then print the name after stripping the white spaces.
var person = "\n\tAlbert Einstein\t\n";
console.log(person);
var person2 = person.trim();
console.log(person2);
