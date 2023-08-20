


const interval = setInterval(  () => {

const future = new Date('20 August , 2023 00:00:00').getTime();
const now = new Date().getTime()
const distance = future - now;

const days = Math.floor(distance/(1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)



document.getElementById('days').innerHTML = days
document.getElementById('hours').innerHTML = hours
document.getElementById('minutes').innerHTML = minutes
document.getElementById('second').innerHTML = seconds

},1000)


