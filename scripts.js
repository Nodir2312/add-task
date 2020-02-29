// var ticketPriceInDollars = 500;
// var hotelPriceInDollars = 250;
// var entertainmentPriceInEuros = 120;
// var dollarRate = 9500.4;
// var euroRate = 10354.03;
// var ticketPriceInSoums = ticketPriceInDollars * dollarRate;
// var hotelPriceInSoums = hotelPriceInDollars * dollarRate;
// var entertainmentPriceInSoums = entertainmentPriceInEuros * euroRate;
// var totalCost = ticketPriceInSoums + hotelPriceInSoums + entertainmentPriceInSoums;

// var userMoneyInSoums = parseInt(prompt('Qancha pulingiz bor, Alisher oka?'), 10);
// var bonus=confirm('Bonus bormi ');

// if (userMoneyInSoums>totalCost) {
// 	console.log('Yetar ekan');
// } 
// else if ( bonus==true) {
// 	console.log('sizga ozgina tushirib beramiz');
// }
// else{
// 	console.log('ish ish');
// }

/*var number = parseInt(prompt('Enter a number'), 10);

if(number % 3 === 0 && number % 5 === 0){
	console.log('FizzBuzz');
}
else if (number % 3 === 0){
	console.log('Fizz');
}
else if(number % 5 === 0){
	console.log('Buzz');
}
else{
	console.log(number);
}*/
/*array.push() oxiriga+
array.pop() oxiridan-
array.unshift() boshiga+
arrat.shift*/

var tasks=[];
var addTask = document.querySelector('.vazifa1');
addTask.addEventListener('click', function (){
	var task = prompt('Enter your text');
	tasks.push(task);
	console.log(tasks);	
})

var deleteTask = document.querySelector('.vazifa2');
	deleteTask.addEventListener('click', function (){
	tasks.pop();
	console.log(tasks);
})
// var name = prompt('Name: ');
// var arr = prompt('Enter your text');
// var harflarSoni = arr.length;
// var sozlarSoni = arr.split(' '); 
// var gaplarSoni = arr.split('.');
// console.log(name);
// console.log(harflarSoni);
// console.log(sozlarSoni).length;
// console.log(gaplarSoni).length-1;
