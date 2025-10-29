require('./javascript/subtracao');

test('subtração de 5 - 3 é igual a 2', () => {
    expect(subtrair(5, 3)).toBe(2);
});
test('subtração de 0 - 0 é igual a 0', () => {
    expect(subtrair(0, 0)).toBe(0);
});