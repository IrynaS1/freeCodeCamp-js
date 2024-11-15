/*  Задача
 
Шаг 62 Поскольку ваша функция больше не использовала этот параметр, изменение аргумента на него не повлияло.
 Продолжайте и удалите объявление test и оператор return из вашей функции padRow, чтобы функция снова стала пустой.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow() {

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