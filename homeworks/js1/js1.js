// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let name = prompt("What is your name?", "Anonymous");
alert(`Hello, ${name}!`);



// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const CURRENT_YEAR = 2020;
let birthday = prompt("In what year were you born?");
alert(`You are ${CURRENT_YEAR - birthday} years old.`);



// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let length = prompt("Enter the lenght of squere's side");
alert(`Perimeter is ${4 * length}`);



// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const PI = 3.14;
let radius = prompt("Enter the radius of circle");
alert(`Square of the circle is ${PI * radius**2}`);



// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distance = prompt("Distance between cities in kilometers");
let time = prompt("Hours to get to the target");
alert(`The speed at which you need to move is ${distance / time} km/h`);



// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let dollars = prompt("Dollars");
const ER = 0.82;
alert(`${dollars * ER} euro`);



// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
let memorySizeGb = prompt("Enter capacity of flash drive in Gb");
let memorySizeMb = memorySizeGb * 1024;
const FILES = 820;
alert(`Number of files of 820 MB can fit on a flash drive ${(memorySizeMb - (memorySizeMb % FILES)) / FILES}`);



// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
let total = prompt('enter how much money do yo have');
let chockolade = prompt('enter the price of the chocolade');
let amount = Math.floor(total / chockolade);
console.log("Math.floor()", amount);
console.log("Math.trunc()", Math.trunc(total / chockolade));
console.log("Math.round()", Math.round(total / chockolade));
console.log("Math.ceil()", Math.ceil(total / chockolade));
let change = total % chockolade;
console.log("change", change);



// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let number = prompt("Enter three-digit number")
let first = number % 10;
let second = ((number % 100) - (number % 10)) / 10;
let third = (number - (number % 100)) / 100;
alert(`Revers: ${first * 100 + second * 10 + third}`);



// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
let deposit = prompt("Enter the deposit amount");
const PERIOD = 2;
const INTEREST = 5;
let profit = (deposit / 100) * (INTEREST / 12) * PERIOD;
alert(`You will get ${profit.toFixed(2)}`);



/* Работа с переменными

1.	Объявите две переменные: admin и name.
2.	Запишите строку "Джон" в переменную name.
3.	Скопируйте значение из переменной name в admin.
4.	Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).*/
let name;
let admin;
name = "John";
admin = name;
alert(admin);



/*Исправьте сложение
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12*/

let a = +prompt("Первое число?", 1);
let b = +prompt("Первое число?", 2);
alert(+a + +b);