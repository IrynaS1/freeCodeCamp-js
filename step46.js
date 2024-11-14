/*  Задача
 
Шаг 46 Вы приближаетесь к цели! На этом этапе вы сталкиваетесь с так называемой ошибкой "один за другим", 
частой проблемой в языках с нулевой индексацией, таких как JavaScript. 
Первый индекс вашего массива rows равен 0, поэтому вы начинаете цикл for с i = 0. 
Но повторение строки ноль раз приводит к тому, что печатать нечего. 
Чтобы исправить это, добавьте 1 к значению i в вашем вызове .repeat(). 
Не присваивайте его обратно i, как вы это делали в своих условиях цикла.
*/


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1));
}

let result = "";
for (const row of rows) {
	result = result + row + "\n";
}

console.log(result);