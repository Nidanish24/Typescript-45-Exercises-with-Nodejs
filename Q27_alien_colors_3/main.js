"use strict";
//Question 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_colors = "green";
if (alien_colors === "green") {
    console.log("player earned 5 points.");
}
else if (alien_colors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alien_colors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
//statement 2
alien_colors = "yellow";
if (alien_colors === "green") {
    console.log("player earned 5 points.");
}
else if (alien_colors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alien_colors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
//statement 3
alien_colors = "red";
if (alien_colors === "green") {
    console.log("player earned 5 points.");
}
else if (alien_colors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alien_colors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
