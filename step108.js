/*  Задача
 
Шаг 108 В массивах также есть метод .shift(). При этом будет удален первый элемент массива, 
в отличие от .pop(), который удаляет последний элемент. Вот пример метода .shift(): 
Пример кода const numbers = [1, 2, 3]; numbers.shift(); Массив numbers будет иметь вид [2, 3]. 
Непосредственно под вашим массивом numbers объявите переменную со сдвигом и 
присвойте ей результат вызова .shift() для массива numbers.
 В следующей строке запишите измененную переменную в консоль.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);


const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);