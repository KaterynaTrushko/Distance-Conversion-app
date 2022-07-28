export function outputJSON(outSumbol, value, el) {
  let outObj = JSON.stringify({
    unit: outSumbol,
    value: value,
  });
  el.textContent = "response: " + outObj;
}
