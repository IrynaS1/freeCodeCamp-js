/*  Задача
Шаг 81 Текст появился снова! Это потому, что "false" - это строка, которая при вычислении 
в логическое значение становится true. 
Это означает, что "false" - это истинное значение. Достоверное значение - это значение, 
которое считается истинным при вычислении в виде логического значения. Большинство значений, 
с которыми вы сталкиваетесь в JavaScript, будут истинными. Ложное значение - 
это противоположное значение, которое считается ложным при вычислении в виде логического значения. 
В JavaScript есть определенный список ложных значений. Некоторые из них включают false, 0, "", null, undefined и NaN. 
Попробуйте изменить условие if на пустую строку "", которая является ложным значением.
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

if ("") {
	console.log("Condition is true");
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);
