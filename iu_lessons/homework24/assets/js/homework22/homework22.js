"use strict";

//Упражнение 1: Напишите функциюgetSumm(arr), которая принимает любоймассив и возвращает сумму чисел в этом массиве
function getSumm(arr) {
	let sum = 0;
	for (let i in arr) {
		if (typeof arr[i] == 'number') sum += arr[i];
	}
	return sum;
}
let arr1 = [1, 2, 10, 5]; alert(getSumm(arr1));
let arr2 = ["a", {}, 3, 3, -2]; alert(getSumm(arr2));

//Упражнение 2: В предыдущем домашнем задании вы создали файл data.jsи разместили в нём три объекта: товар и два отзыва. Отредактируйте данный файл
//В ФАЙЛЕ data.js

//Упражнение 3: Реализуйте упрощенную корзину в интернет-магазине
let cart = [4884];
function addToCart(product){
	let i = cart.indexOf(product);
	if (i < 0) cart.push(product);
}
function removeFromCart(product){
	let i = cart.indexOf(product);
	if (i >= 0) {
		cart.splice(i, 1);
	}
}
addToCart(3456);
console.log(cart); //[4884, 3456]
addToCart(3456);
console.log(cart); //[4884, 3456]
removeFromCart(4884);
console.log(cart); //[3456]
