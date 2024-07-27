//Question 13
//Think of your favourite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items, such as "i would like to own a Honda motorcycle."
var myTransport = ["Car", "Bike", "Train", "Aeroplane"];
for (var i = 0; i < myTransport.length; i++) {
    console.log("I would like to own a ".concat(myTransport[i]));
}
