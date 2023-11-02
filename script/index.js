const corpoSite = document.getElementsByClassName("corpoSite")[0];
const itensConvenio = document.getElementsByClassName("boxConvenio");

let setCorFundo = 0
const fundoAnimado = setInterval(()=>{

    corpoSite.style.background = setCorFundo == 0 ? '#fcfcfc' : '#a8dadc';
    setCorFundo = setCorFundo == 0 ? 1 : 0;

},2000);



let setCorConvenio = 0
const itensConvenioAnimado = setInterval(()=>{

    
     for(let i = 0 ; i<itensConvenio.length ; i++){   
        itensConvenio[i].style.background = setCorConvenio == 0 ? '#fefefe' : '#dcfdba';
       
     }

     setCorConvenio = setCorConvenio == 0 ? 1 : 0;
   
},700);



