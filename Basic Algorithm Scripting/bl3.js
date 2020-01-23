function factorialize(num) {
  for (let resultado = 1 ; num > 0 ; num--) {
    resultado *= num;
  }
  return resultado;
}

factorialize(5);
