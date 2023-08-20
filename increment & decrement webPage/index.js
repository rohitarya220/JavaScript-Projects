const countValue = document.querySelector('#counter')


function increment(){
    // get the value from ui
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value onto ui
    countValue.innerText= value
    
};
function decrement(){
  // get the value from ui
  let value = parseInt(countValue.innerText);
  // update the value
  value = value -1;
  // set the value onto ui
  countValue.innerText= value
  

}


