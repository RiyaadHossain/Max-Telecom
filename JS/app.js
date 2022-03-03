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