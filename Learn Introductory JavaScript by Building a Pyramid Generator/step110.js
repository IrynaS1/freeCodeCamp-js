/*  Задача
Шаг 110 Иногда вы можете захотеть вернуть предыдущий код, который вы закомментировали. 
Вы можете сделать это, удалив символы /* и */
//вокруг этого кода.Это называется раскомментированием.Раскомментируйте только свой первый цикл for.
//Оставьте однострочный комментарий и два других многострочных комментария на месте.



const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/


let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);