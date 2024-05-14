export function reducer(array, callbackfn, initialValue) {
  if (!Array.isArray(array))
    throw new Error(`TypeError: Expected array. Received ${typeof array}`);

  if (initialValue === undefined && !array.length) {
    throw new Error("TypeError: Reduce of empty array with no initial value");
  }

  let startingIndex = 0;
  let acc = initialValue;

  if (initialValue === undefined) {
    startingIndex = 1;
    acc = array[0];
  }

  for (let i = startingIndex; i < array.length; i++) {
    if (array[i] === undefined) continue; // Skip sparse elements
    acc = callbackfn(acc, array[i], i, array);
  }

  return acc;
}
