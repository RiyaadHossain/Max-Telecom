/* -------------- Get Global Variables -------------- */
const searchInput = document.getElementById("search-input");
const phoneContainer = document.getElementById("phone-container");
const detailsContainer = document.getElementById("details-container");
const errorMsg = document.getElementById("error-msg");

/* -------------- Onclick Function for Search -------------- */
const searchPhone = () => {
  const inputValue = searchInput.value;
  if (inputValue.length == "") {
    phoneContainer.textContent = "";
    errorMsg.innerHTML = `<h2> Please Input what Phone you want to Search 😓</h2>`;
  } else {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
      .then((Response) => Response.json())
      .then((json) => printPhone(json.data));
    errorMsg.textContent = "";
  }
  searchInput.value = "";
};

/* -------------- Print Search Result in the Result Div -------------- */
const printPhone = (phones) => {
  phoneContainer.textContent = "";
  detailsContainer.textContent = "";
  const limitedItem = phones.slice(0, 20)
  if (phones.length == 0) {
    errorMsg.innerHTML = ` <h2>No, result Found! 😥</h2>`;
  } else {
    limitedItem.forEach((phon) => {
      const div = document.createElement("div");
      div.className = "col";
      div.innerHTML = `
        <div class="card shadow border-2">
          <img src="${phon.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${phon.phone_name}</h3>
            <p><span class="fw-bold">Brand:</span> ${phon.brand}</p>
            <button class="fw-bold btn btn-info" onclick="printDetals('${phon.slug}')">Explore</button>
          </div>
        </div>
        `;
      phoneContainer.appendChild(div);
    });
  }
};
