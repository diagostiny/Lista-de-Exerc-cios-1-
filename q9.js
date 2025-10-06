
function intercalar() {
  let a = document.getElementById('p1').value;
  let b = document.getElementById('p2').value;
  let r = '';
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) r += a[i];
    if (b[i]) r += b[i];
  }
  document.getElementById('intercalada').value = r;
}