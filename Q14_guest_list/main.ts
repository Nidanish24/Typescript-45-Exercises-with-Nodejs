//Question 14
//Guest list: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you'd like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

const guest: string[] = ["Anum","Mariyam","Laiba","Jahanzeb"];
for(let i=0; i<guest.length; i++){
    console.log(`Dear ${guest[i]} I would like to invite you for dinner on Sunday.`)
}