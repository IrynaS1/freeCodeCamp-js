/*  Задача
 
Шаг 77 В JavaScript также есть поддержка многострочных комментариев. Многострочный комментарий начинается с /* и заканчивается на */.
//В отличие от однострочного комментария, многострочный комментарий будет содержать несколько строк.
//Используйте /* и */, чтобы превратить текущий цикл for, включая основную часть, в многострочный комментарий.



const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/* for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
 } */

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);