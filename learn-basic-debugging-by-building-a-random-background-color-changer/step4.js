/*  Задача
 
Шаг 4
CamperBot завершил создание функции getRandomIndex, и она работает, как ожидалось.

Но теперь они сталкиваются с этой проблемой при попытке создать ссылку на элемент body в DOM:

Пример кода
Uncaught TypeError: document.queryselector is not a function

Ошибка TypeError означает, что код пытается выполнить операцию со значением, 
которое не соответствует ожидаемому типу. Исправьте ошибку TypeError, 
обновив документ.в методе queryselector используется правильное имя метода,
 который выбирает элемент из DOM.
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
	console.log(Math.floor(darkColorsArr.length * Math.random()));
	const randomIndex = Math.floor(darkColorsArr.length * Math.random());
	return randomIndex;
}

const body = document.querySelector("body");