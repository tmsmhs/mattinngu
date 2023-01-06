//設定とかいろいろ
var answers =[];
var restoration=[];
var placeb =['左上','右上','左下','右下'];
var arrb =['cool','cute','fresh','feminine'];
function judges(test){//結果をジャッジする
    var array = answers;
    array.push(test);
    console.log(array);
    if(array.length<3){
        return 'false';
    }else{
  var cool=0;
  var cute=0;
  var feminine=0;
  var fresh=0;
  for (var i=0;i<array.length;i++){
    switch(array[i]){
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
    var resnum = [cool,cute,fresh,feminine];
    console.log(resnum);
    var max = Math.max.apply(null,resnum);
    if(max<2){
        return 'false';
    }else{
        return 'true';
    }
}
  }
  function clicked(type){
    let judge = judges(type);
    if(judge=='true'){
        location.href ='answer.html?name=' +answers;
    }else{
        //idのリセット
        for(let i=0;i<arrb.length;i++){
        let id=i+1;
        let onc = document.getElementById(restoration[i]);
        onc.id='a'+id;
        }
        restoration.splice(0,arrb.length);
        shuffle();
    }
  }

  //imgのシャッフル
function shuffle(){
  document.getElementById("js").style.display ="none";
  var list = lists();
  var place =placeb.concat();
  var arr =arrb.concat();
  var li =arrb.concat();
  for(let t=0;t<li.length;t++){
    let rondom = Math.floor( Math.random() * arr.length );
    let type = arr[rondom];
    let listlen = list[rondom][0].length+1;
    let a = Math.floor( Math.random() * listlen );
    let num = li.indexOf(type);
    let reimg = list[num][a][1];
    let id = t+1;
    let img = document.getElementById('image'+id);
    img.src = type+'/'+reimg;
    let rehum = list[num][a][0];
    document.getElementById('p'+id).innerText = place[t]+':'+rehum;
    let onc = document.getElementById('a'+id);
    onc.id=type;
    arr.splice(rondom,1);
    restoration.push(type);
    console.log(type);
  }
}

  