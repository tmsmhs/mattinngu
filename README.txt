このプログラムの取扱説明書
　正規版
  url=https://tmsmhs.github.io/mattinngu
　１．現段階でのプログラムの説明
　　画像がクリックされると、それぞれの画像に対応したjavascript関数（以後、js関数という）が発現する。
  　　キュート：cute()　クール：cool()　フェミニン：feminine()　フレッシュ：fresh()
   js関数では、次のページのurlの後ろに選んだパラメーターを追加してページを開く。
   answerページでは、このパラメーターを読み取り、一番多いパラメーターを検出する。
   参考：https://www.sejuku.net/blog/52234
 ２．ページ追加の方法
 　middle.htmlのコピーを作成し、前のページと追加したページのjs関数の次のページを変更する。
  画像はonclick="---()"の---の部分と属性が同じであればファイル名は問わない。
 ３．answerページの変更
 　typearrを変更する。
 
  Beta版
  url=https://tmsmhs.github.io/mattinngu/beta
  正規版との違い
  画像が毎回シャッフルされる。選ばれた選択が確実でない（それぞれの属性を一度ずつしか選んでいない）場合、正規版では最後の選択を使用するが、beta版では途中のページからやり直しとなる。
 
 Beta2版
 url=https://tmsmhs.github.io/mattinngu/beta2
 正規版、beta版との違い
 list.js内に登録されている中から写真が選ばれる。
 結果は登録されている結果の属性にあった人の中からランダムに選出される
