// function noDouplicate (array){
//     const unique = [];
//     for (const item of array){
//     if (unique.includes(item) === false){
//         unique.push(item);
    
//     }
//     }
//     return unique;
// }
// const birianiLover = [ 'abul ', 'balu', 'nalo', 'abul', 'balu', 'rahsed', 'habib'];
// const numbers = [33, 44, 4, 55, 44, 33, 44, 42, 12];
// const uniqueArray = noDouplicate(birianiLover);
// console.log(uniqueArray);


// const min = Math.min(22, 44, 5, 4, 44, 332, 1)
//     console.log(min);
//min means which number is smaller then other when we are trying to get smaller number we use min otherwise we use max ( which are given bigger number)

// const min = Math.min(333, 44, 54, 33, 42, 2);
// console.log(min);

// const max = Math.max(33, 22, 3333333, 4, 444, 32, 3);
// console.log(max);

// console.log(Math.abs(22-10));
// console.log(Math.round(33.943));
// console.log(Math.floor(44.98888832));
// console.log(Math.ceil(3.011));
// console.log(Math.random(1.525));

// const today = new Date();
// const date = new Date (2026 / 10 / 19);
// console.log(date.getMonth());
// console.log(date.getDay());
// const specificDate = new Date(2091, 0, 26);
// console.log(specificDate);
// specificDate .setMonth(10);
// console.log(specificDate);
// console.log(specificDate.toLocaleDateString('en-GB'));


// let a = 5;
// let b = 7;
// console.log(a, b);
// const temp = a;
// a = b;
// b = temp;


// console.log(a, b);
// // temp means a function when we are trying to change one value to another then we use temp.
// let a = 4;
// let b = 5;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// const afroja = 23;
// const sadiya = 25;
// if (afroja > sadiya){
//     console.log('sadiya will be a get a apple');
// }
// else {
//     console.log('afroja will be eat an apple');
// }

// function getMax (num1, num2){
//     if (num1 > num2){
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }
// const max = getMax(42, 10);
// console.log('max of two is:', max);

const rahim = 24;
const banki = 34;
const bulki = 54;
if (rahim > bulki && rahim > banki ){
    console.log('rahim is the ultimately boss');
}
else if (banki > rahim && banki > bulki){
    console.log('banki is the superboss');
}
else {
    console.log('bulki is the most powerful boss');
}
function maxOfThree (num1, num2, num3){
    if(num1 >num2 && num1 >num3){
        return num1;
    }
    else if(num2 >num1 && num2 >num3){
        return num2;
    }
    else {
        return num3;
    }
}
const max = maxOfThree(354, 443, 333);
const result = max;
console.log(result);