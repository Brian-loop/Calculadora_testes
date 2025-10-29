require('./javascript/multiplicacao');

test('multiplicação de 4 * 3 é igual a 12', () => {
    expect(multiplicar(4, 3)).toBe(12);
});
test('multiplicação de -2 * 3 é igual a -6', () => {
    expect(multiplicar(-2, 3)).toBe(-6);
});