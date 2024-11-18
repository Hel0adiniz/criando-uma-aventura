document.addEventListener("DOMContentLoaded", () => {
    const passos = document.querySelectorAll(".passo");
    const botoes = document.querySelectorAll(".btn-proximo");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const atual = document.querySelector(".passo.ativo");
            const proximoId = botao.getAttribute("data-proximo");
            const proximoPasso = document.getElementById(`passo-${proximoId}`);

            atual.classList.remove("ativo");
            proximoPasso.classList.add("ativo");
        });
    });
});
