//Funcoes auxiliares no calculo das probabilidades

const fatorial = (num) => {
    let fatorial = 1;
    for (let aux = num; aux > 1; aux--) {
        fatorial *= aux;
    }
    return fatorial;
}

//Auxiliando no calculo do binomio
const gerarBinomio = (n, k) => {
    let valorChave = n + k - 1;
    return fatorial(valorChave) / (fatorial(k) * (fatorial(valorChave - k)))
}

export { gerarBinomio }

