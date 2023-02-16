const form = document.querySelector('form');
/* console.log(form); */

function comparadorValida(number1, number2) {
    return number2 > number1;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const numA = parseInt(document.querySelector('#num-a').value);
    const numB = parseInt(document.querySelector('#num-b').value);
    const msgSucesso = `Você operou <b>corretamente</b> o aplicativo! ${numB} é <b>maior</b> que ${numA}.`;
    const msgError = `Você operou <b>erroneamente</b> o aplicativo! ${numB} <b>não é</b> maior que ${numA}.`;
    const msgDisplay = document.querySelector('#msg-display');
    
    msgDisplay.classList.remove('sucess');
    msgDisplay.classList.remove('error');

    if (comparadorValida(numA, numB) === true) {
        console.log(comparadorValida(numA, numB));
        console.log('sucesso');

        msgDisplay.classList.add('sucess')
        msgDisplay.innerHTML = msgSucesso;

        document.querySelector('#num-a').value = '';
        document.querySelector('#num-b').value = '';

        setTimeout(() => msgDisplay.classList.remove('sucess'), 5000);
    } 
    else {
        console.log(comparadorValida(numA.value, numB.value));
        console.log('error');
        
        msgDisplay.classList.add('error');
        msgDisplay.innerHTML = msgError;

        setTimeout(() => msgDisplay.classList.remove('error'), 5000);
    }

})