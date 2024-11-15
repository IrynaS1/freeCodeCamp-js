/*  Задача
 
Шаг 95 Использование done для отслеживания количества сгенерированных строк является функциональным, 
но на самом деле вы можете немного усовершенствовать логику. Массивы имеют специальное свойство длины, 
которое позволяет вам видеть, сколько значений или элементов содержится в массиве. Вы могли бы получить 
доступ к этому свойству, используя синтаксис, подобный myArray.length. Обратите внимание, что rows.
length при вызове padRow выдал бы ошибку "ошибка на единицу", поскольку значение done увеличивается 
перед вызовом. Обновите свое условие, чтобы проверить, не меньше ли значение rows.length, чем значение count.
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

let done = 0;

while (rows.length < count) {
	done++;
	rows.push(padRow(done, count));
}

let result = ""

for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);