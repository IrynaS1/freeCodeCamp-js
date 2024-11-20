/*  Задача
Шаг 3 Учитель действительно доволен программой, которую вы создали на данный момент. 
Но теперь они хотят иметь простой способ проверить, есть ли у ученика проходной балл. 
Проходной балл - это все, что не является "F". 
Выполните функцию hasPassingGrade, которая принимает оценку учащегося в качестве параметра.
 Ваша функция должна возвращать значение true, если у учащегося есть проходной балл, 
 и значение false, если у него его нет. Советы Используйте функцию getGrade, 
 чтобы получить оценку учащегося. Затем проверьте, является ли оценка проходной или нет. 
 */


function getAverage(scores) {
	let sum = 0;

	for (const score of scores) {
		sum += score;
	}

	return sum / scores.length;
}

function getGrade(score) {
	if (score === 100) {
		return "A++";
	} else if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else {
		return "F";
	}
}

function hasPassingGrade(score) {
	let grade = getGrade(score);

	if (grade !== "F") {
		return true;
	} else {
		return false;
	}
}


console.log(hasPassingGrade(100));