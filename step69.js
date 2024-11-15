/*  Задача
 
Шаг 69 Теперь пришло время немного поразмыслить над математикой. Рассмотрим пирамиду из трех рядов. 
Если мы хотим, чтобы она располагалась по центру, это выглядело бы примерно так: 
Пример кода ··#·· ·###· ##### 
Для удобства чтения пустые места были заменены на промежуточные точки.
 Если вы экстраполируете шаблон, то увидите, что пробелы в начале и в конце строки расположены по шаблону. 
Измените количество пробелов в строках, чтобы они повторялись несколько раз. Откройте консоль, чтобы увидеть результат.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);