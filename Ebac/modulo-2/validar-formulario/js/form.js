const form = document.getElementById("form");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const email = document.getElementById("e-mail");
const cep = document.getElementById("cep");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");
const rua = document.getElementById("rua");
const mensagem = document.getElementById("mensagem")
const notNull = document.getElementsByClassName("not-null")
const msg = ""

function isEmpty(elem){
     return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> nao pode ser vazio.`: "";
}

function validaEmail(elem){
     return elem.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) ? "" : `digite um <strong>e-mail<strong> válido `;
}

function validaCEP(elem){
     if(!elem.value.match(/^[0-9]{8}/))
          return `digite um Cep valido`;
      else  return "";
}
function updateAdress(data){
     if(!("erro" in data)){
          rua.value=(data.logradouro);
          bairro.value=(data.bairro);
          cidade.value=(data.localidade)
          uf.value=(data.uf)
          mensagem.innerHTML = ""
     }else{
          mensagem.innerHTML = `CEP nao encontrado`;
     }
}


form.addEventListener("submit", function(event){
     event.preventDefault();

     let msg = [];
     let markup = "";

     Array.from(notNull).forEach(field => {

          let fieldState = isEmpty(field);
          if(fieldState)
               msg.push(fieldState)
     });
     
     const isEmail = validaEmail(email);
     if(isEmail) msg.push(isEmail)

     const isCep = validaCEP(cep)
     if(isCep) {
          msg.push(isCep)
     } else{
          const script = document.createElement("script");
          script.src = "https://viacep.com.br/ws/" + cep.value + "/json?callback=updateAdress";
          document.body.appendChild(script);
     }



     msg.forEach(item => {
          markup += `<p>${item}</p>`
     })

     mensagem.innerHTML = markup;

     // if(msg.lenght == 0) form.submit()

})