async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        const advice = data.slip.advice;

        return { advice };
    } catch (error) {
        console.error('Erro:', error);
        throw error; // Rejeita a promessa se houver um erro
    }
}

export {fetchAdvice};