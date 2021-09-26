var questions=[
    "It is not possible to achieve inheritance of structures in c++?",
    "Super classes are also called Parent classes/Base classes",
    "Interpreter programs execute high-level language programs without compiling them into machine language first.",
    "To execute an application in a Windows command prompt, you must specify the name of the application followed by the .exe extension.",
    "The cd command changes directories.",
    "Spaces and commas are allowed in a variable name in C",
    "Only character or integer can be used in switch statement in C",
    "If you don't close the tag for the anchor A, you are still able to access the link in the page."
];

var next=document.getElementById("next");
var prev=document.getElementById("prev");
var submit=document.getElementById("submit");
var True=document.getElementById("true");
var False=document.getElementById("false");
var question= document.getElementById("question");
console.log(question);
for(var i=0;i<questions.length;i++)
   question.textContent="Q"+i+"."+questions[i];