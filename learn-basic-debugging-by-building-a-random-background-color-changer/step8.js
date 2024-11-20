/*  Задача
 
Шаг 8
CamperBot завершил создание своего случайного устройства для изменения цвета фона. 
Однако, когда пользователь нажимает кнопку, цвет фона не меняется.

Похоже, что они пытаются использовать свойство onclick, но используют его неправильно. 
Свойству onclick следует присвоить ссылку на функцию.

Исправьте ошибка в строке btn.onclick = changeBackgroundColor();.

Помните, что вы работали со свойством onclick в проекте ролевой игры. Оглянитесь назад 
на окончательное решение, чтобы увидеть, насколько правильно использовался onclick.

Как только вы исправите эту последнюю ошибку, произвольная смена цвета фона будет завершена!
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
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;