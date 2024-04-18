//Q1.
function sum(arr) {
    const sum1 = arr.filter(elem => elem > 20)
        .reduce((accum, current, index, arr1) => (accum + current), 0);
    return sum1;

}
console.log(sum([19, 20, 23, 30]));

/* Q2
2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/

const getNewArray = function (strArr) {
    const filteredArr = strArr.filter(elem => elem.length >= 5 && elem.includes("a"));
    return filteredArr;
};

console.log(getNewArray(["mekdes", "samuel", "belaynesh"]));

/*
3. Implement an arrow function with feature below:
concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
*/


const concat = (str, arr1, arr2) => {
    return str.split('').concat(...arr1, ...arr2);
};

console.log(concat('hi', [1, 2, 3], ['Hello', 'world']));