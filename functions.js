
// without parameters and arguments
// function demo(){
//     console.log("Function Example");
// }
// demo();

// with parameters and arguments
// function add1(a,b){
//     console.log(a+b);
// }
// add1(5,6);
// add1(5,7);
// add1(5,8); // can call multiole times

// function isPalindrome(str){
//     let revstr="";
//     for(let i=str.length-1;i>=0;i--){
//         revstr+=str[i];
//     }
//     if(str==revstr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a Palindrome");
//     }
// }
// isPalindrome("sir");
// isPalindrome("madam");

//!anonymous function
// function(){
//     console.log("Anonymous Function Example");
// }

//!function expression
// let x=[1,2,3,4]; //array
// console.log(x);
// let x=function(){
//     console.log("Function expression");
// };
// // console.log(x);
// x();

//!Immediate function - print only single time
// (
//     function(){
//         console.log("IIFE");
//     }
// )()();

//! arrow function
// function demo(){
//     console.log("Hello");
// }
// demo();

// let x=()=>{console.log("Hello")};
// x();

// let x=_=>console.log("Hello");
// x();

// let x=a=>console.log(a);
// x(10);

// let x=_=>console.log("Hello");
// console.log("Bye");
// console.log("Okay!");
// x();

//!return function
// function add(a,b){
//     console.log("Before return will print");
//     return a+b; //explicit return
//     console.log("After rturn will not print");
// }
// let x=add(5,5);
// console.log(x);

// let x=(a,b)=>a+b; //implicit return
// console.log(x(10,30));
let users = ["Navya "]