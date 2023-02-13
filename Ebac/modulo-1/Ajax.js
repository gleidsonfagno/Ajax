// api do git hub
const url = "https://api.gitHub.com/users";
const main = document.getElementById("main")
// let user = "gleidsonfagno"

function getUser(user) {
     fetch(`${url}/${user}`)
          .then((response) => response.json())
          .then((data) => {
               main.innerHTML = `${data.name} possui ${data.public_repos} repositori publico no GitHub como ${data.login}`
          })
     
          .catch((error) => console.error("erro: ", error.message || error))
}

const userInput = document.getElementById("username")
userInput.addEventListener("focusout", function(event){
     getUser(event.target.value)
})