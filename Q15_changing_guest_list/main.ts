//Question 15
//Changing guest list: You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitation.
//You'll have to think of someone else to invite.
//... Start with your program from ex14.Add a print statement at the end of your program stating the name of the guest who can't make it..
//... Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
//... Print a second set of invitation messages., one for each person who is still in your list.

const guest: string[]= ["Anum","Mariyam","Laiba","Jahanzeb"];
console.log(`Due to some reason ${guest[3]} will not come on my dinner`);
guest[3] = "Papa";
for (let i=0; i<guest.length; i++){
console.log(`Dear ${guest[i]}! I would like to invite you for dinner on Sunday`);}