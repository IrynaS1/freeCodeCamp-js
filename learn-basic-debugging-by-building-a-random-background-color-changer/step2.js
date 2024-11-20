/*  Задача
 
Шаг 2
Теперь CamperBot пытается создать функцию, которая вернет случайный индекс из darkColorsArr. 
Но они столкнулись со следующим сообщением об ошибке:

Пример кода
 Uncaught ReferenceError: math is not defined
Ошибка ссылки выдается при ссылке на несуществующую переменную. 
В этом случае похоже, что CamperBot пытается использовать математику, 
но в JavaScript нет математического объекта.

Исправьте ошибку CamperBot в строке math.random() и снова откройте консоль. */

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

	console.log(darkColorsArr.length * Math.random())

}
getRandomIndex();