"use strict";

window.addEventListener('load', function(){
	let review_form_data = localStorage.getItem('review_form_data');
	if (review_form_data !== undefined && review_form_data !== null) {
		review_form_data = JSON.parse(review_form_data);
		for (let name in review_form_data) {
			document.querySelector('#review-form [name="' + name + '"]').value = review_form_data[name];
		}
	}
	document.querySelector('#review-form').addEventListener('click', function(event){
		if (event.target.classList.contains('input_with_error')) {
			event.target.parentElement.querySelector('.input_error_text').remove();
			event.target.classList.remove('input_with_error');
		}
	});
	document.querySelector('#review-form').addEventListener('input', function(event){
		let review_form_data = localStorage.getItem('review_form_data');
		review_form_data = (review_form_data === undefined || review_form_data === null) ? {} : JSON.parse(review_form_data);
		review_form_data[event.target.name] = event.target.value;
		localStorage.setItem('review_form_data', JSON.stringify(review_form_data));
	});
});

function validateReviewForm() {
	let name_input = document.querySelector('#review-form input[name="name"]');
	let rating_input = document.querySelector('#review-form input[name="rating"]');
	
	if (name_input.value == '') {
		name_input.classList.add('input_with_error');
		let error = document.createElement('div');
		error.classList.add('input_error_text');
		error.innerHTML = 'Вы забыли указать имя и фамилию';
		name_input.parentElement.appendChild(error);
		return false;
	}
	if (name_input.value.length < 2) {
		name_input.classList.add('input_with_error');
		let error = document.createElement('div');
		error.classList.add('input_error_text');
		error.innerHTML = 'Имя не может быть короче 2-х символов';
		name_input.parentElement.appendChild(error);
		return false;
	}
	if (rating_input.value == '' || !/^[1-5]{1}$/.test(rating_input.value)) {
		rating_input.classList.add('input_with_error');
		let error = document.createElement('div');
		error.classList.add('input_error_text');
		error.innerHTML = 'Оценка должна быть от 1 до 5';
		rating_input.parentElement.appendChild(error);
		return false;
	}
	
	localStorage.removeItem('review_form_data');
	
	return true;
}