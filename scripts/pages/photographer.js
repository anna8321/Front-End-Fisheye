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
  mediaPhotograph = medias.filter((media) => media.photographerId === id);
  // affiche qu'un media : const photographerMedias = medias.find((media) => media.photographerId === id);
  return [photographer, mediaPhotograph];
}


// display photographer's datas
function photographerDisplay(photographer) {
  const photographerModel = photographerFactory(photographer);
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

  // add aside price and likes
  const mediaSection = document.querySelector('.mediaSection');
  const aside = document.createElement('aside');
  aside.classList.add('aside-medias');
  mediaSection.appendChild(aside);

  const asideLike = document.createElement('div');
  const numLikes = document.createElement('p');
  numLikes.textContent = `CHIFFRE❤`;
  asideLike.appendChild(numLikes);
  aside.appendChild(asideLike);

  const asidePrice = document.createElement('div');
  asidePrice.textContent = `${photographerModel.price}€/jour`;
  aside.appendChild(asidePrice);

}

// display media's datas
function mediaDisplay(medias) {
  medias.forEach((media) => {
  const mediaModel = mediaFactory(media);
  const mediaCardDOM = mediaModel.getMediaCardDOM();
  return mediaCardDOM;
  })
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
  const [photographer, mediaPhotograph] = await getPhotographer(photographerId);
  photographerDisplay(photographer);
  mediaDisplay(mediaPhotograph);

}

getUrlId();
