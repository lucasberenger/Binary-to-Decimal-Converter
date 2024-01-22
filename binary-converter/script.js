const input = document.querySelector('input');
const button = document.querySelector('#converte')
const resultBox = document.getElementById('result-box');

function checkBinary(bin) { 
    for(i of bin) {
      if(i !== '0' && i !== '1') {
        resultBox.innerText = 'Insert a binary number.'
      } else if( i == ''){
        resultBox.innerText = 'Empty value is not allowed'
      } else {
        let decimal = parseInt(bin, 2)
        resultBox.innerText = decimal
      }
    }
}

button.addEventListener('click', () => {
    const entrada = input.value;
    checkBinary(entrada);
})
    



    


    
    








