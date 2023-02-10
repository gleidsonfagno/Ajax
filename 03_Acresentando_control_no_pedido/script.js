// quando a pagina estiver carregada vai executar essa funçao
// essa funçao vai escutar o click do button  e executar
window.onload = function(){
     document.getElementById('btn').addEventListener("click", btn_click);
}
 var div = document.getElementById("caixa")
// criar a funçao do btn_click
function btn_click(){
     // document.getElementById("caixa").innerHTML = "Este e o texto alterado..."

     // ajax
     // criamos o objeto
     let pedido = new XMLHttpRequest();

     // definir a funçao que vai atuar mediante a resposta
     // quau vai ser o comportamento do obj
     pedido.onreadystatechange = function() {
          if(pedido.readyState == 4 &&  pedido.status == 200){
               document.getElementById("caixa").innerHTML = this.responseText;
               div.style.background = " #ccc"
          }else{
               document.getElementById("caixa").innerHTML = "Tente mais tarde"
          }
          // quando estiver a resposta
          // document.getElementById("caixa").innerHTML = pedido.responseText;
          // a mesma coisa com o this
     }

     // o pedido e enviado
     pedido.open("Get", "dados.txt", true)
     pedido.send();

}

