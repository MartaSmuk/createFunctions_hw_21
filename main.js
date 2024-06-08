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

console.log(powerFun(2, -3));

