//設定とかいろいろするページ
var answers =[];//**配列の宣言 */
var restoration=[];
var placeb =['左上','右上','左下','右下'];
var arrb =['cool','cute','fresh','feminine'];
function judges(test){//**answerページに進めるかの認証 */
    var array = answers;//**今までに選ばれたタイプを取得 */
    array.push(test);//**今回選ばれたタイプを上に加える */
    console.log(array);//**デバッグ用 */
    if(array.length<3){//**累計3回以上選択していない */
        return 'false';//**もう一度選ぶ */
    }else{//**累計3回以上選択 */
  var cool=0;//**タイプの集計 */
  var cute=0;
  var feminine=0;
  var fresh=0;
  for (var i=0;i<array.length;i++){
    switch(array[i]){//**答えのi個目が何かを取得 */
      case 'cool':var cool = cool+1;
      break
      case 'cute':var cute = cute+1;
      break
      case 'feminine':var feminine = feminine+1;
      break
      case 'fresh':var fresh = fresh+1;
      break
    }
    }
    var resnum = [cool,cute,fresh,feminine];//**集計 */
    var max = Math.max.apply(null,resnum);//**一番多いタイプを取得 */
    if(max<2){
        return 'false';//**最も多いタイプが1回ずつしか選ばれていない */
    }else{
        return 'true';//**answerページへ */
    }
}
  }
  function clicked(type){/**click時の関数 */
    let judge = judges(type);//**answerページに進めるかの認証(関数呼び出し) */
    if(judge=='true'){//**次に進む */
        location.href ='answer.html?name=' +answers;//**答えの格納された配列を加えてanswerページを読み込む */
    }else{
        //idのリセット
        for(let i=0;i<arrb.length;i++){//**もう一度選ぶ */
        let id=i+1;
        let onc = document.getElementById(restoration[i]);//**復元用に作った配列から変更されたidを取得 */
        onc.id='a'+id;//**idの復元 */
        }
        restoration.splice(0,arrb.length);//**次の設定に備えて復元用の配列を削除 */
        shuffle();//**画像、名前のシャッフル(関数呼び出し) */
    }
  }

function shuffle(){    //**imgのシャッフル*/
  document.getElementById("js").style.display ="none";//**javascriptが使用可能かの認証*/
  var list = lists();//**リストを取得(関数呼び出し)*/
  var place =placeb.concat();//**写真の場所を取得*/
  var arr =arrb.concat();//**全タイプの取得*/
  var li =arrb.concat();//**全タイプの所得*/
  for(let t=0;t<li.length;t++){
    let rondom = Math.floor( Math.random() * arr.length );//**乱数発生*/
    let type = arr[rondom];//**タイプを選択*/
    let listlen = list[rondom][0].length+1;//**選択されたタイプに登録されている人数を取得*/
    let a = Math.floor( Math.random() * listlen );//**乱数発生*/
    let num = li.indexOf(type);//**選択されたタイプの順番を取得*/
    let reimg = list[num][a][1];//**写真を取得*/
    let id = t+1;
    let img = document.getElementById('image'+id);//**imageタグを取得*/
    img.src = type+'/'+reimg;//**imageタグのsrcを編集*/
    let rehum = list[num][a][0];//**人物名を取得*/
    document.getElementById('p'+id).innerText = place[t]+':'+rehum;//**人物名の書かれたpタグを取得*/
    let onc = document.getElementById('a'+id);//**imageタグの入ったaタグの取得 */
    onc.id=type;//**aタグのidをタイプ名に変更 */
    arr.splice(rondom,1);//**重複を防ぐため、全タイプの格納された配列から設定したタイプを削除 */
    restoration.push(type);//**後にidを復元するため、設定したタイプ順に配列を定義 */
    console.log(type);//**デバッグ用 */
  }
}

  