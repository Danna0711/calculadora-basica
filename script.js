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

// Historia de Usuario 3: Multiplicación de dos números
function multiplicar(a, b) {
  return a * b;
}

// Prueba en consola
console.log("Resultado de multiplicar 6 * 3:", multiplicar(6, 3));
