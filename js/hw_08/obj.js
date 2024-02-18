// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// "use strict"

// let user = {
//     name: "John"
// };
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// alert(user.name);





// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

"use strict"
// let schedule = {
//     name: name
// };
// function isEmpty(obj) {

//     for (let key in obj) {
//         // если тело цикла начнет выполняться - значит в объекте есть свойства
//         return false;
//       }
//       return true;
//     }

// alert (isEmpty(schedule))



// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.


// let salaries = {
//       John: 100,
//       Ann: 160,
//       Pete: 130};

//       let sum=0;
//       for (let key in salaries) {

//             sum+=salaries[key]
//         }
//         alert(sum);




// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:
// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// "use strict"
// function multiplyNumeric(object) {
//     for (let key in object) {
//         if (typeof object[key] == "number") {
//             object[key]*= 2;

//         }
//     }
// }

// multiplyNumeric(menu);

// alert(menu.width)

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

"use strict"

function sayHi() {
    return this.name;
}

let user = { name: "Srigey" };
let admin = { name: "CUMpot" };

user.f = sayHi;
admin.f = sayHi;


console.log(user.f());
console.log(admin.f());