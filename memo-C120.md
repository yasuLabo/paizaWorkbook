# 末尾の文字を先頭に持ってくる方法

以下、3つの代表的な方法をまとめたMarkdownです。

---

## 1. `slice` ＋ 文字列連結

```js
const s        = "abcdef";
const lastChar = s.slice(-1);      // "f"
const rest     = s.slice(0, -1);   // "abcde"
const result   = lastChar + rest;  // "fabcde"
```

* `s.slice(-1)` で末尾1文字を取得
* `s.slice(0, -1)` で末尾を除いた文字列を取得
* 末尾文字 + 残り文字列 を連結して完成

---

## 2. `charAt` ＋ `substring`／`substr`

```js
const s         = "abcdef";
const lastChar  = s.charAt(s.length - 1);         // "f"
const rest1     = s.substring(0, s.length - 1);   // "abcde"
const rest2     = s.substr(0, s.length - 1);      // 同様に "abcde"
const result    = lastChar + rest1;               // "fabcde"
```

* `charAt(index)` で末尾文字を取得
* `substring(0, length-1)` または `substr(0, length-1)` で残りを切り出し
* 連結して完成

---

## 3. 配列操作で回転させる

```js
const s     = "abcdef";
const arr   = s.split("");    // ["a","b","c","d","e","f"]
const last  = arr.pop();        // arr → ["a","b","c","d","e"], last → "f"
arr.unshift(last);              // arr → ["f","a","b","c","d","e"]
const result = arr.join("");  // "fabcde"
```

* `split("")` で文字列を配列化
* `pop()` で末尾要素を取得し、`unshift()` で先頭に挿入
* `join("")` で再度文字列に変換

---

