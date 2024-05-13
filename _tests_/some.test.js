import someFunction from "./../js/scriptSome";

test('someFunction should return true if at least one element satisfies the condition', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element) => element > 3;
    expect(someFunction(array, callback)).toBe(true); // At least one element is greater than 3
});

test('someFunction should return false if no element satisfies the condition', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element) => element > 5;
    expect(someFunction(array, callback)).toBe(false); // No element is greater than 5
});
