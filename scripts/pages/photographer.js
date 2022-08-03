// get photographer data
// let photographerData = [];
// async function fetchPhotographer() {
//   let response = await fetch('data/photographers.json')
//   .then((response) =>
//   response.json())
//   .then((promise) => {
//     photographerData = promise['photographers'];
//     })
//     console.log(photographerData);
//   };

// display photographer data
// const photographerDisplay = async () => {
//   await fetchPhotographer();
//   const photographerHeader = document.querySelector('.photographer_header')
//   photographerHeader.innerHTML = `<article><p>${photographerData[1].id} </p></article>`
//   console.log(photographerHeader);
// }

// photographerDisplay();
// (async function (params) {
//   const photographerId = getPhotographerId();
//   console.log(photographerId);
//   const photographer = await getPhotographer(photographerId);
//   console.log(photographer);
//   hydratePhotographer(photographer);
// })()

// request photographers and medias from json file
async function getPhotographers() {
  let response = await fetch(`data/photographers.json`)
  if (response.ok) {
    // waiting for json to be converted into object and keeping it in data variable
    let data = await response.json()
    // return json data specific array
    return { photographers: data.photographers, medias: data.media };
  } else {
    console.error('Retour du serveur : ', response.status)
  }
}

// retrieve correct photographer object thanks to its id with find() method
async function getPhotographer(id) {
  const { photographers, medias } = await getPhotographers();
  const photographer = photographers.find((photographer) => photographer.id === id);
  const photographerMedias = medias.find((media) => media.photographerId === id);
  return [photographer, photographerMedias];
}

// ******** ne marche pas car append child error ********
// function photographerDisplay(photographer) {
//   const photographerModel = photographerFactory(photographer);
//   const photographerHeader = document.querySelector('.photographer_header');
//   const photographerCardDOM = photographerModel.getPhotographerCardDOM();
//   photographerHeader.appendChild(photographerCardDOM);
// }


// display photographer's datas
function photographerDisplay(photographer) {
  const photographerModel = photographerFactory(photographer)
  const photographerHeader = document.querySelector('.photographer_header');

  const profile = document.createElement('div');
  profile.classList.add('photographer-profile');

  const h1 = document.createElement('h1');
  const photographerCity = document.createElement('p');
  photographerCity.classList.add('photographer-city');
  const photographerTagline = document.createElement('span');

  h1.textContent = photographerModel.name;
  photographerCity.textContent = `${photographerModel.city}, ${photographerModel.country}`;
  photographerTagline.textContent = photographerModel.tagline;

  const contactBtn = document.querySelector('.contact_button');

  const avatar = document.createElement('div');
  avatar.classList.add('user');

  const img = document.createElement('img');
  img.setAttribute("src", photographerModel.picture);
  img.setAttribute("alt", photographerModel.name);

  profile.appendChild(h1);
  profile.appendChild(photographerCity);
  profile.appendChild(photographerTagline);
  avatar.appendChild(img);
  photographerHeader.appendChild(profile);
  photographerHeader.appendChild(contactBtn);
  photographerHeader.appendChild(avatar);
}

// display media's datas
function mediaDisplay(medias) {
  const mediaSection = document.querySelector('.mediaSection');
  console.log(medias);
  medias.forEach(media => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    console.log(mediaCardDOM);
    mediaSection.appendChild(mediaCardDOM);
  });
}

// take the id parameter in url
async function getUrlId() {
  // retrieve url params
  const url_params_id = window.location.search;
  const paramsId = new URLSearchParams(url_params_id);

  // use urlsearchparams.get() method to extract id from url params
  const photographerId = parseInt(paramsId.get("id"));

  // or we can use short syntax:  return new URL(location.href).searchParams.get("id");

  // take the valid photographer object passing the id and keeping it in a variable and displaying it
  const [photographer, photographerMedias] = await getPhotographer(photographerId);
  photographerDisplay(photographer);
  mediaDisplay(photographerMedias);

}

getUrlId();
