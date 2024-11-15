/*  Задача
Шаг 51 Ваша переменная call имеет неопределенное значение, хотя вы ее и определили! 
Это связано с тем, что ваша функция padRow в данный момент не возвращает значение. 
По умолчанию функции возвращают значение undefined. 
Чтобы вернуть что-то еще, вам нужно использовать ключевое слово return. 
Вот пример функции, которая возвращает строку "Функции - это круто!": 
Пример кода функции demo() { возвращает "Функции - это круто!"; } 
Используйте ключевое слово return, чтобы ваша функция возвращала строку "Привет!".
*/


const character = "#";
const count = 8;
const rows = [];

function padRow() {
	return 'Hello!';
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