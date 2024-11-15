/*  Задача
 
Шаг 82
Текст снова удален! Пустые строки преобразуются в false, 
что делает их ложными значениями. В будущих проектах вы узнаете больше об истинных и ложных значениях.

В дополнение к операторам if в JavaScript также есть операторы else if. 
операторы else if позволяют проверять несколько условий в одном блоке кода.

Вот синтаксис оператора else if:

Пример кода
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
} 

Если первое условие ложно, JavaScript проверит следующее условие в цепочке. 
Если второе условие ложно, JavaScript проверит третье условие и так далее. 
Под вашим оператором if добавьте оператор else if, который проверяет, меньше ли 5, чем 10. 
Затем в теле инструкции else if введите строку "5 меньше 10" в консоль. Проверьте консоль, чтобы увидеть результаты
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
} else if (5 < 10) {
	console.log("5 is less than 10");
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);
