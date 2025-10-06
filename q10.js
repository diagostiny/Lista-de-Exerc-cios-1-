
function calcularNumeros(e) {
  e.preventDefault();
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);
  let n3 = Number(document.getElementById('n3').value);
  let soma = n1 + n2 + n3;
  let media = soma / 3;
  let produto = n1 * n2 * n3;
  let maior = Math.max(n1, n2, n3);
  let menor = Math.min(n1, n2, n3);
  document.getElementById('tabela').innerHTML = `
    <table border="1">
      <tr><td>Números</td><td>${n1}, ${n2}, ${n3}</td></tr>
      <tr><td>Soma</td><td>${soma}</td></tr>
      <tr><td>Média</td><td>${media}</td></tr>
      <tr><td>Produto</td><td>${produto}</td></tr>
      <tr><td>Maior</td><td>${maior}</td></tr>
      <tr><td>Menor</td><td>${menor}</td></tr>
    </table>
  `;
}