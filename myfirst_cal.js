// var total=document.querySelector('#input')
// function cals(obj){
//     var txet = obj.innerHTML;
//     if(obj.innerHTML =='='){
//     document.querySelector('#input').innerHTML=eval(document.querySelector('#input').innerHTML)
//     document.querySelector('#input').eval(txet.innerHTML)
//     }
//     else {
//         if(total.innerHTML=='0'){
//         document.querySelector('#input').innerHTML=obj.innerHTML
//     }
//     else {
//         document.querySelector('#input').innerHTML+=obj.innerHTML
//     }
// }
// }
// var input1 = document.getElementById('#input')


function cals(obj){
    var set = obj.innerHTML
    if(input.innerHTML == '0'){
        input.innerHTML = set
    }
    else if(set == '='){
    input.innerHTML=eval(input.innerHTML)
    }
    else if(set == "AC"){
        input.innerHTML=''
    }
    else{
        input.innerHTML+=set
    }
}


function dulls(){
    c=input.innerHTML
    c=c.substring(0,c.length-1)
    input.innerHTML=c
}
