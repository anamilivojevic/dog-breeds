const cardContainer = document.getElementById("card-container");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const BASE_URL = "http://localhost:8080/api/breeds";

const makeCard = (breed) => {
  let cardContent = `<div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
              <div class="card h-100 text-start">
                <img src="${breed.imageUrl}" class="card-img-top" alt="Image of a ${breed.name}" />
                <div class="card-body mt-3 d-flex flex-column justify-content-between">
                    <div class="mb-3">
                  <h5 class="card-title fs-4 mb-3">Card title</h5>
                  <p class="card-text">
                    ${breed.description}
                  </p></div>
                  <div><p>Trainability &nbsp;`;

  for (let i = 0; i < breed.trainability; i++) {
    cardContent += "<i class='fa-solid fa-star'></i>";
  }
  for (let i = 0; i < 5 - breed.trainability; i++) {
    cardContent += "<i class='fa-regular fa-star'></i>";
  }

  cardContent += `
                  </p>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <div>
                    <i class="fa-solid fa-ruler-combined"></i>
                    <span>${breed.size}</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-heart-pulse"></i>
                    <span>${breed.minLifeSpan}-${breed.maxLifeSpan} years</span>
                  </div>
                </div>
              </div>
            </div>`;

  return cardContent;
};

// functions for REST services
const makeCards = (breedsList) => {
  let content = "<div class='row' >";

  breedsList.forEach((breed) => {
    content += makeCard(breed);
  });

  content += "</div>";
  cardContainer.innerHTML = content;
};

const getCards = async () => {
  try {
    const response = await fetch(BASE_URL);
    console.log(response);
    if (response.ok) {
      const breeds = await response.json();
      makeCards(breeds);
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

const getBreedsFromSearch = async () => {
  try {
    const response = await fetch(BASE_URL + "?search=" + searchInput.value);
    console.log(response);
    if (response.ok) {
      const breeds = await response.json();
      makeCards(breeds);
      searchInput.value = "";
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

// adding event listeners
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  getBreedsFromSearch();
});

getCards();
