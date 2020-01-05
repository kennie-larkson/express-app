const personOne = {
    name: 'Kennie',
    age: 20,

    address:{
        city: 'Ilorin',
        state: 'Kwara'
    },
    canEat: ()=> `${name} can eat`,
    canCode: ()=> `${name} can code`,
    canSing: ()=> `${name} can sing`

}


const personTwo = {
    name: 'Taiwo',
    age: 5,

    address:{
        city: 'Ilorin',
        state: 'Kwara'
    },
    canEat: ()=> `${name} can eat`,
    canCode: ()=> `${name} can code`,
    canFoolage: ()=> `${name} can foolage`,

}

// const{ name:name, age = 10, canCode } = personOne
// console.log(name, age, canCode());
//Kennie
//10
//Kennie can code


//creating a new object from rest-ing other objects
const personThree = {   ...personOne, ...personTwo}
console.log(personThree);

//xxxxxxxxxxxxxxxxxxxxx
// const printUser = ()=>{
//     console.log(`${personTwo.name} is ${personTwo.age} years old`);
// }

// printUser(personTwo);

//OR

const printUser = ({name, age})=>{
    console.log(`${name} is ${age} years old`);
}

printUser(personTwo);