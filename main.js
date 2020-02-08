

var str=" i love java script";
function reverce(str){
    var st="";//store yhe looped result 
    for(var i=str.length-1;i>=0;i--){
        // length of string is alaws 1 less 
        st+=str[i];
    }
    return st;
}
var result = reverce(str);
console.log(result);



function reverceString(sr){
    if(sr===""){
        return "";
    }else{
        return reverceString(sr.substr(1))+sr.charAt(0);
    }
}
console.log(reverceString(str));


function methodReverce(str){
    var arrString =str.split("");
    var arrReverce = arrString.reverse();
    var resultReverce = arrReverce.join("");
    return resultReverce;
    }
console.log(methodReverce(str));

