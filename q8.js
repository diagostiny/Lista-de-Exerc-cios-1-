
function validarCPF() {
  let cpf = document.getElementById('cpf').value.replace(/\D/g, '');
  let msg = document.getElementById('cpfMsg');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    msg.textContent = 'CPF inválido!';
    return;
  }
  let soma = 0, resto;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i-1]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) { msg.textContent = 'CPF inválido!'; return; }
  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i-1]) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  msg.textContent = (resto === parseInt(cpf[10])) ? 'CPF válido!' : 'CPF inválido!';
}