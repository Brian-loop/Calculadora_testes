const somar = require('./javascript/soma');

test('soma de 1 + 2 é igual a 3', () => {
    expectnpm(somar(1, 2)).toBe(3);
});

test('soma de -1 + -1 é igual a -2', () => {
    expect(somar(-1, -1)).toBe(-2);
});