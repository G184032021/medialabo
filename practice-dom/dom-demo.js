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

// id が sevenOcean の h2 要素を検索
// （次の行を完成させる）
let h2sevenOcean = document.querySelector('h2#sevenOcean');

// 7大洋　の名前を配列に代入
let oceans = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]

// ul 要素を新規作成する．（次の行を完成させる）
let ul1 = document.createElement('ul');

// ul 要素を h2sevenOcean の次に追加する（次の行を書く）
h2sevenOcean.insertAdjacentElement('afterend',ul1)

// ul に7つの大陸を追加する
for (let o of oceans) {
  // （この中を完成させる）
    let li = document.createElement('li');
    li.textContent = o;
    ul1.insertAdjacentElement('beforeend',li);
}

let h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '10pt';

let h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
    h2.style.backgroundColor = 'palegreen'
}

let ls = document.querySelectorAll('li');
for (let li of ls) {
    li.classList.add('orangeUnderline');
}