"use strict";

window.addEventListener('load', function(){
	new AddReviewForm(document.querySelector('#review-form'));
	
	let basket = localStorage.getItem('basket');
	basket = (basket === undefined || basket === null) ? [] : JSON.parse(basket);
	if (basket.length > 0) {
		for (let i = 0; i < basket.length; i ++) {
			let buttons = document.querySelectorAll('.price-tag__basket_buttom[data-product="' + basket[i] + '"]');
			for (let button of buttons) {
				button.innerHTML = 'Товар уже в корзине';
				button.classList.add('in_basket');
			}
		}
	}
	basketCount();
	
	let basket_buttons = document.querySelectorAll('.price-tag__basket_buttom');
	for (let basket_button of basket_buttons) {
		basket_button.addEventListener('click', function(){
			if (this.classList.contains('in_basket')) {
				removeFromBasket(this.dataset.product);
				return;
			} else {
				addToBasket(this.dataset.product);
			}
		});
	}
	
	function saveBasket() {
		localStorage.setItem('basket', JSON.stringify(basket));
	}
	
	function basketCount() {
		let bc = document.querySelector('.heder__card-counter_position');
		bc.innerHTML = basket.length;
		if (basket.length > 0) {
			bc.classList.remove('hide');
		} else {
			bc.classList.add('hide');
		}
	}
	
	function addToBasket(product) {
		product = parseInt(product);
		if (basket.indexOf(product) < 0) {
			basket.push(product);
			let buttons = document.querySelectorAll('.price-tag__basket_buttom[data-product="' + product + '"]');
			for (let button of buttons) {
				button.innerHTML = 'Товар уже в корзине';
				button.classList.add('in_basket');
			}
			basketCount();
			saveBasket();
		}
	}
	
	function removeFromBasket(product) {
		product = parseInt(product);
		if (basket.indexOf(product) >= 0) {
			basket.splice(basket.indexOf(product), 1);
			let buttons = document.querySelectorAll('.price-tag__basket_buttom[data-product="' + product + '"]');
			for (let button of buttons) {
				button.innerHTML = 'Добавить в корзину';
				button.classList.remove('in_basket');
			}
			basketCount();
			saveBasket();
		}
	}
});