var questions=[
    "It is not possible to achieve inheritance of structures in c++.",
    "Super classes are also called Parent classes/Base classes",
    "Interpreter programs execute high-level language programs without compiling them into machine language first.",
    "To execute an application in a Windows command prompt, you must specify the name of the application followed by the .exe extension.",
    "The cd command changes directories.",
    "Spaces and commas are allowed in a variable name in C",
    "Only character or integer can be used in switch statement in C",
    "The \"content-type\" header indiactes the content in file is HTML when delivered on the network.",
    "By default, properties in CSS are inherited from parent element to child element.",
    "Padding can be negative."
];

var answers=[0,1,1,0,1,0,1,1,1,0];
var user_ans=[];
var next=document.getElementById("next");
var restart=document.getElementById("restart");
var prev=document.getElementById("prev");
var submit=document.getElementById("submit");
var True=document.getElementById("true");
var result=document.getElementById("result");
var False=document.getElementById("false");
var question= document.getElementById("question");
var user_score=document.getElementById("user_score");
var timer=document.getElementsByClassName("timer")[0];

var score=0;
var counter=0;
timer.classList.add("linep");
question.textContent="Q"+(counter+1)+"."+questions[0];
setTimeout(nextQ,10000);

submit.addEventListener("click",onSubmit);
next.addEventListener("click",nextQ);
restart.addEventListener("click",restartQ);

function reset(){
    timer.classList.add("linep");
    True.classList.remove("colourchange");
    False.classList.remove("colourchange");
    result.style.display="none";

}

function restartQ(){
    reset();
    counter=0;
    question.textContent="Q"+(counter+1)+"."+questions[0];
    score=0;
    user_score.textContent=score;
}


True.addEventListener("click",()=>{
    True.classList.add("colourchange");
    False.classList.remove("colourchange");
    result.style.display="block";
    if(answers[counter]==1)
    {
        score++;
        user_score.textContent=score;
        result.style.color="green";
        result.textContent="Correct Answer :)";
        user_ans.push(1);
    }
    else{
        result.style.color="red";
        result.textContent="Wrong Answer :(";
        user_ans.push(0);
    }
});

False.addEventListener("click",()=>{
    False.classList.add("colourchange");
    True.classList.remove("colourchange");
    result.style.display="block";
    if(answers[counter]==0)
    {
        score++;
        user_ans.push(0);
        user_score.textContent=score;
        result.style.color="green";
        result.textContent="Correct Answer :)";
    }
    else{
        result.style.color="red";
        result.textContent="Wrong Answer :(";
        user_ans.push(1);
    }
    
});

function nextQ(){

    reset();
    
    if(counter<9)
    {
     counter++;
     question.textContent="Q"+(counter+1)+"."+questions[counter];
     setTimeout(nextQ,10000);
    }
    else
     onSubmit();
    
}
if(True.addEventListener==true)
  alert("clicked");
function onSubmit(){

}