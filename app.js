//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let entrada = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado")
let amigos = []

function adicionarAmigo(){
  let valor = entrada.value.trim();
  if(valor===""){
      alert("Não insira um nome válido, tente novamente.")
    };
    amigos.push(valor);
    listaDeAmigos.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join(""); 
    entrada.value = ""
    
};

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>${amigos[indiceAleatorio]}</li>`.toUpperCase()

};

