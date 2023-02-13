
     let _data = {
          title: "teste de envio",
          body: "lorem ispsum sit dolem conset",
          userId: 5
     }

     fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "GET",
          body: JSON.stringify(_data),
          headers: {
               "Content-Type" : "aplicatin/json; charset=UTF-8"
          }
     })
     .then( Response => Response.json())
     .then( data => console.log(data))
     .catch(error => console.error(error))
