import { activeMyPlot } from "./myPlot.js";
import { gerarBinomio } from "./myFunctions.js";
import { atualizarExibicoOther } from "./otherCalcs.js";

//Variaveis que serao exportadas e serem plotadas
export let probabildiadeDeOcorrer = [];
export let labelMeuDataSet = [];

//Parametro n = numero de tentativas
export const parametroN = document.querySelector("#param-n");
//Probabilidade de um sucesso acontecer
export const parametroP = document.querySelector("#param-p");

//Ativando geração do gráfico sempre que um label é editada
parametroN.addEventListener("input", () => { gerarValores(parseInt(parametroN.value), parseFloat(parametroP.value)) })
parametroP.addEventListener("input", () => gerarValores(parseInt(parametroN.value), parseFloat(parametroP.value)))

//Calculando a fmp
const calcularFmp = (n, p, k) => {
    return gerarBinomio(n, k) * Math.pow(p, n) * Math.pow(1 - p, k)
}

//Definindo escala do gráfico
const verificarN = n => {
    if (n <= 5) { return 16 }
    else if (n > 5 && n <= 15) { return 41 }
    else if (n > 15 && n <= 50) { return 61 }
    else if (n > 50) { return 81 }
}

//Gerando os valores para a label do grafico bem como os valores apresentados
function gerarValores(n, p) {
    probabildiadeDeOcorrer = [];
    labelMeuDataSet = [];
    for (let index = 0; index < (verificarN(n)); index++) {
        probabildiadeDeOcorrer.push(calcularFmp(n, p, index));
        labelMeuDataSet.push(index);
    }
    Object.myPlot.destroy();
    activeMyPlot()
    atualizarExibicoOther(n, p)
}

export { gerarValores }