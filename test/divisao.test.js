require('./javascript/divisao');

test('divisão de 10 / 2 é igual a 5', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('divisão por zero retorna Infinity', () => {
    expect(dividir(10, 0)).toBe(Infinity);
});
test('divisão de -6 / 2 é igual a -3', () => {
    expect(dividir(-6, 2)).toBe(-3);
});