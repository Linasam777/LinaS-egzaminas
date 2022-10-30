/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const kg = document.getElementById("search");
const form = document.querySelector("form");
const lbsOutput = document.getElementById("lbsOutput");
const grOutput = document.getElementById("grOutput");
const ozOutput = document.getElementById("ozOutput");
function handleFormSubmit(event) {
  event.preventDefault();
  document.getElementById("lbsOutput").innerHTML = "kg * 2.2046";
  document.getElementById("grOutput").innerHTML = "kg / 0.001";
  document.getElementById("ozOutput").innerHTML = "kg * 35.274";
}

form.addEventListener("submit", handleFormSubmit);
