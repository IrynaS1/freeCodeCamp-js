/*  Задача
 
Шаг 63 Как и ожидалось, ваша функция теперь снова возвращает значение undefined. 
Ваша переменная call больше не нужна, поэтому удалите объявление вызова и консоль.
зарегистрируйте переменную call.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);