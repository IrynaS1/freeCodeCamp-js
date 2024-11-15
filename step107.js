/*  Задача
 Шаг 107 Метод .unshift() для массива позволяет добавлять значение в начало массива, в отличие от .push(), 
 который добавляет значение в конец массива. .unshift() возвращает новую длину массива, для которого он был вызван. 
 Пример кода const countDown = [2, 1, 0]; const newLength = countDown.unshift(3); console.log(обратный отсчет); // [3, 2, 1, 0] 
 console.log(newLength); // 4 
 Используйте const для объявления неизменяемой переменной и присвойте ему результат вызова .unshift() 
 для вашего массива numbers. Передайте 5 в качестве аргумента. Затем выведите вашу неизмененную переменную.
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
const unshifted = numbers.unshift(5);
console.log(numbers);
console.log(unshifted);


let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);