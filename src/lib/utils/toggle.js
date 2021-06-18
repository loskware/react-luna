/**
 * Toggle value inside an Array or Set container
 * @param {any[]} array
 * @param {any} value
 */
export function toggle(array, value) {
  if (!Array.isArray(array)) throw Error("array is not... an array!");

  const index = array.indexOf(value);
  if (index < 0) array.push(value);
  else array.splice(index, 1);

  return array;
}
