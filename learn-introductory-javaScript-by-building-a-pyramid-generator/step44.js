/*  Задача
 
Шаг 44 Вывод чисел не приведет к созданию визуально привлекательной пирамиды. 
Теперь, когда вы выводите отформатированное содержимое вашего массива rows, пришло время обновить исходный цикл. 
Вместо того, чтобы вводить i в массив, введите значение вашей символьной переменной.
*/


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(character);
}

let result = "";
for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);