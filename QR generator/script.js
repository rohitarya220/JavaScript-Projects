

const qrText = document.getElementById('qr-text')
const sizes = document.getElementById('sizes')
const generateBtn = document.getElementById('generateBtn')
const downloadBtn = document.getElementById('downloadBtn')

const qrContainer = document.querySelector('.qr-body')

let size = sizes.value;


generateBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        isEmptyInput()
       
})
sizes.addEventListener('change', (e) =>{
    size = e.target.value;
    isEmptyInput()
})

downloadBtn.addEventListener('click', () =>{
    let img = document.querySelector('.qr-body img')
    if(img !== null){
        let imgAtrr = img.getAttribute('src')
        downloadBtn.setAttribute('href', imgAtrr);
    }
    else{
        downloadBtn.setAttribute('href',` ${document.querySelector('canvas').toDataURL()}`);
    }
})


function isEmptyInput() {

    // if(qrText.value.lenght > 0){
    //     generateQrCode();
    // }
    // else{
    //     alert('Enter the text or URL to generate the QR code')
    // }
    qrText.value.length > 0 ? generateQrCode(): 
    alert('Enter the text or URL to generate the QR code')
 }
function generateQrCode(){
    qrContainer.innerHTML = ''
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:'#fff',
        colorDark: '#000',
        
        
    })
}