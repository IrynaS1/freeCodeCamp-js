/*  Задача
 
Шаг 66 Вызов функции позволяет вам фактически использовать функцию. Возможно, вы не знали об этом, но методы, подобные .push(),
 которые вы использовали, были вызовами функций. Функция вызывается путем указания имени функции и добавления (). 
 Вот как вызвать тестовую функцию: Пример кода test(); Замените символ.repeat(i + 1) 
 в вашем вызове .push() на вызов функции для вашей функции padRow.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow());
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);