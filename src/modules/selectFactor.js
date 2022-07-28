export function selectFactor(arr, value) {
  let factor = arr.filter((el) => el.sumbol == value);
  return factor[0].factor;
}
