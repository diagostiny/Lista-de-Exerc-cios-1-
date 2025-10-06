
function mostrarTabuada(e) {
  e.preventDefault();
  let n = Number(document.getElementById('numTabuada').value);
  let html = '<table border="1">';
  for (let i = 1; i <= 10; i++) {
    html += `<tr><td>${n} x ${i}</td><td>${n*i}</td></tr>`;
  }
  html += '</table>';
  document.getElementById('tabuada').innerHTML = html;
}