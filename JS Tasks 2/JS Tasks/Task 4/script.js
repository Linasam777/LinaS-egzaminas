/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
async function getCars() {
  const response = fetch(ENDPOINT);
  const data = await (await response).json();
  const result = await data;
  carsBrand = result.Brands;
  cars.Models = result.Models;
  elementBrand.textContent = brands.Value;
  elementModels.textcontent = models.Value;
  const elementBrand = document.querySelector('[data-value="brand"]');
  const elementModel = document.querySelector('[data-value="models');
}
