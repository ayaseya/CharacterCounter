(function(){// 即時関数(定義と呼び出しを同時に行う)
  'use strict' // strictモード　エラーチェックが厳格に行われる

  // id input_textのエレメントを取得
  var e = document.getElementById('input_text');

  // 入力可能な文字数の初期値を設定
  document.getElementById('counter').innerHTML = '10';

  // keyupのイベント発生時に、入力文字数をコンソールに出力
  e.addEventListener('keyup', function(){
    // console.log(e.value);
    // console.log(e.value.length);

    // テキストエリアの文字列を変数に代入
    var str = e.value;

    // 正規表現を使用して改行を削除
    str = str.replace(/\r?\n/g, '');

    // 残りの入力可能な文字数を表示
    // console.log(str.length);
    var remaining = 10 - str.length;

    // 上限を超えたら残り入力可能な文字数を0にする
    if(remaining < 0) {
      remaining = 0;
    }

    // 反映
    document.getElementById('counter').innerHTML = remaining;

    // 残りの入力可能な文字数が0文字を下回ると文字色を赤色に変更
    if(remaining <= 0) {
      document.getElementById('wrap').style.color = 'red';
    } else {
      document.getElementById('wrap').style.color = 'black';
    }
  });
})();
