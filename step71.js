/*  Задача
 
Шаг 71 Теперь ваш генератор пирамид работает должным образом. 
Но это отличная возможность продолжить изучение написанного вами кода. 
Оператор сложения - не единственный способ добавления значений к переменной. 
Оператор присваивания сложения может использоваться как сокращение, 
означающее "берем исходное значение переменной, добавляем это значение и 
присваиваем результат обратно переменной". Например, эти два оператора приведут
 к одному и тому же результату: Пример кода test = test + 1; test += 1; 
Обновите инструкцию iteration в цикле for, чтобы использовать присваивание добавления.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i += 1) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);