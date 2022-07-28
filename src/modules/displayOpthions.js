export function displayOpthions(select, arr) {
  arr.forEach((element) => {
    let option = document.createElement("option");
    option.value = element.sumbol;
    option.innerHTML = element.unit;
    select.appendChild(option);
  });
}
