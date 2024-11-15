/*  Задача
Шаг 86 Прямо сейчас, если вы измените значение continueLoop на true, ваш цикл while будет выполняться вечно. 
Это называется бесконечным циклом, и вы должны быть осторожны, чтобы избежать этого.
 Бесконечный цикл может привести к блокировке вашей системы, для выхода из которой потребуется полная
  перезагрузка. Чтобы избежать этого, начните с использования оператора инкремента для 
  увеличения значения переменной done внутри вашего цикла.
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

let continueLoop = false;
let done = 0;

while (continueLoop) {
	done++;
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);