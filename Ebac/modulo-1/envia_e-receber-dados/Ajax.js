// api do git hub
const url = "https://api.gitHub.com/users";
const main = document.getElementById("main")
// let user = "gleidsonfagno"
let text = ""

function getUser(user) {

     fetch( `${url}/${user}`,{
          method: "GET",
          headers: {
               "Content-type": "aplication/json: charset=UTF-8"
          }
     })

     fetch(`${url}/${user}`)
          .then((response) => response.json())
          .then((data) => {
               text += `${data.name} possui ${data.public_repos} repositori publico no GitHub como ${data.login} <br>`
               main.innerHTML = text
          })
     
          .catch((error) => console.error("erro: ", error.message || error))
}

const userInput = document.getElementById("username")
userInput.addEventListener("focusout", function(event){
     getUser(event.target.value)
})