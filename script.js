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

// function checkEvenOrOdd(num1, num2){
 
//   let sum = num1 + num2;
//    console.log(sum);
//   if(sum % 2 === 0){
//     console.log('it is an even number');
//   }
//   else{
//     console.log('it is an odd number');
//   }
// }
//  checkEvenOrOdd (33, 44);
//  checkEvenOrOdd (30, 102)

// function sumTwoNumberAndMultipleByFive(num1, num2){
//   sum = num1 + num2;
//   result = sum * 5;
//   if (result % 2 === 0){
//     return result;
//   }
//   else{
//     return "it is not a even"
//   }

// }
//  let outcome = sumTwoNumberAndMultipleByFive(3, 4);
//  console.log(outcome);

// function countObjectNumber(obj){
//  let count = Object.keys(obj).length;
//  console.log(count);
// }
// let person = ({name: 'shamsul islam', age: 23, id: 'ash2422049m'})
// countObjectNumber(person)

// function countObjectNumber(objected){
//   let count = Object.keys(objected).length;
//   console.log(count);
// }
// let person = ({name : 'shamul', age : 32});
// countObjectNumber(person)
// function wordFrequency(sentence) {
//     let words = sentence.split(" ");
//     let wordCount = {};

//     for (let word of words) {
//         if (wordCount.hasOwnProperty(word)) {
//             wordCount[word]++;
//         } else {
//             wordCount[word] = 1;
//         }
//     }

//     return wordCount;
// }

// let output = wordFrequency('i love js and i love coading');
// console.log(output);

//  function wordFrequency(senteces){
//    let words = senteces.split(" ");
//    let wordCount = {};
//    for (let word of words){
//       if(wordCount.hasOwnProperty (word)){
//          wordCount[word]++;

//       }
//       else {
//          wordCount [word] = 1;
//       }
//    }
//    return wordCount;
//  }
// *************************

// function analyzeMarks(marksObj){
//    // console.log(marksObj);
//    let total = 0 ;
//    let highestMark = -Infinity;
//    let lowestMark = Infinity;

//    let highestSubject = null;
//    let lowestSubject = null;

//    for (let subject in marksObj){
//       let mark = marksObj[subject];
//       total += mark;
//       if(mark > highestMark ){
//          highestMark = mark;
//          highestSubject = subject;
//       }
//       if(mark < lowestMark){
//          lowestMark = mark;
//          lowestSubject = subject;
//       }
//       // console.log(key, "--> ", value);
//    }
//    console.log('heighstMark is :', highestMark);
//    console.log('lowestMark is :', lowestMark);
//    console.log('heigstSubject is :', highestSubject);
//    console.log('lowestSubject is:', lowestSubject);
//    let average = total / Object.keys(marksObj).length;
//    // console.log("total value are:", total);
//    // console.log('average number are :', average);

//    return {
//    total,
//    average,
//    }
// }
// let output = analyzeMarks({math: 344, english: 332, physics : 433, bangla : 33});
// console.log(output);


function analyzeMark(markObject){

   let total = 0;
   let heighestMark = -Infinity;
   let lowestMark = Infinity;
   let heighestSubject = null;
   let lowestSubject = null;
   for(let markSub in markObject){
     let sub = markObject[markSub];
     total += sub;
     if(sub > heighestMark){
           heighestMark = sub;
           heighestSubject = sub;
     }
     if(sub < lowestMark){
      lowestMark = sub;
      lowestSubject = sub;
     }
      
   }
   // console.log(total);
   console.log('heighst mark is :', heighestMark);
   console.log('lowest mark is:', lowestMark);
   console.log('the heighest subject is:', heighestSubject);
   console.log('the lowest subject is:', lowestSubject);
   let average = total / Object.keys (markObject).length;
   console.log('total number are:', total);
   console.log('total average are:', average);
   return {
   total,
   average,
}
}

let showResult = analyzeMark({'math': 32, 'banla' : 43, 'sociology': 38, 'biology': 83, 'chemistry': 43,});
console.log(showResult);