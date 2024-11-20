/*  Задача
Шаг 68
Теперь вы должны увидеть тот же набор символов в своей консоли. 
Ваша функция padRow выполняет то же самое, что и ранее, но теперь она находится в 
отдельном разделе для повторного использования.

Используйте оператор сложения, чтобы вставить один пробел " " в начало и конец повторяющейся символьной строки.

Помните, что вы можете использовать оператор + для объединения строк, как показано ниже:

Пример кода
" " + "string"
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' ' + character.repeat(rowNumber) + ' ';
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);