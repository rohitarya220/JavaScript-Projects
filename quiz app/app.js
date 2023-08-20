
const questions = [{
   'question' : "Which of the following is a client site language?",
   'a' : "Java",
   'b' : "C",
   'c' : "Python",
   'd' : "JavaScript",
   'correct': "d"
  },
  {
   'question': "What does HTML stand for?",
   'a': "Hypertext Markup Language",
   'b': "Cascading Style Sheet",
   'c': "Jason Object Notation",
   'd': "Helicopters Terminals Motorboats Lamborginis",
   'correct': "a"
  },
  {
   'question': "What year was JavaScript launched?",
   'a': "1996",
   'b': "1995",
   'c': "1994",
   'd': "none of the above",
   'correct': "b",
  },
  {
   'question': "What does CSS stands for?",
   'a': "Hypertext Markup Language",
   'b': "Cascading Style Sheet",
   'c': "Jason Object Notation",
   'd': "Helicopters Terminals Motorboats Lamborginis",
   'correct': "b"
  }
  
  ];



let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById('quesBox')
const optionsInputs = document.querySelectorAll('.options')


  const loadQuestion = () => {

    
   if(index===total){
    return endQuiz()
   }
  reset()

 
  
   const data = questions[index]
   quesBox.innerHTML = `${index + 1})  ${data.question}`;
    
   optionsInputs[0].nextElementSibling.innerHTML = data.a ;
   optionsInputs[1].nextElementSibling.innerHTML = data.b ;
   optionsInputs[2].nextElementSibling.innerHTML = data.c ;
   optionsInputs[3].nextElementSibling.innerHTML = data.d ;
  }




const submitQuiz = () =>{
  const data = questions[index]
const answer = getAnswer()
if(answer== data.correct ){
  right++
}else{
  wrong++
}
index++;
loadQuestion()
return

}




const getAnswer = () => {
  let answ ;
  optionsInputs.forEach(
    (ans)=>{
          if(ans.checked){
             answ = ans.value
          }
    }
  )
  return answ
}


 const reset = () =>{
  optionsInputs.forEach(
    (ans)=>{
       ans.checked = false   
          })
 }



 
const endQuiz = () => {
  document.getElementById('box').innerHTML = `
  <h3>Thank you for playing the quiz <h3>
  <h2> ${right} / ${total} are correct <h2>
  `
 }

 document.querySelector('.pre').addEventListener('click',function(){
  index--
  loadQuestion()
})
 document.querySelector('.next').addEventListener('click',function(){
  index++
  loadQuestion()
})
loadQuestion()






