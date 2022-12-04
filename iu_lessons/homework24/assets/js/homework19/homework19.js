//Упражнение 1: let a='$100' let b='300$' let summ= ...;
let a = '$100'; let b = '300$';
let summ = parseInt(a.replace('$', '')) + parseInt(b.replace('$', ''));
console.log(summ);

//Упражнение 2: letmessage=' привет, медвед      ';message= ...
let message = ' привет, медвед      ';
message = message.trim();
message = message.charAt(0).toUpperCase() + message.slice(1);
console.log(message);

//Упражнение 3: Написать код, который при открытии страницы будет задавать пользователю вопрос “Сколько вам лет?”
let age = prompt('Сколько вам лет?');
age = parseInt(age);
if (age >= 0 && age < 4) {
	alert('Вам ' + age + ' лет и вы младенец');
} else if (age >= 4 && age < 12) {
	alert('Вам ' + age + ' лет и вы ребенок');
} else if (age >= 12 && age < 19) {
	alert('Вам ' + age + ' лет и вы подросток');
} else if (age >= 19 && age < 41) {
	alert('Вам ' + age + ' лет и вы познаёте жизнь');
} else if (age >= 41 && age < 81) {
	alert('Вам ' + age + ' лет и вы познали жизнь');
} else if (age >= 81) {
	alert('Вам ' + age + ' лет и вы долгожитель');
}

//Упражнение 4: letmessage='Я работаю со строками как профессионал!';letcount= ...;
let message = 'Я работаю со строками как профессионал!';
let count = message.split(' ').length;
console.log(count);
