/*  Задача
 
Шаг 7 CamperBot пытается создать новую переменную с именем btn для хранения ссылки на элемент button 
с идентификатором click-btn, однако, когда они пытаются зарегистрировать элемент button в консоли,
 они видят, что элемент button имеет значение null. Откройте index.html, 
чтобы увидеть правильное идентификационное имя для этого элемента button. Затем исправьте ошибку 
в документе.Строка querySelector("#click-btn");.
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
console.log(btn);