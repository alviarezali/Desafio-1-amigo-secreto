//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let entrada = document.getElementById("amigo"); // Referência ao campo de entrada de texto onde o usuário insere o nome do amigo.
let listaDeAmigos = document.getElementById("listaAmigos"); // Referência ao elemento onde será exibida a lista de amigos.
let resultado = document.getElementById("resultado"); // Referência ao elemento onde será exibido o resultado do sorteio.
let amigos = []; // Array que armazena a lista de amigos adicionados.
let count = 0; // Contador para rastrear o índice dos amigos adicionados na lista.

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  let valor = entrada.value.trim(); // Remove espaços extras no início e no final do valor inserido.
  resultado.innerHTML = ""; //Limpa o resultado do sorteio
  // Verifica se o campo de entrada está vazio
  if (valor === "") {
      alert("Por favor, insira um nome."); // Exibe um alerta caso o campo esteja vazio.
      return; // Encerra a execução da função.
  } else if (amigos.includes(valor)) {
      // Verifica se o nome já foi adicionado anteriormente
      alert("Esse nome já foi adicionado."); // Exibe um alerta caso o nome já exista.
      return; // Encerra a execução da função.
  };

  amigos.push(valor); // Adiciona o nome ao array de amigos.
  listaDeAmigos.innerHTML += `<li>${amigos[count]}</li>`; // Atualiza a lista de amigos exibida no HTML.
  // listaDeAmigos.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join(""); 
  entrada.value = ""; // Limpa o campo de entrada após adicionar o nome.
  count += 1; // Incrementa o contador.
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos==""){
    alert("Você não digitou nenhum nome.");
  };
  let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório baseado no tamanho da lista de amigos.
  resultado.innerHTML = `<li>Seu amigo secreto é: ${amigos[indiceAleatorio]}</li>`.toUpperCase(); // Exibe o amigo sorteado no HTML.
  restartList(); // Reinicia a lista após o sorteio.
}

// Função para reiniciar a lista de amigos
function restartList() {
  amigos = []; // Limpa o array de amigos.
  count = 0; // Reseta o contador para zero.
  listaDeAmigos.innerHTML = ""; // Limpa o conteúdo exibido na lista de amigos no HTML.
}