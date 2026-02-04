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

// const rahim = 24;
// const banki = 34;
// const bulki = 54;
// if (rahim > bulki && rahim > banki ){
//     console.log('rahim is the ultimately boss');
// }
// else if (banki > rahim && banki > bulki){
//     console.log('banki is the superboss');
// }
// else {
//     console.log('bulki is the most powerful boss');
// }
// function maxOfThree (num1, num2, num3){
//     if(num1 >num2 && num1 >num3){
//         return num1;
//     }
//     else if(num2 >num1 && num2 >num3){
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }
// const max = maxOfThree(354, 443, 333);
// const result = max;
// console.log(result);

// const heights = [ 23, 42, 41, 40, 56, 57];

// function getMax(number)

// {
//      let maximum = number[0];
//    for (const num of number){
   
//     if(num > maximum){
//         maximum = num;
//     }
//    }
//    return maximum;
// }

// const output = getMax(heights);
// // // 
// // console.log('max value is ', output);
// const prices = [998, 55, 3333, 55555, 3354532, 4444654 ];
// function getMin(numbers){
//   let min = numbers[0]
// for (const number of numbers ){
//   if(number < min){
//     min = number;
//   }
// }
// return min;

// }
// const cheap = getMin(prices);
// console.log('cheapest one is :', cheap);

// const prices = [33, 44, 55, 22, 55, 33];
// function gitMin(numbers){
//   let min = numbers [0];
//   for(const number of numbers){
//     if(number < min){
//       min = number;
//     }
//   }
//   return min;
// }
// const chep = gitMin(prices);
// console.log('cheapest one is:', chep);

// const prices = [332, 44, 5533, 5533, 55];
// function any(results){
//   let min = results [0];
//   for(const result of results){
//     if(result < min){
//       min = result;
//     }
//   }
//   return min;
// }
// const cheapest = any (prices);
// console.log('most cheapest number ever:', cheapest);

// const mobiles = [

//   {name: 'realme', color: 'off-white', prize: 1241, camera : '10mp'},
//   {name: 'redme', color: 'off-white', prize: 254456, camera : '12mp'},
//   {name: 'apple', color: 'off-white', prize: 23222 , camera : '12mp'},
//   {name: 'oppo', color: 'off-white', prize:12574, camera : '14mp'}

// ]
// function getCheapestMobiles(mobiles){
//   let max = mobiles[0]
//  for(const mobile of mobiles){
//  if(mobile.prize > max.prize){
//   max = mobile ;
//  }
//  }
//  return max;
// }

// const result =  getCheapestMobiles(mobiles);
// console.log('most chepest mobiles', result);

// const products = [
// {name: 'shamspu', price : 300, quantity :5 },
// {name: 'watch', price : 1500, quantity :4 },
// {name: 'pant', price : 1300, quantity :3 },
// {name: 'tea-shirt', price : 800, quantity :2 }

// ]
// function carTotal (products){
//   let total = 0;
//   for (const product of products){
//     let thisProductCost = product.price * product.quantity;
//     total = total + thisProductCost;
//   }
//   return total;
// }
// const totalShopping = carTotal(products);
// console.log(totalShopping);

const products =[
{name :'t-shirt',  price : 340, quantity: 2},
{name : 'pant', price : 540, quantity :3},
{name : 'under-pant', price : 300, quantity: 2},
{name : 'shampu', price : 400, quantity: 3}

]
function shoppingCart (products){
  let total = 0;
  for(const product of products){
    let totalAllCost = product.price * product.quantity;
    total = total + totalAllCost;
  }
  return total;
}
const totalCost = shoppingCart(products);

console.log(totalCost);