//Упражнение 1: Напишите таймер обратного отсчёта
let n = prompt('Введите число');
if (/^[0-9]+$/.test(n) && !isNaN(n)) {
	n = parseInt(n);
	let timer = setInterval(function(){
		if (n > 0) {
			n --;
			console.log('Осталось ' + n);
			if (n == 0) {
				console.log('Время вышло!');
				clearInterval(timer);
			}
		}
	}, 1000);
} else {
	console.log('Ошибка, вы ввели не число');
}

//Упражнение 2: Выполните запрос на бэкенд по адресу https://reqres.in/api/users и выведите в консоль количество пользователей в ответе, а также имя, фамилию и emailкаждого пользователя
const start = new Date().getTime();
fetch('https://reqres.in/api/users').then(response => {
	if (response.status == 200) {
		response.json().then(response_data => {
			console.log('Получили пользователей: ' + response_data.data.length);
            for (let i = 0; i < response_data.data.length; i ++) {
            	let user = response_data.data[i];
            	console.log('- ' + user.first_name + ' ' + user.last_name + ' (' + user.email + ')');
            }
            const end = new Date().getTime();
            console.log('Время выполнения: ' + (end - start) + 'ms');
		});
	} else {
		console.log('Ошибка, не удалось получить данные');
        const end = new Date().getTime();
        console.log('Время выполнения: ' + (end - start) + 'ms');
	}
}, fail => {
	console.log('Ошибка, не удалось получить данные');
    const end = new Date().getTime();
    console.log('Время выполнения: ' + (end - start) + 'ms');
});