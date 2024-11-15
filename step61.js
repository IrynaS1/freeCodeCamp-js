/*  Задача
Шаг 61 Теперь ваша переменная call имеет значение "Testing". 
Но ваша функция больше не использует параметр name.
 Удалите параметр name из объявления вашей функции, затем удалите строку "CamperChan" 
из вызова padRow. Кроме того, удалите обе консоли изadRow.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow() {
	const test = "Testing";
	return test;
}
const call = padRow();
console.log(call);

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);