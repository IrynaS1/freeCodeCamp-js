/*  Задача
 
Шаг 67 У вашей функции padRow есть два параметра, которые вы определили. 
Значения передаются этим параметрам при вызове функции.
 Значения, которые вы предоставляете вызову функции, называются аргументами, и вы передаете аргументы вызову функции.
  Вот вызов функции с переданным в качестве аргумента "Hello": Пример test("Hello");
Передайте i + 1 и считайте их аргументами для вашего вызова padRow. Как и параметры, аргументы разделяются запятой.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);