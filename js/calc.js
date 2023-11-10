import { activeMyPlot } from "./myPlot.js";
import { gerarBinomio } from "./myFunctions.js";

//Variaveis que serao exportadas e serem plotadas
export let probabildiadeDeOcorrer = [];
export let labelMeuDataSet = [];

//Maximo de simulacoes
const MAX = 40;

//Parametro n = numero de tentativas
const parametroN = document.querySelector("#param-n");
//Probabilidade de um sucesso acontecer
const parametroP = document.querySelector("#param-p");

//Ativando geração do gráfico sempre que um label é editada
parametroN.addEventListener("input", () => { gerarValores(parseInt(parametroN.value), parseFloat(parametroP.value)) })
parametroP.addEventListener("input", () => gerarValores(parseInt(parametroN.value), parseFloat(parametroP.value)))

//Calculando a fmp
const calcularFmp = (n, p, k) => {
    return gerarBinomio(n, k) * Math.pow(p, n) * Math.pow(1 - p, k)
}

//Gerando os valores para a label do grafico bem como os valores apresentados
function gerarValores(n, p) {
    probabildiadeDeOcorrer = [];
    labelMeuDataSet = [];
    for (let index = 0; index < MAX; index++) {
        probabildiadeDeOcorrer.push(calcularFmp(n, p, index));
        labelMeuDataSet.push(index);
    }
    Object.myPlot.destroy();
    activeMyPlot()
}

export {gerarValores}