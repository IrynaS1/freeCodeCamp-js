/*  Задача
 
Шаг 10
Значение по умолчанию неинициализированной переменной не определено. 
Это особый тип данных, который представляет значение, у которого еще нет определения.

Вы все равно можете присвоить значение неинициализированной переменной. Вот пример:

Пример кода 
let uninitialized;
uninitialized = "assigned";

Присвойте строку "Test" вашей переменной secondCharacter под вашим объявлением. 
Откройте консоль, чтобы увидеть, как изменился ваш журнал.

*/

let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = 'Test';
console.log(secondCharacter);