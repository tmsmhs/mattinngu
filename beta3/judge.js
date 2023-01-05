function judges(test){//結果をジャッジする
    var query = location.search;
    var value = query.split('=');
    var names =decodeURIComponent(value[1]);
    var array = names.split(',');
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

  function page(type){
    let judge = judges(type);
    if(judge=='true'){
        var query = location.search;
        var value = query.split('=');
          return 'answer.html?name=' +decodeURIComponent(value[1])+','+type;
    }else{
          var query = location.search;
        var value = query.split('=');
        var first =decodeURIComponent(value[1]);
        if(first=='undefined'){
            return 'index.html?name='+type;
        }else{
      return 'index.html?name=' +decodeURIComponent(value[1])+','+type;
        }
    }
  }

  