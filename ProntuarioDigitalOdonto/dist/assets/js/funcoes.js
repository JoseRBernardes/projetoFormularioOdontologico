const montaCadastro = () =>{
    const cadastroPaciente ={
        nome: document.getElementById("nomePaciente").value,
        nascimento: document.getElementById("nasc").value,
        sexo: document.getElementById("radioMasculino").checked ? 1 : 2,
        mae: document.getElementById("mae").value,
        pai: document.getElementById("pai").value,
        tel1: document.getElementById("tel1").value,
        tel2: document.getElementById("tel2").value,
        cpf: document.getElementById("cpf").value,
        rg: document.getElementById("rg").value,
        cep: document.getElementById("cep").value,
        nCasa: document.getElementById("nCasa").value,
        logradouro: document.getElementById("logradouro").value,
        complemento: document.getElementById("complemento").value
    }
    return cadastroPaciente
}

const somenteLetras = (evento) =>{
    const valorDigitado = evento.target.value

    let correcao = valorDigitado.replace(/[0-9]/g,"")

    evento.target.value = correcao
}


const somenteNumeros = (evento) =>{
    const valorDigitado = evento.target.value

    let correcao = valorDigitado.replace(/\D/g, '')

    evento.target.value = correcao
}

const dataAtualPadraoPagina = ()=>{
    let dataAtual = new Date();

    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;
    let dia = dataAtual.getDate();

    return dia+"/"+mes+"/"+ano
}
