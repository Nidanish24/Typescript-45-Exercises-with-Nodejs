//Question 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface person {
    age: number,
    name: string,
    nationality: string,
    student: boolean
}

let person : person = 

{
    age: 28,
    name: "Nida",
    nationality: "Pakistan",
    student: true
}
console.log(person); 

interface car{
    maker: string,
    color: string,
    automatic: boolean
}

let car={
 maker: "suzuki alto",
 color: "white",
 automatic: true
}
console.log(car);