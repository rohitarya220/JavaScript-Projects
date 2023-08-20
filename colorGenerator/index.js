const getColor = ()=>{
    const randomNumber =Math.floor( Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.querySelector('#color-code').innerText= randomCode;
  navigator.clipboard.writeText(randomCode);
}
getColor();


// const getColor =() => {

//   const randomNumber = Math.floor(Math.random() * 13205120 )
//   const randomCode = '#' + randomNumber.toString(19)
//   document.body.style.backgroundColor= randomCode
//   document.querySelector('#color-code').innerText = randomCode
//   navigator.clipboard.writeText(randomCode);
  
// }

// getColor()



// const getColor = ()=> {

//   const randomNumber = Math.floor(Math.random() * 16777215);
//   const randomCode = '#' + randomNumber.toString(16);
//   document.body.style.backgroundColor = randomCode;
//   document.querySelector('#color-code').innerHTML = randomCode
//   console.log(randomCode);
// }
// getColor()







// const getColor = ()=> {

//   const randomNumber = Math.floor(Math.random() * 166665);
//   const randomCode = ' #' + randomNumber.toString(16);
//   document.body.style.backgroundColor = randomCode;
//   document.querySelector('#color-code').innerText = randomCode;
// }
// getColor();


const button = document.querySelector('#btn');
  
button.addEventListener('click', function(){

  const randomNumber2 = Math.floor(Math.random() * 16777215);
  const randomCode2 = ' #' + randomNumber2.toString(19);

 document.querySelector('.container').style.backgroundColor = randomCode2;
 document.querySelector('#btn').style.backgroundColor = randomCode2;

});
  


button.addEventListener('click', function(){
  const randomNumber2 = Math.floor(Math.random() * 16777215);
  const randomCode2 = ' #' + randomNumber2.toString(16);

//  document.querySelector('.container').style.backgroundColor = randomCode2;
 document.querySelector('#btn').style.backgroundColor = randomCode2;

});

