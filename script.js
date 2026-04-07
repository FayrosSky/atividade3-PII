document.addEventListener("DOMContentLoaded", function () {
    let inputCorTexto = document.getElementById("cor-texto");
    let inputCorFundo = document.getElementById("cor-fundo");

    if (inputCorTexto && inputCorFundo) {
        inputCorTexto.addEventListener("input", () => {
            let cor = inputCorTexto.value;
            document.body.style.color = cor;
        });

        inputCorFundo.addEventListener("input", () => {
            let cor = inputCorFundo.value;
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = cor;
        });
    }

    const btnMenu = document.getElementById("btn-menu");
    const navMenu = document.querySelector("header nav");

    btnMenu.addEventListener("click", () => {
        navMenu.classList.toggle("ativo");
    });

    // fechar o menu ao clicar em um link (mobile)
    navMenu.addEventListener("click", (e) => {
        if (e.target.matches("a") && window.innerWidth <= 900) {
            navMenu.classList.remove("ativo");
        }
    });
});