/*  Задача
Шаг 59 Значения, возвращаемые функцией, используются при вызове функции. Вы можете использовать 
вызов функции непосредственно в качестве возвращаемого значения или записать возвращаемое значение 
в переменную. Таким образом, вы можете использовать значение, присвоенное локальной переменной, вне функции, 
в которой она была создана. 
Пример кода function getName() {
  const name = "Camper cat";
  return name;
}

console.log(getName()); // "Camper cat"

const capturedReturnValue = getName();
console.log(capturedReturnValue); // "Camper cat"

console.log(name); // reference error

Чтобы использовать ваше "тестовое" значение, верните его из функции padRow, 
обновив инструкцию return, чтобы она возвращала только тестовую переменную.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
	const test = "Testing";
	return test;
}

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);