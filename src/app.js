import "./style.css";
import { UnitsData, AddUnitsData } from "./data.js";
import { displayOpthions } from "./modules/displayOpthions.js";
import { outputJSON } from "./modules/outputJSON";
import { setExstenceRule } from "./modules/setExstenceRule";
import { selectFactor } from "./modules/selectFactor";
import { convert } from "./modules/convert";

let inpConvertNumber = document.querySelector("input");
let inpSelect = document.querySelector(".app__block-inunits");
let outSelect = document.querySelector(".app__block-outunits");
let addSelect = document.querySelector(".app__addSelrctor");
let output = document.querySelector(".output");
let inputForm = document.querySelector("#app");
let outRule = document.querySelector(".add__out-rule");
let outResponse = document.querySelector(".add__out-response");
let addRuleForm = document.querySelector(".app__form");

let inpValue = null;
let inpSumbol = null;
let outSumbol = null;
let inputFactor = null;
let outFactor = null;

addRuleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let addSumbol = addSelect.value;
  let newRow = AddUnitsData.filter((el) => el.sumbol === addSumbol);
  UnitsData.push(...newRow);
  displayOpthions(inpSelect, newRow);
  displayOpthions(outSelect, newRow);
  console.log(addSumbol);
  console.log(newRow);
});

displayOpthions(inpSelect, UnitsData);
displayOpthions(outSelect, UnitsData);
displayOpthions(addSelect, AddUnitsData);

inputForm.addEventListener("change", () => {
  inpValue = Number(inpConvertNumber.value);
  inpSumbol = inpSelect.value;
  outSumbol = outSelect.value;
  let dataJSON = setExstenceRule(inpSumbol, inpValue, outSumbol, outRule);
  let { distance, convert_to } = JSON.parse(dataJSON);
  inputFactor = selectFactor(UnitsData, distance.unit);
  outFactor = selectFactor(UnitsData, convert_to);
  let out = convert(distance.value, inputFactor, outFactor);
  output.textContent = out.toFixed(2);
  outputJSON(convert_to, out, outResponse);
});
