import { fetchAdvice } from "../api/fetchApi.js";

let loadingElement = document.querySelector(".card__loading");
let phraseElement = document.querySelector(".card__phrase");

// Exemplo de uso
async function fetchDataAndHandle() {
    try {
        phraseElement.style.display = "none";
        loadingElement.style.display = "block";
        const result = await fetchAdvice();
        loadingElement.style.display = "none";
        phraseElement.style.display = "block";
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
  