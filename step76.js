/*  Задача
Шаг 76 Комментарии могут быть полезны для объяснения того, почему в вашем коде используется определенный подход, 
или для того, чтобы вы могли сделать заметки для себя в будущем. В JavaScript вы можете использовать //, 
чтобы оставить однострочный комментарий в своем коде. 
Добавьте однострочный комментарий над своим циклом for, чтобы напомнить себе о необходимости изменить код на другой тип цикла.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//abcde
for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);