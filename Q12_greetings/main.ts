//Question 12 
//Strt with the array you used in exercise11, but instead of just printing each person's name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person's name.

let friendsArray1 = ["Anum","Suman","Fatima","Mehrish","Zeenat","Kiran"];
let message : string = " is a good person.";
for (let i = 0; i < friendsArray1.length; i++){
console.log(friendsArray1[i] + message);}