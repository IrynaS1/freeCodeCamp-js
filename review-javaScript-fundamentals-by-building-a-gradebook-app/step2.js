/*  Задача
 
Шаг 2 Теперь учителю нужна ваша помощь в преобразовании оценки ученика в буквенную оценку. 
Выполните функцию getGrade, которая принимает числовую оценку в качестве параметра. 
Ваша функция должна возвращать строку, представляющую буквенную оценку, основанную на полученном балле.
 Вот баллы и соответствующие им буквенные оценки: 
 Диапазон оценок 100 "A++" 90-99 "A" 80-89 "B" 70-79 "C" 60-69 "D" 0-59 "F" 
 Советы Помните, что вы узнали об условных операторах (if, else if, и else). 
Помните, что вы узнали об операторах сравнения (>, <, >=, <=, ===). 
*/


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

console.log(getGrade(62));