/*  Задача
 
Шаг 94 Ваш генератор пирамид все еще работает. Однако, возможно, в итоге снова получится бесконечный цикл. 
Поскольку вы проверяете только, не равно ли значение done значению count, если done будет больше, чем count, 
ваш цикл будет продолжаться вечно. Обновите условие вашего цикла, чтобы проверить, 
является ли значение done меньше или равно значению count.
Обновите инструкцию iteration в цикле for, чтобы использовать присваивание добавления.
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

let done = 0;

while (done <= count) {
	done++;
	rows.push(padRow(done, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);