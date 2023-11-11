function gerarHtml(k, px) {
    const novoHtml = `
        <td>${k}</td>
        <td>${px.toFixed(9)}</td>`;

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = novoHtml;
    return novaLinha;
}

export {gerarHtml}