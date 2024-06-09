"use strict";

//      Завдання 1.
//      Рекурсивне зведення в ступінь
//      Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//      Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
//      Ступінь передається як другий аргумент у функціюpow (num, degree).

function powerFun(basis, exponent) {
    if(exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return basis * powerFun(basis, exponent - 1);
    } else if (exponent < 0) {
        return 1 / basis * powerFun(basis, exponent + 1);
    }
    
}
let powerResult = powerFun(2, -3);
document.write(`1. Рекурсивне зведення в ступінь: ${powerResult} <br>`);

//  Завдання 2. Реалізуйте функцію removeElement
//  Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
//  Наприклад:

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, el) {
    const remIndex = array.indexOf(el);
    array.splice(remIndex, 1);
    return array;
}

let resArray = removeElement(array, 2);

document.write(`2. Реалізуйте функцію removeElement: ${resArray} <br>`);

// Завдання 3. Реалізуйте функцію generateKey

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const length = 13;
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(length, characters) {
    let res = "";
    for (let i = 0; i <= length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        res += characters[randomInd];
    }
    return res;
}

let resGenChar = generateKey(length, 'characters');

document.write(`3. Реалізуйте функцію generateKey(length, characters): ${resGenChar} <br>`);

