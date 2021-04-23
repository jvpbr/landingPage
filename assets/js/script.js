let nome = document.querySelector('#nome')
let email = document .querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        nome.style.borderColor = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nome.style.borderColor = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        email.style.borderColor = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        email.style.borderColor = "green"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensgem")

    if(mensagem.value.length >= 100 && mensagem.value.length > 0){
        txtMensagem.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtMensagem.style.color = "red"
        mensagem.style.borderColor = "red"
        txtMensagem.style.display = "block"
    }else{
        txtMensagem.style.display = "none"
        mensagem.style.borderColor = "gray"
        mensagemOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Mensagem enviada com sucesso!")
    }else{
        alert("Preencha corretamente")
    }
}