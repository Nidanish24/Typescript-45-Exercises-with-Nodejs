//Question 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//excersice 17
const guest: string[] = ["Anum","Mariyam","Laiba","Jahanzeb"];
guest[3] = "Papa";
for (let i=0; i<guest.length; i++){}
guest.unshift("Safia");
guest.splice(2,0,"Arham");
guest.push("Ayman");

while (guest.length>2){
    let removeGuest=guest.pop()
   // console.log(`\nSorry ${removeGuest}, you are not invited for dinner.\n`);
}
// for (let i=0; i<guest.length; i++){
//     console.log(`Dear ${guest[i]}, you are still invited`);
// }
guest.splice(0,2);
console.log(guest);

// exesice 19
console.log(`Total number of guest are: ${guest.length}`);