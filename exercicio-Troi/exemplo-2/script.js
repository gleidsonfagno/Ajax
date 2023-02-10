let btn = document.querySelector("#btn");
let list =document.querySelector("#list");

btn.addEventListener("click", function(){
     fetch("https://reqres.in/api/users?page=2")
     .then(function(response){
          return response.json();
     })
     .then(function(response){
          // console.log(response.data) os usuarios estao no data
          // aregar os usuarios
          response.data.forEach(function(user){
               console.log(user);
               let item = document.createElement("li")
               // ;adicionar uma class
               // item.classList.add("item")
               // inserir no html 
               item.innerHTML = ' <img src=" '+user.avatar+' "> <span> '+user.first_name+ user.last_name +' </spana> <p>'+user.email+'</p> '

               // informa o item
               list.appendChild(item);
          })
     })
})