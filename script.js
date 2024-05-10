// --- 1-- -
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('Батьки дозволили?');
// 	}
// }


// const checkAge = (age) => {
// 	return age > 18 ? true : confirm('Батьки дозволили?');
// }
// console.log(checkAge(11));




// --- 2-- -
// 	Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// let nums = (a, b) => {
// 	if (a > b) return `Number a: ${a} is greater than b`;
// 	return `Number b: ${b} is greater than a`;
// }
// console.log(nums(6, 2));



// --- 3-- -
// 	Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }
// ask(
// 	"Ви згодні?",
// 	function () { alert("Ви погодились."); }, function () { alert("Ви скасували виконання."); }
// );


// const ask = (question, yes, no) => {
// 	if (confirm(question)) yes();
// 	else no();
// }
// ask(
// 	'Ви згодні?',
// 	() => {
// 		alert("Ви погодились.");
// 	},
// 	() => {
// 		alert("Ви скасували виконання.");
// 	}
// )



// const myAsk = (question) => {
// 	if (confirm(question)) return alert("Ви погодились.");
// 	return alert("Ви скасували виконання.");
// }

// myAsk('Ви згодні?');




