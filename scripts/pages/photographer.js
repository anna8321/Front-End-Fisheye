// retrieve url params
const url_params_id = window.location.search;
console.log(url_params_id);

// use urlsearchparams.get() method to extract id from url params
 const paramsId= new URLSearchParams(url_params_id);
 console.log(paramsId);

 const photographerId = paramsId.get("id");
  console.log(photographerId);

// get photographer data
let photographerData = [];
async function fetchPhotographer() {
  let response = await fetch('data/photographers.json')
  .then((response) =>
  response.json())
  .then((promise) => {
    photographerData = promise['photographers'];
    })
    console.log(photographerData);
  };

// display photographer data
const photographerDisplay = async () => {
  await fetchPhotographer();
  const photographerHeader = document.querySelector('.photographer-header')
  photographerHeader.innerHTML = `<article><p>${photographerData.name} </p></article>`
  console.log(photographerHeader);


}

photographerDisplay();
