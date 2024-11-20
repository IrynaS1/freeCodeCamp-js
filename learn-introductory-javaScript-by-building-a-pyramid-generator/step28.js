/*  Задача
 
Шаг 28 Вы должны были увидеть "freeCodeCamp", выведенный на консоль.
 Это потому, что .pop() возвращает значение, которое было удалено из массива, а ранее вы переместили "freeCodeCamp" в конец массива. 
Но что возвращает функция .push()? Присвойте существующие строки функции.push() новой переменной и запишите ее в журнал.
*/

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let pushed = rows.push("freeCodeCamp");
console.log(pushed);