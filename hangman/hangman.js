var words=["javascript","squawk","wellspring","amazing","syndrome","galvanize","mystify","numbskull","pneumonia"];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 }
document.querySelector("#word").textContent=answerArray;