document.addEventListener("DOMContentLoaded", () => {
    destacarLinkAtivo();
});

function destacarLinkAtivo() {
    const linksNavegacao = document.querySelectorAll("nav ul li a");
    const caminhoAtual = window.location.pathname;
    
    linksNavegacao.forEach(link => {
        if (link.getAttribute("href").includes(caminhoAtual.split("/").pop())) {
            link.classList.add("link-ativo");
        }
    });
}

function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos do formulário.");
        return false; 
    }
    
    alert("Mensagem enviada com sucesso!");
    return true;
}

function mostrarMensagemBoasVindas() {
    if (!localStorage.getItem("boasVindasMostrada")) {
        alert("Bem-vindo ao meu portfólio!");
        localStorage.setItem("boasVindasMostrada", "true");
    }
}

if (window.location.pathname.includes("portfolio.html")) {
    mostrarMensagemBoasVindas();
}

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

