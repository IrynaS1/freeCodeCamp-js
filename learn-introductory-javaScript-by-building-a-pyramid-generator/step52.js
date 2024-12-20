/*  Задача
 
Шаг 52 Если у вас есть значение, которое явно записано в вашем коде, например строка "Hello!" 
в вашей функции, оно считается жестко запрограммированным. 
Жесткое кодирование значения внутри функции может привести к тому, что оно не будет использоваться повторно, как вам хотелось бы. 
Вместо этого вы можете задать параметры для функции. 
Параметры - это специальные переменные, которым присваивается значение при вызове функции, и которые могут использоваться 
в вашей функции для динамического изменения результата выполнения кода функции. Чтобы добавить параметр в вашу 
функцию, вам нужно добавить имя переменной в круглых скобках. Например, у этой демонстрационной функции есть параметр name:
Пример кода демонстрационной функции(название) { } название звучит как полезный параметр, так что смело добавляйте его в свою функцию padRow.

*/


const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
	return "Hello!";
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