// PASSO 1 - Precisamos criar uma variável no JS para trabalhar com a listagem de vingadores 
const listaSelecaoVingadores = document.querySelectorAll(".vingador")
// console.log(listaSelecaoVingadores)


// PASSO 2 - Identificar o evento do clique no elemento na listagem
listaSelecaoVingadores.forEach(vingador=>{
    vingador.addEventListener("click",()=>{
        
    // PASSO 3 - Remover a classe aberto só do cartão que está aberto
    const cartaoVingadorAberto = document.querySelector(".aberto") 
    cartaoVingadorAberto.classList.remove("aberto")
    

    // PASSO 4 - Ao clicar em uma vingador na listagem pegamos o id desse vingador pra saber qual cartão abrir 
    const idVingadorSelecionado = vingador.attributes.id.value;
    const idDoCartaoVingadorParaAbrir = "cartao-"+ idVingadorSelecionado
    const cartaoVingadorParaAbrir = document.getElementById(idDoCartaoVingadorParaAbrir)
    cartaoVingadorParaAbrir.classList.add("aberto")
    
    // PASSO 5 - Remover a classe ativo que marca o vingador selecionado na listagem
    const vingadorAtivoNaListagem = document.querySelector(".ativo")
    vingadorAtivoNaListagem.classList.remove("ativo")
    
    // PASSO 6 - Adicionar a classe ativo no vingador selecionado na listagem 
    const vingadorSelecionadoNaListagem = document.getElementById(idVingadorSelecionado)
    vingadorSelecionadoNaListagem.classList.add("ativo")
    
    })
})





// // PASSO 1 - Precisamos criar uma variável no JS para trabalhar com a listagem de vingadores
// const listaSelecaoVingadores = document.querySelectorAll(".vingador");

// // PASSO 2 - Identificar o evento do clique no elemento na listagem
// listaSelecaoVingadores.forEach(vingador => {
//     vingador.addEventListener("click", () => {

//         // PASSO 3 - Verificar se existe algum cartão aberto e remover a classe 'aberto'
//         const cartaoVingadorAberto = document.querySelector(".aberto");
//         // if (cartaoVingadorAberto) {
//             cartaoVingadorAberto.classList.remove("aberto");
//         // }

//         // PASSO 4 - Ao clicar em um vingador na listagem, pegamos o id desse vingador para saber qual cartão abrir
//         const idVingadorSelecionado = vingador.attributes.id.value;
//         const idDoCartaoVingadorParaAbrir = "cartao-" + idVingadorSelecionado;
//         const cartaoVingadorParaAbrir = document.getElementById(idDoCartaoVingadorParaAbrir);
//         cartaoVingadorParaAbrir.classList.add("aberto");

//         // PASSO 5 - Remover a classe 'ativo' que marca o vingador selecionado na listagem
//         const vingadorAtivoNaListagem = document.querySelector(".ativo");
//         // if (vingadorAtivoNaListagem) {
//             vingadorAtivoNaListagem.classList.remove("ativo");
//         // }

//         // PASSO 6 - Adicionar a classe 'ativo' no vingador selecionado na listagem
//         const vingadorSelecionadoNaListagem = document.getElementById(idVingadorSelecionado);
//         vingadorSelecionadoNaListagem.classList.add("ativo");

//     });
// });

// // PASSO 7 - Garantir que o primeiro cartão seja mostrado ao carregar a página
// window.addEventListener('DOMContentLoaded', () => {
//     // Exibir o primeiro cartão e adicionar a classe 'ativo' ao primeiro item da lista
//     const primeiroVingador = listaSelecaoVingadores[0];
//     primeiroVingador.classList.add("ativo");

//     const primeiroCartao = document.getElementById("cartao-" + primeiroVingador.id);
//     if (primeiroCartao) {
//         primeiroCartao.classList.add("aberto");
//     }
// });


