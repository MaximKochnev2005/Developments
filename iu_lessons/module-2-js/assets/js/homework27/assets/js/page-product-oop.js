"use strict";

class Form {
	constructor(form){
		this.form = form;
		this.name = this.form.attributes.name.value;
		this.form_load();
		
		this.form.addEventListener('input', this.form_save.bind(this));
		this.form.addEventListener('submit', this.form_submit.bind(this));
		this.form.addEventListener('click', function(event){
			if (event.target.classList.contains('input_with_error')) {
				event.target.parentElement.querySelector('.input_error_text').remove();
				event.target.classList.remove('input_with_error');
			}
		});
	}
	form_load(){
		this.form_data = localStorage.getItem('form_' + this.name);
		this.form_data = (this.form_data === undefined || this.form_data === null) ? {} : JSON.parse(this.form_data);
		for (let key in this.form_data) {
			this.form.querySelector('[name="' + key + '"]').value = this.form_data[key];
		}
	}
	form_save(){
		let formData = new FormData(this.form);
		for (let entry of formData.entries()) {
			this.form_data[entry[0]] = entry[1];
		}
		localStorage.setItem('form_' + this.name, JSON.stringify(this.form_data));
	}
	form_submit(e){
		e.preventDefault();
		if (this.validate()) {
			this.submit();
		}
	}
	validate(){
		return false;
	}
	submit(){
		localStorage.removeItem('form_' + this.name);
		this.form.reset();
		alert('Форма успешно отправлена!');
	}
	show_error(input, text){
		input.classList.add('input_with_error');
		let error = document.createElement('div');
		error.classList.add('input_error_text');
		error.innerHTML = text;
		input.parentElement.appendChild(error);
	}
}

class AddReviewForm extends Form {
	validate(){
		let name_input = this.form.querySelector('input[name="name"]');
		let rating_input = this.form.querySelector('input[name="rating"]');
	
		if (name_input.value == '') {
			this.show_error(name_input, 'Вы забыли указать имя и фамилию');
			return false;
		}
		if (name_input.value.length < 2) {
			this.show_error(name_input, 'Имя не может быть короче 2-х символов');
			return false;
		}
		if (rating_input.value == '' || !/^[1-5]{1}$/.test(rating_input.value)) {
			this.show_error(rating_input, 'Оценка должна быть от 1 до 5');
			return false;
		}
	
		return true;
	}
}
