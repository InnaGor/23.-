// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18),
// взрослым (18_60) или пенсионером (60– ...).
// let age = parseInt(prompt("Your age?", ""));
// if (isNaN(age)) {
//     console.log("Invalid age")
// } else if (age <= 2) {
//     console.log("You are child")
// } else if (age >= 12 && age < 18) {
//     console.log("You are a teenager");
// } else if (age >= 18 && age < 60) {
//     console.log("You are a adolt");
// } else {
//     console.log("You are forever young");
// }


// Why it doesn`t work?

// switch (+age) {
//     case (age <= 2):
//         console.log("You are a child");
//         break;
//     case (age >= 12 && age < 18):
//         console.log("You are a teenager");
//         break;
//     case (age >= 18 && age < 60):
//         console.log("You are a adolt");
//         break;
//     default:
//         console.log("You are forever young");
// }

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let symbol = ")!@#$%^&*(";
// let num = parseInt(prompt("число от 0 до 9", ""));
// console.log(symbol[num]);

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// let num_3 = prompt("трехзначное число, please:", "");

// let isFound = false;
// for (let i = 0; i <= num_3.length; i++) {
//     for (let j = i + 1; j <= num_3.length; j++) {
//         if (num_3[i] == num_3[j]) {
//             isFound = true;
//             console.log('reapeted numbers: ', num_3[i]);
//         }
//     }

// if (!isFound) {
//     console.log("NO");
// }

// 4. Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year = parseInt(prompt("type a year:", ""))
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let n = prompt("any number:", "");

// function IsPalindrome(n) {
//     var halfLenght = Math.floor(n.length / 2);
//     for (var i = 0; i < halfLenght; i++)
//         if (n[i] !== n[n.length - i - 1])
//             return false;

//     return true;
// }
// if (IsPalindrome(n)) {
//     console.log('Yes');
// } else {
//     console.log('no');
// }

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую сумму.

// let dollarAmount = parseInt(prompt("Type your amount in USD, please:", ""));
// let currency = prompt("Type wanted currency, please:", "");
// let newValue

// switch (currency) {
//     case "EUR":
//         newValue = dollarAmount * 0.9;
//         alert(newValue);
//         break;
//     case "UAN":
//         newValue = dollarAmount * 25;
//         alert(newValue);
//         break;
//     case "AZN":
//         newValue = dollarAmount * 1.7;
//         alert(newValue);
//         break;
//     default:
//         alert("Type available currency, please");

// }

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// let purchaseAmount = parseInt(prompt("Type your purchase amount, please:", ""));

// if (purchaseAmount >= 200 && purchaseAmount <= 300) {
//     payAmount = purchaseAmount - purchaseAmount * 0.03;
// } else if (purchaseAmount > 300 && purchaseAmount <= 500) {
//     payAmount = purchaseAmount - purchaseAmount * 0.05;
// } else if (purchaseAmount > 500) {
//     payAmount = purchaseAmount - purchaseAmount * 0.07;
// } else {
//     payAmount = purchaseAmount;
// }
// alert(`Pay amount is ${payAmount} grn`);

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// let l = parseInt(prompt("Type the length of the circle, please:", ""));

// let s = parseInt(prompt("Type the perimeter of the quadrate, please:", ""));
// //  a=s/4
// //  l=3.14*a = s/4*3.14


// if (l <= s / 4 * 3.14) {
//     alert('it will fit');
// } else {
//     alert('it wont fit');
// }

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.(КАК?) За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.



// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.

let day = parseInt(prompt("Type the number of the day", ""));
let month = parseInt(prompt("Type the number of the month", ""));
let year = parseInt(prompt("Type the number of the year", ""));
let nextDay = day;
let nextMonth = month;
let nextYear = year;

if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Invalid data. Try again")
}

switch (month) {
    case 2:
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            if (day == 29) {
                nextDay == 1;
                nextMonth++;
            } else {
                nextDay++;
            }
        } else {
            if (day == 28) {
                nextDay == 1;
                nextMonth++;
            } else {
                nextDay++;
            }
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (day == 30) {
            nextDay == 1;
            nextMonth++;
        } else {
            nextDay++;
        }
        break;
    default:
        if (day == 31) {
            nextDay == 1;
            nextMonth++;
        } else {
            nextDay++;
        }
}

if (nextMonth > 12) {
    nextMonth == 1;
    nextYear++;
}

alert(`${nextDay}/${nextMonth}/${nextYear}`);



























// Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
// let day = prompt('your day:', '');
// let month = prompt('your month:', '');
// let year = prompt('your year:', '');
// if (month = 2){
// if(year%400==0|| (year % 4 && year%100 !=0)){
//     if (da)
// }
// } else if (month== 4 || month== 6 || month== 9 || month== 11 ){ //30 days

// } else

// lesson22