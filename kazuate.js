// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 4;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let user_click = 0;

// hantei();
// hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = document.querySelector('input').valueAsNumber;
    console.log(yoso);       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    let result = '';
    user_click++;
    if (user_click <= kaisu){
        console.log(user_click + '回目の予想：' + yoso);
        if (yoso === kotae) {
            console.log('正解です。おめでとう！');
            result = '正解です。おめでとう！';
        }else if (yoso > kotae){
            console.log('間違い．答えはもっと小さいですよ．');
            result = '間違い．答えはもっと小さいですよ．';
        }else {
            console.log('間違い．答えはもっと大きいですよ．');
            result = '間違い．答えはもっと大きいですよ．';
        }
    }else {
        result = '答えは' + kotae + 'でした．すでにゲームは終わっています';
    }
    let p_result = document.querySelector('p#result');
    p_result.textContent(result);
        //    ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    let p_answer = document.querySelector('p#answer');
    p_answer.textContent = kotae;
}
document.querySelector('form').addEventListener('submit', hantei);


//

// document.querySelector('form').addEventListener('submit', hantei =>{
//     let kotae = Math.floor(Math.random()*10 +1);
//     console.log('答え: ' + kotae);
//     let kaisu = 4;
//     let user_click = 0;
//     let yoso = document.querySelector('input').valueAsNumber;
//     console.log(yoso);
//     let result = '';
//     user_click++;
//     if (user_click <= kaisu){
//         console.log(user_click + '回目の予想：' + yoso);
//         if (yoso === kotae) {
//             console.log('正解です。おめでとう！');
//             result = '正解です。おめでとう！';
//         }else if (yoso > kotae){
//             console.log('間違い．答えはもっと小さいですよ．');
//             result = '間違い．答えはもっと小さいですよ．';
//         }else {
//             console.log('間違い．答えはもっと大きいですよ．');
//             result = '間違い．答えはもっと大きいですよ．';
//         }
//     }else {
//         result = '答えは' + kotae + 'でした．すでにゲームは終わっています';
//     }
//     let p_result = document.querySelector('p#result');
//     p_result.textContent(result);
// })