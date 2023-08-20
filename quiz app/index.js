
const quizData = [{
  question: "Which of the following is a client site language?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d"
},
{
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a"
},
{
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b",
},
{
  question: "What does CSS stands for?",
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "b"
},

{
  question:  'Who is the father of HTML?',
a: 'Rasmus Lerdorf',
b: 'Tim Berners-Lee',
c: 'Brendan Eich',
d: 'Sergey Brin',
correct: "b"
},

{
  question:'Which of the following is used to read an HTML page and render it?',
 
a: 'Web server',
b: 'Web network',
c: 'Web browser',
d: 'Web matrix',
correct: "c"
},

{
  question: 'Which of the following is not a HTML5 tag?',
  a: '<track>',
  b: '<video>',
  c: '<slider>',
  d: '<source>',
  correct: "a"
},

{
  question: " Which element is used for or styling HTML5 layout?",
  a: "CSS",
  b: "jQuery",
  c: "JavaScript",
  d: "PHP",
  correct: "a"
},

{
  question:' Which of the following HTML tag is used to create an unordered list?',
a: '<ol>',
b: '<ul>',
c: '<li>',
d: '<ll></ll>',
correct: "b"
},

{
  question: 'How to create a checkbox in HTML Form?',
a: '<input type=”text”>',
b: '<input type=”textarea”>',
c: '<input type=”checkbox”>',
d: '<input type=”button”></input>',
correct: "c"
}

];


let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input")

const loadQuestion = () => {
if (total === index) {
  return quizEnd()
}
reset()

const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
  const data = quizData[index]
  const ans = getAnswer()
  if (ans === data.correct) {
      correct++;
  } else {
      incorrect++;
  }
  index++;
  loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
  (inputEl) => {
      if (inputEl.checked) {
          ans = inputEl.value;
      }
  }
)
return ans;
}

const reset = () => {
allInputs.forEach(
  (inputEl) => {
      inputEl.checked = false;
  }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
  <div class="col">
      <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
  </div>
`
}
loadQuestion(index);