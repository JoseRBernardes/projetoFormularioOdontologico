// ELEMENTOS DA PAGINA INDEX
const btnCadastrar = document.getElementById("btnCadastrar")
const inputCep = document.getElementById("cep")
const nomePaciente = document.getElementById("nomePaciente")
const dataNascimento = document.getElementById("nasc")
const mae = document.getElementById("mae")
const pai = document.getElementById("pai")
const cpf = document.getElementById("cpf")
const tel1 = document.getElementById("tel1")
const tel2 = document.getElementById("tel2")
const nCasa = document.getElementById("nCasa")
const divCep = document.getElementById("divCep")

//FUNCOES DA PAGINA INDEX
const cadastrarPaciente = () =>{
   if(camposObrigatorios()){
    console.dir(montaCadastro())
   } 

}

const procurarLogradouro = async ()=>{

  const  componente = "<div id=\"divCepCarregando\" class=\"spinner-grow text-primary\"role=\"status\"><span class=\"visually-hidden\">Loading...</span></div>"

    if(inputCep.value.length > 0){
     await requestBucasporCep(inputCep.value)
    }
}

const camposObrigatorios =()=>{
    if(nomePaciente.value.length <= 0){
        alert("O nome do paciente é obrigatório")
        return false
    }else{
        if(dataNascimento.value.length <= 0){
            alert("A data de nascimento do paciente é obrigatória")
            return false; 
        }else{
            return true;
        }
    }
}



//EVENTOS DOM
btnCadastrar.addEventListener('click', cadastrarPaciente)
inputCep.addEventListener('blur', procurarLogradouro)
nomePaciente.addEventListener('input', somenteLetras)
mae.addEventListener('input', somenteLetras)
pai.addEventListener('input', somenteLetras)
cpf.addEventListener('input', somenteNumeros)
tel1.addEventListener('input', somenteNumeros)
tel2.addEventListener('input', somenteNumeros)
nCasa.addEventListener('input', somenteNumeros)
inputCep.addEventListener('input', somenteNumeros)



