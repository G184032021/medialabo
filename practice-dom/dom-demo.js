let ul = document.querySelector('ul');
//remove
document.querySelector('li#EU').remove();

//add
let li1 = document.createElement('li');
li1.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend',li1);

let li2 = document.createElement('li');
li2.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend',li2);

//change 6 to 7
// let h2s = document.querySelectorAll('h2');
// for (h2 of h2s) {
//     if (h2.textContent === '6つの大陸'){
//         document.createElement('h2').textContent == '7つの大陸';
//     }
// }
