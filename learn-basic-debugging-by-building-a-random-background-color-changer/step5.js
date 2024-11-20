/*  Задача
 
Шаг 5
CamperBot создал новую переменную с именем bgHexCodeSpanElement для хранения 
ссылки на элемент span с идентификатором bg-hex-code. Однако, когда они пытаются 
зарегистрировать эту переменную в консоли, они получают null.

null - это специальное значение в JavaScript, которое представляет отсутствие значения. 
Это может произойти, когда вы пытаетесь получить доступ к свойству объекта, который не существует.

В этом случае CamperBot не передает правильный селектор в документ.Метод querySelector .

Исправьте документ.Строка querySelector("bg-hex-code"), чтобы она правильно выбирала элемент с идентификатором bg-hex-code.
 */

const darkColorsArr = [
	"#2C3E50",
	"#34495E",
	"#2C2C2C",
	"#616A6B",
	"#4A235A",
	"#2F4F4F",
	"#0E4B5A",
	"#36454F",
	"#2C3E50",
	"#800020",
];
function getRandomIndex() {
	const randomIndex = Math.floor(darkColorsArr.length * Math.random());
	return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

console.log(bgHexCodeSpanElement);