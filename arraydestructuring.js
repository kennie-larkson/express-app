const alphabets = ['A','B','C','D','E','F'];
const numbers = ['1','2','3','4','5','6'];

//  const a = alphabets[0];
//  const b = alphabets[1];

const [ firstItem, , ThirdItem, ...rest] = alphabets//destructuring the alphabets array
 console.log(firstItem);//A
 console.log(ThirdItem);//C
 console.log(rest);// D, E, F


const newArray = [...alphabets, ...numbers];//combining alphabets and numbers arrays using spread operator

 console.log(newArray);

 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 const sumAndMultiply = ( a,b )=> [a+b, a*b, a/b];//function returns an array of two element sum and multiply
 const array = sumAndMultiply(3,2);
 console.log(array);


//destructuring the return array into sum 
 //and multiply variables, and we can also set default values to our variables
 const[sum, multiply, division = 'no division'] = sumAndMultiply(3,2);
 console.log(sum);
 console.log(multiply);
 console.log(division);




