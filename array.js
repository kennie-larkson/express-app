const names = ['kennie','lawal','taiwo','tope'];
// returns the index of the first occurence of the searched string / element
console.log(names.indexOf('dele'));
// return a boolean for the searched criteria
console.log(names.includes('lawal'));

//xxxxxxxxxxxxxxxxxxxxxxxxx
const characters = [
    {   id: 1, name: 'kennie'},
    {   id: 2, name: 'lawal'},
    {   id: 3, name: 'taiwo'},
    {   id: 4, name: 'tope'},
    {   id: 5, name: 'kennie'}
]

const getName = name => {
    
       return character => character.name === name;
    
}

console.log( characters.find(  getName('lawal')) );




const getId = id => {
    
    return character => character.id === id;
 
}

console.log( characters.find(  getId(3)) );


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const something = {

    lname : 'Lawal',

     getName : fname => {
    
        return  fname;
     
 }

}
const { getName, lname } = something;
console.log(getName('kennie')+' '+lname);

const newObj = {
    age: 33,

    // des : {getName:{fname}} = something,
    ...something
};
console.log(newObj);





