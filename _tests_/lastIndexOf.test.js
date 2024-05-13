import lastIndexOfFunction from "./../js/scriptLastIndex";
test('lastIndexOfFunction should return correct last index of element if it exists in the array', () => {
    const array = [1, 2, 3, 4, 3, 5];
    expect(lastIndexOfFunction(array, 3)).toBe(4);
    expect(lastIndexOfFunction(array, 1)).toBe(0);
    expect(lastIndexOfFunction(array, 5)).toBe(5);
});

test('lastIndexOfFunction should return -1 if element does not exist in the array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(lastIndexOfFunction(array, 6)).toBe(-1);
    expect(lastIndexOfFunction(array, 0)).toBe(-1);
});
