/*  Задача
 
Шаг 99 Что, если бы вы перевернули свою пирамиду вверх ногами? 
Пришло время попробовать! Начните с создания нового цикла for. 
Объявите свой итератор i и присвойте ему значение count, 
затем используйте логическое значение false для операторов condition и iteration.
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

for (let i = count; false; false) {

}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);