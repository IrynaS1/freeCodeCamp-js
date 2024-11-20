/*  Задача
 
Шаг 6
Теперь CamperBot создал функцию под названием changeBackgroundColor, которая изменяет цвет 
фона страницы на случайный цвет из массива darkColorsArr. Функция также отображает 
шестнадцатеричный код для этого нового цвета.

Когда они пытаются протестировать эту функцию, они замечают, что цвет фона не меняется, а текст показывает следующее:

Пример кода
Hex Code: undefined

значение undefined отображается здесь, потому что переменная color задана неправильно. 
Исправьте ошибку в строке darkColorsArr[getRandomIndex], чтобы для переменной color был 
задан случайный цвет из массива darkColorsArr.
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

function changeBackgroundColor() {
	const color = darkColorsArr[getRandomIndex()];

	bgHexCodeSpanElement.innerText = color;
	body.style.backgroundColor = color;
}
changeBackgroundColor();