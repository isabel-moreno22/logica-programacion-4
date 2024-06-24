document.getElementById('btn-calcular').addEventListener('click', calcularFibonacci);

function calcularFibonacci() {
    let inputNumero = document.getElementById('input-numero').value;
    let numero = parseInt(inputNumero);
    let mensajeError = document.getElementById('mensaje-error');
    let resultadoElemento = document.getElementById('resultado');

    // Limpiar mensajes anteriores
    mensajeError.textContent = '';
    resultadoElemento.textContent = '';

    // Validar la entrada
    if (isNaN(numero) || numero <= 0) {
        mensajeError.textContent = "Error: La entrada no es un número válido. Por favor, ingresa un número entero positivo.";
        return;
    }

    // Calcular la serie de Fibonacci
    let fibonacci = generarFibonacci(numero);

    // Mostrar el resultado
    resultadoElemento.textContent = `Serie de Fibonacci (${numero} números): ${fibonacci.join(", ")}`;
}

function generarFibonacci(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}
