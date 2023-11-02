async function requestBucasporCep(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`

    try{
         const resposta = await fetch(url);
         const dadosResposta = await resposta.json();
         
         if (!dadosResposta.erro) {
            document.getElementById("logradouro").value = dadosResposta.logradouro +", "+ dadosResposta.bairro +", "+ dadosResposta.localidade +"-"+dadosResposta.uf
        } else {
            console.log('CEP não encontrado.');
        }
    }catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
    
}