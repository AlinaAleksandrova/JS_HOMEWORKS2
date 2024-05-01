import indexOfFunction from "./../js/script";

test('myIndexOf should return correct index of element if it exists in the array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(indexOfFunction(array, 3)).toBe(2);
    expect(indexOfFunction(array, 1)).toBe(0);
    expect(indexOfFunction(array, 5)).toBe(4);
});

test('myIndexOf should return -1 if element does not exist in the array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(indexOfFunction(array, 6)).toBe(-1);
    expect(indexOfFunction(array, 0)).toBe(-1);
});

test('myIndexOf should return correct index starting from the given fromIndex', () => {
    const array = [1, 2, 3, 4, 5];
    expect(indexOfFunction(array, 3, 2)).toBe(2); // Start searching from index 2
    expect(indexOfFunction(array, 1, 2)).toBe(-1); // Element does not exist after index 2
});