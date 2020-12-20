var btnTranslate=document.querySelector("#btn");
var inText=document.querySelector("#inputText");
var outText=document.querySelector("#outputText");

function clickEventListener(){
    outText.innerText=" hello " + inText.value;
  
}
btnTranslate.addEventListener("click",clickEventListener);

//console.log(btnTranslate);