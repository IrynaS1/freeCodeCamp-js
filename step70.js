/*  Задача
 
Шаг 70 Вы можете передавать полные выражения в качестве аргумента. 
Функция получит результат вычисления этого выражения. 
Например, эти два вызова функции приведут к одинаковому результату: 
Пример проверки кода(2 * 3 + 1); тест(7); Снова смотрим на шаблон: Пример кода ··#·· ·###· ##### 
Обновите значение символа,
 чтобы оно повторялось 2 * Номер строки - 1 раз. Снова откройте консоль, чтобы увидеть обновленный результат.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);