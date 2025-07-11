// あなたは、さまざまな花のリースを販売している業者です。

// あなたは、お客さんのわかりやすさのため、種類の同じリースは同じ箱に分けて並べることにしました。
// リースは複数の種類の花からなり、花が手前を向くように並べた場合が表です。
// 2 つのリースが同じ種類のリースであるとは、共に表にした状態で、回転させることで同じ並びにすることができることを言います。
// 同じ花の数からなる 2 つのリースが与えられるので、これらが同じ種類であるか判定するプログラムを作成してください。



// 評価ポイント
// 10回のテストケースで、正答率、実行速度、メモリ消費量をはかり得点が決まります。
// より早い解答時間で提出したほうが得点が高くなります。
// 複数のテストケースで正しい出力がされるか評価（+50点）
// 解答までの速さ評価（+50点）
// 入力される値
// 入力は以下のフォーマットで与えられます。

// N
// S_1
// S_2
// ・1 行目には、リースを構成する花の数を表す整数 N が与えられます。
// ・2 行目には、1 つめのリースの状態を表す文字列 S_1 が与えられます。S_1 は英字小文字からなり、それぞれの文字が花の種類に対応します。同じ種類の文字の場合は同じ種類の花であることを表します。
// ・3 行目には、2 つめのリースの状態を表す文字列 S_2 が与えられます。S_1 と同様に、英字小文字からなります。
// ・入力は合計で 3 行となり、入力値最終行の末尾に改行が 1 つ入ります。

// それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// 1 つ目のリースと 2 つ目のリースが同じ種類である場合は "Yes" を、そうでなければ "No" を出力してください。
// 末尾に改行を入れ、余計な文字、空行を含んではいけません。

// 条件
// すべてのテストケースにおいて、以下の条件をみたします。

// ・1 ≦ N ≦ 1,000
// ・(S_1 の長さ) = (S_2 の長さ) = N
// ・S_1, S_2 は英字小文字からなる
// 入力例1
// 5
// baaab
// aabba
// 出力例1
// Yes
// 入力例2
// 5
// baaab
// abaab
// 出力例2
// No


process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const N=parseInt(lines[0],10);
  const beforeA=lines[1];
  const B=lines[2];
  
  let afterA=lines[1];
  let bool=false;
  
  for(let i=0;i<beforeA.length;i++){
      const lastChara=afterA.slice(-1);
      const rest=afterA.slice(0,-1);
      afterA=lastChara+rest;
      
      if(afterA===B){
          console.log('Yes');
          bool=true;
          break;
      }
  }
  if(!bool){
      console.log('No');
  }
  
  
});


