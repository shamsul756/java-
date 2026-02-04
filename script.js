// function add (num1, num2){
//   return num1 + num2;
// }
// function subtract (num1, num2){

//   return num1 - num2;
// }
// function multiple (num1, num2){
//   return num1 * num2;
// }
// function divide (num1, num2){
//   return num1 / num2;
// }
// function calculator(a, b, opearation){
//   if(opearation === 'add'){
//     const result = add (a, b);
//     return result;
//   }
//   else if(opearation === 'subtract'){
//     const result = subtract (a, b);
//   }
//   else if (opearation === 'multiply'){
//    return multiply(a, b);
//   }
//   else if(opearation === 'divide'){
//     return divide (a, b)
//   }
//   else {
//     return "only  'add', 'subtract', 'multiple', 'divide' opearation is allowed."
//   }
//   }
//   const result = calculator(5, 7, 'add');
//   console.log(result);


// function blender(fruit){
//   console.log('i making a fruit juice', fruit);
// }
// blender('apple')
// let num1 = 24;
// let num2 = 20;

// let sum = num1 + 2;
// if (sum % 2 === 0){
//   console.log('this is a even number')}
//   else {
//     console.log('it is not a even numbers , so we can say it is odd number')
//   }

function checkEvenOrOdd(num1, num2){
 
  let sum = num1 + num2;
   console.log(sum);
  if(sum % 2 === 0){
    console.log('it is an even number');
  }
  else{
    console.log('it is an odd number');
  }
}
 checkEvenOrOdd (33, 44);
 checkEvenOrOdd (30, 102)
