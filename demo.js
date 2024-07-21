let input=document.getElementById("input");
function calculate(num){
    input.value+=num;
}
function result(){
    try{
        input.value=eval(input.value);
}
catch(err){
    input.value="ERROR";

}
}

function clr(){
    input.value=" ";
}
function Delete(){
    input.value=input.value.slice(0,-1);
}
