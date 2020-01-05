const personOne = {
    name: 'Kennie',
    // age: 

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
    // age: 

    address:{
        city: 'Ilorin',
        state: 'Kwara'
    },
    canEat: ()=> `${name} can eat`,
    canCode: ()=> `${name} can code`,
    canFoolage: ()=> `${name} can foolage`,

}

const{ name:name, age = 10, canCode } = personOne
console.log(name, age, canCode());
//Kennie
//10
//Kennie can code