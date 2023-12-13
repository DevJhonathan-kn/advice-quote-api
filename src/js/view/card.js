import { fetchAdvice } from "../api/fetchApi.js";

// Exemplo de uso
async function fetchDataAndHandle() {
    try {
        const result = await fetchAdvice();

        // Faça o que quiser com o resultado aqui, por exemplo, imprima no console
        return result.advice;

    } catch (error) {
        console.error('Erro durante o processo:', error);
    }
}

const handleCard = async () => {
    const card = document.querySelector("[data-card]");
    card.querySelector("q.card__phrase").innerText = await fetchDataAndHandle();
}

// evento click
document.querySelector("[data-action]").addEventListener("click", () => {
    handleCard();
});

//pós carregamento 
window.onload = () => {
    handleCard();
};
  