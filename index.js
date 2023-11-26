function calcularNotas() {
   
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

   
    var soma = nota1 + nota2 + nota3;
    var media = soma / 3;

   
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Soma das notas: ${soma}</p>
        <p>Média das notas: ${media.toFixed(2)}</p>
    `;
}