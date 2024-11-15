/*  Задача
 
Шаг 58 Переменные также могут быть объявлены внутри функции. 
Считается, что эти переменные находятся в локальной области видимости или области блока. 
Переменная, объявленная внутри функции, может использоваться только внутри этой функции. 
Если вы попытаетесь получить к ней доступ вне функции, вы получите сообщение об ошибке ссылки. 
Чтобы увидеть это в действии, используйте const для объявления тестовой переменной в вашей функции padRow. 
Инициализируйте ее значением "Тестирование". Затем под вашей функцией попробуйте зарегистрировать тест в консоли. 
Вы увидите сообщение об ошибке, поскольку оно не определено за пределами локальной области действия функции. 
Удалите эту консоль.войдите в систему, чтобы пройти тесты и продолжить.
*/


const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
	const test = "Testing";
	return character + name;
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