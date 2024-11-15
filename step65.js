/*  Задача
 
Шаг 65
Помните, что на предыдущем шаге вы узнали о возвращаемых значениях. 
Функция может возвращать значение, которое ваше приложение будет использовать отдельно.

В функции ключевое слово return используется для указания возвращаемого значения. 
Например, эта функция вернет значение, заданное первому параметру:

Пример кода
function name(parameter) {
  return parameter;
}
  Используйте ключевое слово return, чтобы вернуть значение символьной переменной, 
  повторяющееся несколько раз подряд.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);