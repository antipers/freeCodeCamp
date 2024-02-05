
// "use strict";
//let CompanyName= prompt('Какое «официальное» название JavaScript?','');
// if (CompanyName=='ECMASscript') {
//     alert('Верно!');

// } else {
//     alert('Не знаете? “ECMAScript”!')  ;
// }


//"use strict";
// let InputNumb =prompt('Input your number');
// if (InputNumb>0) {
//     alert(1);

// } else if (InputNumb<0) {
//     alert(-1);

// } else {
//     alert(0);
// }

//let result = (a + b < 4) ? 'Malo' : 'Mnogo';


// let login = prompt('Kto vi?');
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Hello' :
//         (login == '') ? 'there is no login' :
//             '';
// alert(message);



// "use strict";
// let age = prompt('How old are you?');
// if (age <= 14)  {

//     alert('child');
// }
// else {
//     alert('boomer');
// }



// "use strict";
// let age=prompt('How old are you?');
// if (age>=14 && age<=90) {
//     alert('WIN');
// }
// else{
//     alert('Sorry')
// }


// "use strict";
// // v1
// let age=prompt('How old are you?');
// if (age<14 || age>90) {
//     alert('out of range');
// }
// else{
//     alert('in range');}

//v2
// "use strict";
// let age=prompt('How old are you?');
// if (!(age>=14 && age<=90)) {
//     alert('out of range');
// }
// else{
//     alert('in range')
// }


"use strict";

let login = prompt('Enter login');
if (login === 'Админ') {

    let password = prompt('Enter password');

    if (password === 'Я главный') {
        alert('Здравствуйте');
    } else if (password === '' || password=== null) {
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }
}
else if (login === '' || login=== null) {
    alert('Отменено');
}
else {
    alert('Я вас не знаю');
}


