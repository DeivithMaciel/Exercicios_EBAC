const form = document.getElementById('form-contato');
const listaContatos = document.getElementById('contatos');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (nome && telefone) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
        `;

        listaContatos.appendChild(tr);
        form.reset();
    }
});
