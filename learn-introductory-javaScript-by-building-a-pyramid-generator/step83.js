/*  Задача
 
Шаг 83
Иногда вам захочется запустить другой код, когда все условия if...else if будут ложными. Вы можете сделать это, добавив блок else.

Блок else будет оценивать, только если условия в блоках if и else if не выполняются.

Здесь блок else добавляется к блоку else if.

Пример кода
if (condition) {
  // this code will run if condition is true
} else if (condition2) {
  // this code will run if the first condition is false
} else {
  // this code will run 
  // if the first and second conditions are false
}

Добавьте блок else в блок else if. Внутри блока else введите строку "Это блок else" в консоль. 
Чтобы увидеть результаты в консоли, вы можете вручную изменить < в инструкции else if на >. 
Это сделает условие ложным, и будет запущен блок else.
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
} else if (5 > 10) {
	console.log("5 is less than 10");
} else {
	console.log("This is the else block");
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);