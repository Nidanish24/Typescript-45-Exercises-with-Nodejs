//Question 16
//More guests: You just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.
//....Start with your program from ex15.Add a print statement to the end of your program informing people that you found a bigger dinner table.
//....Add one new guest to the beginning of your array.
//....Add one new guest to the middle of your array . .Use append() to add one new guest to the end of your list. .Print a new set of invitation messages,
//one for each person in your list.
var guest = ["Anum", "Mariyam", "Laiba", "Jahanzeb"];
console.log("Due to some reason ".concat(guest[3], " will not come on my dinner\n"));
guest[3] = "Papa";
for (var i = 0; i < guest.length; i++) { }
console.log("\nGood news! we have arrange abig dinner table so we invite 3 more guest\nThank you");
guest.unshift("Safia");
guest.splice(2, 0, "Arham");
guest.push("Ayman");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], " you are invited for dinner.\n"));
}
