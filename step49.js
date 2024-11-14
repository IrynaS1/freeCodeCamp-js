/*  Задача
Шаг 49 Вы вызываете свою функцию padRow, но ничего не делаете с этим вызовом функции. 
Все функции в JavaScript возвращают значение, что означает, что они предоставляют определенный результат их вызова, 
который вы можете использовать в другом месте. 
Чтобы увидеть результат вызова вашей функции padRow, объявите переменную call и назначьте этой переменной существующий вызов padRow.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

const call = padRow();

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);