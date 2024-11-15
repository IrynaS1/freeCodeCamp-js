/*  Задача
 
Шаг 78 Ваша пирамида снова исчезла. 
Это нормально - этого следовало ожидать. Прежде чем создавать новый цикл, 
вам нужно ознакомиться с операторами if. 
Оператор if позволяет запускать блок кода только при выполнении условия. 
Они используют следующий синтаксис: Пример кода if (условие) { логика } 
Создайте оператор if с логическим значением true в качестве условия. 
В тексте выведите строку "Условие истинно".
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

if(true) {
	console.log("Condition is true");
 }

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);