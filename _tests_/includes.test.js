import includesFunction from "../js/scriptIncludes";

test('includesFunction should return true if element exists in the array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(includesFunction(array, 3)).toBe(true);
    expect(includesFunction(array, 1)).toBe(true);
    expect(includesFunction(array, 5)).toBe(true);
});

test('includesFunction should return false if element does not exist in the array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(includesFunction(array, 6)).toBe(false);
    expect(includesFunction(array, 0)).toBe(false);
});
