//Упражнение 1. Напишите функциюisEmpty(obj), которая возвращаетtrue,если у объекта нет свойств, иначеfalse.
/**
 * Проверяет объект на пустоту (отсутствие свойств)
 * @param {object} obj - Проверяемый объект
 * @returns {boolean} - Результат проверки (true/false)
 */
function isEmpty(obj){
	for (let k in obj){
		return false;
	}
	return true;
}

//Упражнение 2: Создайте в проекте дополнительный файл data.js иразместите в нём три объекта
//В ФАЙЛЕ data.js

//Упражнение 3: Необходимо написать функцию raiseSalary(perzent),которая позволит произвести повышение зарплаты на определенный процент и будет возвращать объект с новыми зарплатами
let salaries = {John: 100000, Ann: 160000, Pete: 130000,};
/**
 * Производит повышение зарплаты на указанный процент и выводит в консоль сумму общего бюджета после изменений
 * @param {number} perzent - На сколько процентов повысить зарплаты
 * @returns {object} - Новый объект с новыми зарплатами
 */
function raiseSalary(perzent){
	let new_salaries = {};
	let sum = 0;
	for (let k in salaries){
		let ns = Math.floor(salaries[k] * (perzent / 100 + 1));
		sum += ns;
		new_salaries[k] = ns;
	}
	console.log(sum);
	return new_salaries;
}
raiseSalary(5);