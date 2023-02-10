let nome = document.querySelector("#nome");
let job = document.querySelector("#job");
let form = document.querySelector("#form");

form.addEventListener("submit", function(event){
     event.preventDefault();

     let dados = {
          nome: nome.value,
          job: job.value
     }
     console.log(dados);

     fetch("https://reqres.in/api/users?page=2",{
          method: "POST",
          body: JSON.stringify(dados)
     })
     // mensagem de erro
     .then(function(response){
          return response.json()
     })
     .then(function(response){
          alert("ok cadastro com sucesso")
     })

})