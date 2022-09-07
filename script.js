/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "/cars.json";
// const click = document.getElementById("output");

fetch("./cars.json")
  .then((responce) => responce.json())
  .then((data) => {
    const output = document.getElementById("output");
    data.forEach((data) => {
      const card = document.createElement("div");

      const brand = document.createElement("h1");
      const models = document.createElement("p");

      card.className = "card";

      brand.textContent = data.brand;
      models.textContent = data.models;
      const modi = data.models;
      let ilgis = modi.length;
      console.log(ilgis);

      card.append(brand, models);
      output.append(card);

      // console.log(data.brand, data.models);
    });
  });
