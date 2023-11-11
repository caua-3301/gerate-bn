
//Importando o valor das labels
import { probabildiadeDeOcorrer, labelMeuDataSet, gerarValores } from "./calc.js";
import { dataMyTable } from "./animation.js";

export function activeMyPlot() {
  dataMyTable()

  console.log(labelMeuDataSet)
  console.log(probabildiadeDeOcorrer)
  //Configurações do meu gráfico -------------------
  let delayed;
  const ctx = document.getElementById('myChart');

  //Reservando myPlot em um objeto global (eu sei que não é aconselhado)
  Object.myPlot = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelMeuDataSet,
      datasets: [{
        label: '%',
        data: probabildiadeDeOcorrer,
        borderWidth: 1
      }]
    },
    options: {

      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },

      plugins: {
        title: {
          display: true,
          text: 'Gráfico da distribuição binomial negativa',
          font: {
            family: 'open-sans',
            size: 16,
            style: 'normal',
            weight: 'normal',
            lineHeight: 1.2
          },
        },

      },
      scales: {
        y: {
          stacked: true,
          display: true,
          title: {
            display: true,
            text: 'Px(x)',
            color: '#5271FF',
            font: {
              family: 'code-pro',
              size: 18,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          }
        },

        x: {
          stacked: true,
          display: true,
          title: {
            display: true,
            text: '(k)',
            color: '#5271FF',
            font: {
              family: 'code-pro',
              size: 18,
              weight: 'bold',
              lineHeight: 1.2,
            },
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
          }
        },
      }
    }
  });
}

activeMyPlot()
gerarValores(10, 0.5)