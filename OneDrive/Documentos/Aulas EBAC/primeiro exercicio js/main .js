//mensagens diretas á mim mesmo, ignore-as se quiser
//colocar o conteúdo nas variantes para poder modificalas
const form = document.getElementById('validation'); 
const answer = document.getElementById('response');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    //a parte mais dificil de entender, repetir em outras situações
    const campoA = +document.getElementById('campoA').value;
    const campoB = +document.getElementById('campoB').value;

    //simbolo + transforma text em number, melhor não esquecer disso (+ = parseFloat)
    if (campoB > campoA) {
        answer.textContent = 'Formulário válido!';
    } else {
        answer.textContent = 'Formulário inválido!';
    }
});

