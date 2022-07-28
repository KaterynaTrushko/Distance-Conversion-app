export function setExstenceRule(inSumbol, value, outSumbol, el) {
  let obj = JSON.stringify({
    distance: {
      unit: inSumbol,
      value: value,
    },
    convert_to: outSumbol,
  });
  el.textContent = "inp:" + obj;
  return obj;
}
