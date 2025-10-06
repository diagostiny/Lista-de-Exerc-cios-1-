function pesquisarPalavra(e) {
  e.preventDefault();
  let palavra = document.getElementById('busca').value;
  let texto = document.getElementById('textoBusca').textContent;
  let regex = new RegExp(`(${palavra})`, 'gi');
  let ocorrencias = (texto.match(regex) || []).length;
  if (ocorrencias === 0) {
    document.getElementById('msgBusca').textContent = 'Nenhum resultado encontrado.';
    document.getElementById('textoBusca').innerHTML = texto;
  } else {
    document.getElementById('msgBusca').textContent = `Encontrado(s): ${ocorrencias}`;
    document.getElementById('textoBusca').innerHTML = texto.replace(regex, '<span style="background:yellow">$1</span>');
  }
}