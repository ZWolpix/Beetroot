"use strict";

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
var age = prompt("Enter age");

if (age > 0 && age < 150) {
  if (age <= 12) {
    console.log("child");
  } else if (age <= 18) {
    console.log("teenager");
  } else if (age <= 60) {
    console.log("adult");
  } else {
    console.log("pensioner");
  }
} else {
  console.log("You entered wrong data.");
} // Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


var digit = +prompt("Enter a digit from 0 to 9");

switch (digit) {
  case 0:
    console.log(")");
    break;

  case 1:
    console.log("!");
    break;

  case 2:
    console.log("@");
    break;

  case 3:
    console.log("#");
    break;

  case 4:
    console.log("$");
    break;

  case 5:
    console.log("%");
    break;

  case 6:
    console.log("^");
    break;

  case 7:
    console.log("&");
    break;

  case 8:
    console.log("*");
    break;

  case 9:
    console.log("(");
    break;

  default:
    console.log("You've entered something wrong.");
    break;
} // Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.


var three_digit_num = +prompt("Write a three-digit number.");
var first_digit = three_digit_num % 10;
var second_digit = (three_digit_num % 100 - three_digit_num % 10) / 10;
var third_digit = (three_digit_num - three_digit_num % 100) / 100;

if (first_digit == second_digit || first_digit == third_digit || second_digit == third_digit) {
  console.log("You have the same digits in your number");
} else {
  console.log("You don't have the same digits.");
} // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


var year = +prompt("Enter a year.");

if (year % 4 == 0) {
  console.log("leap year");
} else if (year === NaN) {
  console.log("This isn't a year.");
} else {
  console.log("This isn't a leap year.");
} // Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


var five_digit_num = +prompt("Enter five-digit number");
var f_digit = five_digit_num % 10;
var s_digit = (five_digit_num % 100 - five_digit_num % 10) / 10;
var fo_digit = (five_digit_num % 10000 - five_digit_num % 1000) / 1000;
var fi_digit = (five_digit_num - five_digit_num % 10000) / 10000;

if (five_digit_num > 9999) {
  if (f_digit == fi_digit && s_digit == fo_digit) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
} else {
  console.log("this isn't a five-digit number.");
} // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.


var K_EUR = 0.83;
var K_UAN = 28.44;
var K_AZN = 1.7;
var dollars = +prompt("How much dollars do you have?");
var currency = prompt("EUR, UAN or AZN");
var result = dollars;

switch (currency) {
  case "EUR":
    result *= K_EUR;
    break;

  case "UAN":
    result *= K_UAN;
    break;

  case "AZN":
    result *= K_AZN;
    break;

  default:
    result = "error";
}

console.log(result); // Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var sum = +prompt("Enter a total.");

if (sum < 300 && sum >= 200) {
  console.log("your discount 3%; new total: ".concat(sum * 0.97, "."));
} else if (sum >= 300 && sum < 500) {
  console.log("your discount 5%; new total: ".concat(sum * 0.95, "."));
} else if (sum >= 500) {
  console.log("your discount 7%; new total: ".concat(sum * 0.93, "."));
} else {
  console.log("you don't have any discount; total: ".concat(sum, "."));
} // Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.


var circle_length = +prompt("Enter a circle length.");
var square_perimeter = +prompt("Enter a square perimeter.");
var PI = 3.142;
var r = circle_length / PI;
var a = square_perimeter / 4;

if (r <= a) {
  console.log("yes");
} else if (r > a) {
  console.log("no");
} else {
  console.log("you wrote a wrong numbers");
} // Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.


var first_answer = prompt("The lowest prime number: 2 1 0?");
var second_answer = prompt("The equality of two ratios: proportions, power, fraction");
var third_answer = prompt("Components of addition: difference, dividend, addend");
var score = 0;

if (first_answer == "1") {
  score += 2;
}

if (second_answer.toLowerCase() == "proportions") {
  score += 2;
}

if (third_answer.toLowerCase() == "addend") {
  score += 2;
}

console.log(score); // Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var day = +prompt("Day:");
var month = +prompt("Month:");
var year_ = +prompt("Year:");
var next_day = day;
var next_month = month;
var next_year = year_;
var date;

if (day > 0 && year_ > 0 && day < 32) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day == 31) {
        next_day = 1;

        if (month == 12) {
          next_month == 1;
          next_year == year_ + 1;
        } else {
          next_month = month + 1;
        }
      } else {
        next_day = day + 1;
      }

      date = "day: ".concat(next_day, "; \n month: ").concat(next_month, "; \n year: ").concat(next_year);
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (day == 30) {
        next_day = 1;
        next_month = month + 1;
      } else {
        if (day > 30) {
          date = "The date isn't correct";
          break;
        } else {
          next_day = day + 1;
        }
      }

      date = "day: ".concat(next_day, "; \n month: ").concat(next_month, "; \n year: ").concat(next_year);
      break;

    case 2:
      if (day == 29 && year_ % 4 == 0) {
        next_day = 1;
        next_month = month + 1;
      } else if (day == 28 && year_ % 4 != 0) {
        next_day = 1;
        next_month = month + 1;
      } else {
        if (year_ % 4 == 0 && day > 29 || year_ % 4 != 0 && day > 28) {
          date = "The date isn't correct";
          break;
        } else {
          next_day = day + 1;
        }
      }

      date = "day: ".concat(next_day, "; \nmonth: ").concat(next_month, "; \nyear: ").concat(next_year);
      break;

    default:
      date = "The date isn't correct";
      break;
  }
} else {
  date = "The date isn't correct";
}

console.log(date);