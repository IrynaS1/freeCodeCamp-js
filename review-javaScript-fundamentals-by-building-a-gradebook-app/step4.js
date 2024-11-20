/*  Задача
 
Шаг 4
Теперь, когда у преподавателя есть вся необходимая информация, он хочет иметь возможность сообщить учащемуся о результатах.

Завершите функцию studentMsg, указав итоговые баллы и StudentScore для параметров. 
Функция должна возвращать строку, представляющую сообщение студенту.

Если студент прошел курс, строка должна соответствовать этому формату:

Пример кода
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
Если ученик не прошел курс, строка должна соответствовать этому формату:

Пример кода
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
Замените среднее значение, выставляемое здесь, средним значением от общего количества баллов. 
Замените выставляемую здесь оценку оценкой учащегося.

Советы

Используйте функцию getAverage, чтобы получить среднее значение по классу.
Используйте функцию getGrade, чтобы получить оценку ученика.
Используйте конкатенацию строк (+) для построения сообщения.
Будьте осторожны с пунктуацией и пробелами в сообщении.

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
		return 'A++';
	} else if (90 <= score && score <= 99) {
		return 'A';
	} else if (80 <= score && score <= 89) {
		return 'B';
	} else if (70 <= score && score <= 79) {
		return 'C';
	} else if (60 <= score && score <= 69) {
		return 'D';
	} else {
		return 'F';
	}
}

function hasPassingGrade(score) {
	if (getGrade(score) !== "F") {
		return true;
	} else {
		return false;
	}
}

function studentMsg(totalScores, studentScore) {
	let classOverage = getAverage(totalScores);
	let studentGrade = getGrade(studentScore);

	let isPassedCourse = hasPassingGrade(studentScore);

	if (isPassedCourse === true) {
		return `Class average: ${classOverage}. Your grade: ${studentGrade}. You passed the course.`;
	} else {
		return `Class average: ${classOverage}. Your grade: ${studentGrade}. You failed the course.`
	}
}
console.log('total', studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));