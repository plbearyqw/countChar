    function obj2string(o){ 
 var r=[]; 
 if(typeof o=="string"){ 
 return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\""; 
 } 
 if(typeof o=="object"){ 
 if(!o.sort){ 
  for(var i in o){ 
  r.push(i+":"+obj2string(o[i])); 
  } 
  if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){ 
  r.push("toString:"+o.toString.toString()); 
  } 
  r="{"+r.join()+"}"; 
 }else{ 
  for(var i=0;i<o.length;i++){ 
  r.push(obj2string(o[i])) 
  } 
  r="["+r.join()+"]"; 
 } 
 return r; 
 } 
 return o.toString(); 
}

    function countChar(str){
          let arr = str.split('');
          let array = [];
          let max = [];
          arr.forEach(function(item){
                    if(!array.toString() === [].toString() 
                              || !array.find(arg => arg.key === item)){
                              array.push({key:item, count:1});
                    }
                    else{
                              array.find(arg => arg.key === item).count++;
                    }
          });
          array.forEach(function(item){
                    if(max.toString() === [].toString()){
                              max.push(item);
                    }
                    else if(item.count === max[0].count){
                              max.push(item);
                    }
                    else if(item.count > max[0].count){
                              max = [item];
                    }
          });
          return obj2string(max);
}