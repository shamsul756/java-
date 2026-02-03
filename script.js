function noDouplicate (array){
    const unique = [];
    for (const item of array){
    if (unique.includes(item) === false){
        unique.push(item);
    
    }
    }
    return unique;
}
const birianiLover = [ 'abul ', 'balu', 'nalo', 'abul', 'balu', 'rahsed', 'habib'];
const numbers = [33, 44, 4, 55, 44, 33, 44, 42, 12];
const uniqueArray = noDouplicate(birianiLover);
console.log(uniqueArray);




