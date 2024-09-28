function pertenceFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === a || numero === b) {
    return `o numero${numero} pertence a sequencia de fibonacci`;
  }

  let proximo = a + b;

  while (proximo <= numero) {
    if (proximo === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
    a = b;
    b = proximo;
    proximo = a + b;
  }
   return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

let numero = 8
console.log(pertenceFibonacci(numero))