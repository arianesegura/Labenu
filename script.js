function verificaEmail() { /* Função que verifica email */
    if (document.forms["email"].email.value == "" || /* SE estiver string vazia ou... */
        document.forms["email"].email.value.indexOf("@") == -1 || /* SE não tiver o @ retorna falso ou */
        document.forms["email"].email.value.indexOf(".") == -1 /* se não existir @ . ou estiver em branco, retorna false */
    ) {
        alert("E-mail invalido");
        return false; /* SE o email for inválido ele retorna falso */
    }
    alert(`Bem vind@, ${document.getElementById("campo-email").value}!`);
    return true;
}