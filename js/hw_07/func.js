// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// "use strict";

// function getMin(a, b) {
//     //v1
//     // if (a < b) {
//     //     return a;
//     // } 
//     // return b;

//     //v2
//     return (a<b) ? a: b;
// }

// console.log(getMin(105,1015));



// Напишите функцию pow(x,n), которая возводит 
// x в степень n и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, 
// а затем выводит результат pow(x,n).



// function square(x, n) {
//     let count = x;
//     for (let i = 2; i <= n; i++) {
//         count *= x;

//     }
//     return count;
// }

// //console.log(square(2,4));

// let x = prompt('x?', '2');
// let n = prompt('n?', '2');

// if (n >= 1) {
//     alert( square(x, n) );
// } else {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }




// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// "use strict";

// // function ask(question, yes, no) {
// //     if (confirm(question)) {
// //         yes();
// //     } else {
// //         no();
// //     }

// // }

// // ask("Вы согласны?",
// //     () => alert("Вы согласились."),
// //     () => alert("Вы отменили выполнение.")
// // );



// let ask=(confirm("Вы согласны?")) ?
//     () => alert("Вы согласились."):
//     () => alert("Вы отменили выполнение.");

// ask();


