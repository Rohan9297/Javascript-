let score=null

console.log(typeof score);
console.log(typeof(score));

let valu_in_number=Number(score)
console.log(typeof valu_in_number);
console.log(valu_in_number);


// "33"=when we wriet a number in string i.e in double quatos the it easily convert it into number
// "33sbc"=> Nan 
// here we try wriet the string along with number and character but it does not convert to number
// it return the Nan which not an number
// true :=> convert into 1 and false convert into 0

let islogin="rohan"
// let islogin=true; 
let numberTOboolean=Boolean(islogin)
console.log(numberTOboolean);

// here :-
// 1. 1=> return the true
// 2. empty string ""=> return false and also for 0
// 3. string => return the true

let num=33
let stringTOnumber=String(num)
console.log(typeof stringTOnumber);

// *****operaiton*****

let str1="hello"
let str2=" rohan"
console.log(str1+str2);

console.log("2"+1);
console.log(1+"2");
console.log(1+"2"+2);
console.log(1+2+"2");
let num1=4
console.log(-1*num);

console.log(3*3+38-3*2);

console.log(+true);


// here the order of the conacatinating the string is :
// 1. firstly it solve the operation like addition , multiplication etc:
// then it concatinate with string 
// in the third console.log it display the output of 112 because the simultaneoussly two number can be added 






