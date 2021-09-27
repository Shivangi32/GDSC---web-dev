var questions=[
    "It is not possible to achieve inheritance of structures in c++.",
    "Super classes are also called Parent classes/Base classes",
    "Interpreter programs execute high-level language programs without compiling them into machine language first.",
    "To execute an application in a Windows command prompt, you must specify the name of the application followed by the .exe extension.",
    "The cd command changes directories.",
    "Spaces and commas are allowed in a variable name in C",
    "Only character or integer can be used in switch statement in C",
    "If you don't close the tag for the anchor A, you are still able to access the link in the page.",
    "By default, properties in CSS are inherited from parent element to child element.-t",
    "Padding can be negative.-f"
];

var answers=[];

var next=document.getElementById("next");
var prev=document.getElementById("prev");
var submit=document.getElementById("submit");
var True=document.getElementById("true");
var False=document.getElementById("false");
var question= document.getElementById("question");
var user_score=document.getElementById("user_score");

console.log(question);
var counter=0;
question.textContent="Q"+(counter+1)+"."+questions[0];

function onSubmit(){

}

True.addEventListener("click",True.classList.add("colourchange"));
submit.addEventListener("click",onSubmit());
next.addEventListener("click",function(){
    True.addEventListener("click",True.classList.remove("colourchange"));
    if(counter<9)
    {
     counter++;
     question.textContent="Q"+(counter+1)+"."+questions[counter];
    }
    else
    onSubmit();
})