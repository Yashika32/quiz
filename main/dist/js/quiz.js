window.onLoad=function(){
    show(0);
}
let question = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        option: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run accept memory",
            "None of the Above"

        ]
    },
    {
        id:2,
        question: "What is the full form of CPU ?",
        answer: "Central Processing Unit",
        option: [
            "Central Process Unit",
            "Central Processing Unit",
            "Central preload unit",
            "None of the Above"
        ]

    },
    {   
        id:3,
        question: "What is the full form of E-mail ?",
        answer: "Electronic mail",
        option: [
            "Electric mail",
            "Electric mail",
            "Engine mail",
            "None of the Above"
        ]
    }

];

function submitform(e){
   e.preventDefault();
   let name= document.forms["welcome_form"]["name"].value;
   sessionStorage.setItem("name", name);

   location.href="quiz.html";
}   

let question_count= 0;

function next(){
    question_count++;
    show(question_count);
  
}
function show(count){
let question=document.getElementById("questions");

question.innerHTML="<h2>" + questions[count].question+ "<h2>";

}