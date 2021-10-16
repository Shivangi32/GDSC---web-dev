var words=["promise","dictionary","queue","light","money","Darkness","mushroom","breath"];

var riddles=["What can you break, even if you never pick it up or touch it?",
            "Where does today come before yesterday?",
            "What word is pronounced the same if you take away four of its five letters?",
            "What can fill a room but takes up no space?",
            "People make me, save me, change me, raise me. What am I?",
            "The more there is, the less you see. What am I?",
            "What do you call a room with no windows?",
            "I am light as a feather, but not even the strongest girl can hold me for more than 5 minutes. What am I?"
            ];

var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var lives=5;
var idx=Math.floor(Math.random() * words.length);
var curr_word = words[idx];
var riddle= riddles[idx];
var question=document.getElementById("question");
var answerArray = [];
var word=document.getElementById("word");
var cell=document.getElementsByClassName("cell");
question.textContent=riddle;

for (var i = 0; i < curr_word.length; i++) {
 answerArray[i] = "_";
 }
word.textContent=answerArray;

var alphabets=document.getElementById("alphabets");
for(var i=0;i<26;i++)
{
    var btn=document.createElement("button");
    btn.classList.add("btn");
    btn.textContent=letters[i];
    alphabets.appendChild(btn);
    btn.addEventListener("click",(event)=>btnclick(event));
}

function btnclick(e){

    console.log(e);
    e.target.classList.add("selected");
    var ch=e.target.innerHTML;
    if(curr_word.indexOf(ch)==-1)
    {
      lives--;
      cell[lives].style.visibility="hidden";
    }
    else
    {
      console.log(ch);
      for(var j=0;j<curr_word.length;j++)
      {
          if(ch==curr_word[j])
          {
              answerArray[j]=ch;
          }
      }
      word.textContent=answerArray;
    }
}