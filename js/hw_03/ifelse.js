
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

"use strict";
//let result = (a + b < 4) ? 'Malo' : 'Mnogo';


let login = prompt('Kto vi?');

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Hello' :
        (login == '') ? 'there is no login' :
            '';

alert(message);
