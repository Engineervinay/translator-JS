var btnTranslate=document.querySelector("#btn");
var inText=document.querySelector("#inputText");
var outText=document.querySelector("#outputText");

function errorHandler(error)
{
    console.log("you have error:" , error)
    alert("maximum limit reach for today!! try again after 1 hour")
}
function clickEventListener(){
    
    url="https://api.funtranslations.com/translate/leetspeak.json?text="+inText.value;
    fetch(url)
    .then (response=>response.json())
    .then(json=>outText.innerText=json.contents.translated)
    .catch(errorHandler)


}
btnTranslate.addEventListener("click",clickEventListener);

//console.log(btnTranslate);