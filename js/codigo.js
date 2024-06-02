let convidado = [];
let ul = document.getElementById("lista");

function cadastrar_convidado() {
    let p = document.getElementById("i_convidados").value;
    convidado.push(p);
    document.getElementById("i_convidados").value = "";
    desenha_lista();
}

function remover_convidado() {
    convidado.pop();
    desenha_lista();
}

function desenha_lista() {
    ul.innerHTML = "";
    for (let x = 0; x < convidado.length; x++) {
        ul.innerHTML += `<li> ${convidado[x]} </li>`;
    }
}
