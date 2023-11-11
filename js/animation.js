import {  probabildiadeDeOcorrer} from "./calc.js";
import { gerarHtml } from "./htmlGerate.js";

//Animação a tabela
const saidaDeDados = document.querySelector("#out-table");
//Ativando ambos
const tableActive = document.querySelector("#table");
const graficActive = document.querySelector("#grafic");

//Paremetros de alteração
const inserteData = document.querySelector("#insersion-data");
const tableData = document.querySelector("#table-view");

//Ativando tabela e desativndo inserção de dados
tableActive.addEventListener("click", () => {
    inserteData.classList.add("data-none");
    tableData.classList.add("active-table");
    tableData.classList.remove("data-none");
})

//Ativando inserção de dados desativndo a tabela
graficActive.addEventListener("click", () => {
    tableData.classList.add("data-none");
    inserteData.classList.add("active-table")
    inserteData.classList.remove("data-none");
    tableData.classList.remove("active-table");
})

//Dados da tabela ----
const dataMyTable = _ => {
    saidaDeDados.textContent = "";
    probabildiadeDeOcorrer.forEach((elemento, indice) => {
        saidaDeDados.appendChild(gerarHtml(indice, elemento));
    })
}

export {dataMyTable}