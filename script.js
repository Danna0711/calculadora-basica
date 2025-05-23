function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operador").value;
  let resultado;

  switch (op) {
    case '+': resultado = n1 + n2; break;
    case '-': resultado = n1 - n2; break;
    case '*': resultado = n1 * n2; break;
    case '/': resultado = n1 / n2; break;
  }

  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

// Historia de Usuario 2: Resta de dos números
function restar(a, b) {
  return a - b;
}

// Prueba en consola
console.log("Resultado de restar 5 - 2:", restar(5, 2));
