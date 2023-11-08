//PARAMETROS DE CONFIGURAÇÃO
const numerosEmIngles = ['',
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
];
let quantidadeAtestados = 1
let quantidadePrescricao = 1

//ENUM
const itemSelecionado={
    evolucao : 0,
    prescricao : 1,
    atestado : 2,
    btnAddAtestado : 3,
    btnAddPrescricao : 4
}


// ELEMENTOS DA PAGINA INDEX
const iconeEvolucao = document.getElementById("iconeEvolucao") 
const iconePrescricao = document.getElementById("iconePrescricao")
const iconeAtestado = document.getElementById("iconeAtestado")

const btnEvolucao = document.getElementById("btnEvolucao") 
const btnPrescricao = document.getElementById("btnPrescricao")
const btnAtestado = document.getElementById("btnAtestado")

const boxEvolucao = document.getElementById("boxEvolucao") 
const boxPrescricao = document.getElementById("boxPrescricao")
const boxAtestado = document.getElementById("boxAtestado")

const accordionAtestado = document.getElementById("accordionAtestado")
const inputAtesdadoCid = document.getElementById("inputAtesdadoCid")
const inputAtesdadoQtd = document.getElementById("inputAtesdadoQtd")
const inputAtesdadoComplemento = document.getElementById("inputAtesdadoComplemento")
const btnAddAtestado = document.getElementById("btnAddAtestado")

const accordionReceituario = document.getElementById("accordionReceituario")
const inputPrescricao = document.getElementById("inputPrescricao")
const inputPrescricaoQtd = document.getElementById("inputPrescricaoQtd")
const inputPrescricaoRecomendacoes = document.getElementById("inputPrescricaoRecomendacoes")
const btnAddPrescricao = document.getElementById("btnAddPrescricao")

//FUNCOES DA PAGINA INDEX

const itemSelecionadoMenu = (item) =>{

        iconeEvolucao.src ="./assets/images/Evolucao.png"
        btnEvolucao.style.backgroundColor = '#FFFFFF'
        iconePrescricao.src ="./assets/images/prescricao.png"
        btnPrescricao.style.backgroundColor = '#FFFFFF'
        iconeAtestado.src ="./assets/images/atestado-medico.png"
        btnAtestado.style.backgroundColor = '#FFFFFF'
        boxEvolucao.style.display ='none'
        boxPrescricao.style.display ='none'
        boxAtestado.style.display ='none'


    if(item == itemSelecionado.evolucao){
        iconeEvolucao.src ="./assets/images/EvolucaoB.png"
        btnEvolucao.style.backgroundColor = '#3a57e8'
        boxEvolucao.style.display ='block'
    }

    if(item == itemSelecionado.prescricao){
        iconePrescricao.src ="./assets/images/prescricaoB.png"
        btnPrescricao.style.backgroundColor = '#3a57e8'
        boxPrescricao.style.display ='block'
    }

    if(item == itemSelecionado.atestado){
        iconeAtestado.src ="./assets/images/atestado-medicoB.png"
        btnAtestado.style.backgroundColor = '#3a57e8'
        boxAtestado.style.display ='block'
    }
}

const gerarAtestado =()=>{
    
    let componente ="<div id=\"Atestado"+ quantidadeAtestados +"\" class=\"accordion-item\">"
    componente +="<h4 class=\"accordion-header\" id=\"heading"+ numerosEmIngles[quantidadeAtestados] +"\">"

    componente +="<button class=\"accordion-button collapsed\" type=\"button\"data-bs-toggle=\"collapse\" data-bs-target=\"#collapse"+ numerosEmIngles[quantidadeAtestados] +"\" aria-expanded=\"false\" aria-controls=\"collapse"+ numerosEmIngles[quantidadeAtestados] +"\">"

    componente +="Atestado"+" "+dataAtualPadraoPagina()+"<span onclick=\"removerItem(Atestado"+ quantidadeAtestados +","+ itemSelecionado.btnAddAtestado +")\" class=\"apagar\">&emsp;🗑</span>"

    componente +="</button>"
    componente +="</h4>"
    componente +="<div id=\"collapse"+ numerosEmIngles[quantidadeAtestados] +"\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading"+ numerosEmIngles[quantidadeAtestados] +"\" data-bs-parent=\"#accordionExample\">"

    componente +="<div class=\"accordion-body\">"
    componente +="<p>"
    componente += "CID:" + inputAtesdadoCid.value.toUpperCase() +"<br/>"+ inputAtesdadoQtd.value+" dias de afastamento<br/>"+inputAtesdadoComplemento.value+"<br/><span onclick=\"gerarPdf()\">Imprimir</span>"
    componente +="</p>"
    componente +="</div></div></div>"

    accordionAtestado.innerHTML += componente
    quantidadeAtestados += 1
}

const gerarPrescricao =()=>{
    
    let componente ="<div id=\"Prescricao"+ quantidadePrescricao +"\" class=\"accordion-item\">"
    componente +="<h4 class=\"accordion-header\" id=\"heading"+ numerosEmIngles[quantidadePrescricao] +"\">"

    componente +="<button class=\"accordion-button collapsed\" type=\"button\"data-bs-toggle=\"collapse\" data-bs-target=\"#collapse"+ numerosEmIngles[quantidadePrescricao] +"\" aria-expanded=\"false\" aria-controls=\"collapse"+ numerosEmIngles[quantidadePrescricao] +"\">"

    componente += inputPrescricao.value+" "+inputPrescricaoQtd.value+"<span onclick=\"removerItem(Prescricao"+ quantidadePrescricao +","+ itemSelecionado.btnAddPrescricao +")\" class=\"apagar\">&emsp;🗑</span>"

    componente +="</button>"
    componente +="</h4>"
    componente +="<div id=\"collapse"+ numerosEmIngles[quantidadePrescricao] +"\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading"+ numerosEmIngles[quantidadePrescricao] +"\" data-bs-parent=\"#accordionExample\">"

    componente +="<div class=\"accordion-body\">"
    componente +="<p>"
    componente += inputPrescricaoRecomendacoes.value+"<br/>"
    componente +="</p>"
    componente +="</div></div></div>"

    accordionReceituario.innerHTML += componente
    quantidadePrescricao += 1
}

const removerItem = (idItem, btn) =>{
   if(btn === itemSelecionado.btnAddAtestado){
      accordionAtestado.removeChild(idItem)
   }

   if(btn === itemSelecionado.btnAddPrescricao){
      accordionReceituario.removeChild(idItem)
   }    
}

const gerarPdf =()=>{
    const doc = new jsPDF();

    doc.text('O belisco não gosta de trabalhar', 10, 10);

    doc.save('documento.pdf');
}

//EVENTOS DOM

btnAddAtestado.addEventListener('click' ,gerarAtestado)
btnAddPrescricao.addEventListener('click', gerarPrescricao)