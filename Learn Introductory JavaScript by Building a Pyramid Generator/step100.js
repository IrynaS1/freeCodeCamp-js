/*  Задача
 
Шаг 100 Поскольку вы собираетесь выполнить цикл в обратном направлении, ваш цикл должен выполняться, 
пока значение i больше 0. Для этого вы можете использовать оператор "больше, чем" >. 
Установите условие выполнения цикла, когда значение i больше 0.
*/


const character = "#";
const count = 8;
const rows = [];


function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

for (let i = count; i > 0; false) {

}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);
