//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let entrada = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado")
let amigos = []
let count = 0

function adicionarAmigo(){
  let valor = entrada.value.trim();
  if(valor===""){
      alert("Por favor, insira um nome.");
      return;
    }else if (amigos.includes(valor)) {
      alert("Esse nome já foi adicionado.");
      return;
  };
  amigos.push(valor);
  listaDeAmigos.innerHTML += `<li>${amigos[count]}</li>`
  // listaDeAmigos.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join(""); 
  entrada.value = ""
  count +=1;
};

function sortearAmigo(){
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  resultado.innerHTML = `<li>Seu amigo secreto é: ${amigos[indiceAleatorio]}</li>`.toUpperCase()
  reiniciarLista();
};

function reiniciarLista() {
  amigos = [];
  count = 0;
  listaDeAmigos.innerHTML = ""; // Limpia el contenido de la lista de amigos
  // resultado.innerHTML = ""; // Limpia el resultado del sorteo

}

