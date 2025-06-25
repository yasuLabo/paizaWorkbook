// あなたは N 人からなるクラスに所属しています。また、N 人の名前は全て相異なります。

// 今日、クラス委員を決める選挙が行われ、それぞれがクラス委員にふさわしいと思う人の名前を書いて投票しました。
// 最も得票数の多い人がクラス委員に任命されます。

// クラス委員に任命された人の名前を出力するプログラムを作成してください。なお、最も得票数の多い人が複数存在することはないものとします。

// 例えば、入力例 1 の場合、以下のようになります。

// 入力される値
// 入力は以下のフォーマットで与えられます。

// N
// a_1
// a_2
// ...
// a_N
// ・1 行目にクラスの人数を表す整数 N が与えられます。
// ・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、i 番目の生徒が投票したクラスメイトの名前 a_i が与えられます。
// ・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
// ・最も得票数の多い人は 1 人のみです。

// それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください
// 期待する出力
// クラス委員に任命された生徒の名前を英字小文字のみで構成される文字列で出力してください。
// 出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。
// 条件
// すべてのテストケースにおいて、以下の条件をみたします。

// ・1 ≦ N ≦ 100
// ・a_i は英字小文字のみで構成される文字列 (1 ≦ i ≦ N)
// ・1 ≦ (a_i の長さ) ≦ 10 (1 ≦ i ≦ N)
// 入力例1
// 5
// sato
// suzuki
// takahashi
// suzuki
// suzuki
// 出力例1
// suzuki



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
    const N=Number(lines[0]);
    const votes=lines.splice(1,1+N);
    
    
    const counts={};
    for(const name of votes){
        counts[name]=(counts[name]||0)+1;
    }
    
    console.log(counts);
    
    let winner='';
    let maxvotes=-1;
    
    for(const [name,cnt] of Object.entries(counts)){
        if(cnt>maxvotes){
            winner=name;
            maxvotes=cnt;
        }
    }
    console.log(winner);
        
});










