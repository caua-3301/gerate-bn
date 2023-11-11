import { valorEsperanca, calcDesvioPadrao, valorVariancia } from "./myFunctions.js";
import { gerarValores } from "./calc.js";
import { parametroN, parametroP } from "./calc.js";

//variaveis de interação no JS
const esperanca = document.querySelector("#esperanca");
const variancia = document.querySelector("#variancia");
const desvioPadrao = document.querySelector("#desvio-padrao");

const atualizarExibicoOther = (n, p) => {
    let aux = valorVariancia(n, p)
    esperanca.textContent = `E(x) = ${valorEsperanca(n, p).toFixed(2)}`
    variancia.textContent = `Var(x) = ${aux.toFixed(2)}`
    desvioPadrao.textContent = `Dp(x) = ${calcDesvioPadrao(aux).toFixed(2)}`
}
//Salvando formato do grafico
export const format = ["line", "bar"]
export let control = 1;

//Ativando linhas do grafico
const modoLinha = document.querySelector("#change-view");

const checarFormato = _ => {
    control = control == 0 ? 1 : 0;
}

modoLinha.addEventListener("click", _ => {
    checarFormato()
    gerarValores(parseInt(parametroN.value), parseFloat(parametroP.value))
})

export { atualizarExibicoOther, checarFormato }