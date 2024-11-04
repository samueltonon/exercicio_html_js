document.getElementById('valid').addEventListener('submit', function(event) { 
    event.preventDefault();

    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);

    const resultElement = document.querySelector('.result');

    if(valorB > valorA) {
        resultElement.textContent = 'Válido! B é maior que A!';
        resultElement.classList.remove('error');
        resultElement.classList.add('succes');
        resultElement.style.display = 'block';
    } else {
        resultElement.textContent = 'Inválido! B deve ser maior que A!';
        resultElement.classList.remove('succes');
        resultElement.classList.add('error');
        resultElement.style.display = 'block';
    }
});