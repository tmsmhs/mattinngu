var answers =[];
var restoration=[];
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
  var typearr =[['クールタイプ','キュートタイプ','フレッシュタイプ','フェミニンタイプ'],['cool','cute','fresh','feminine']];
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
    console.log(max);
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


  