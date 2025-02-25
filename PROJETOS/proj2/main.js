const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();    

    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}