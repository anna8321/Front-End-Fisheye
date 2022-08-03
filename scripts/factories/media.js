function mediaFactory(data) {
  // récupérer les éléments du json, asigner data aux elements recuperes
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    // créer mes éléments html pour récupérer le média et return les éléments html
    const mediaSection = document.querySelector('section');
    const article = document.createElement('article');

    const a = document.createElement('a');
    a.setAttribute("href", "");
    a.classList.add('media-link');

    // gérer la video ou image function
    function mediaIsVideo() {
      const img = document.createElement('img');
      if (video) {
        img.setAttribute("src", `assets/photographers/${video}`);
        img.setAttribute("alt", "");
      } else if (image) {
        img.setAttribute("src", `assets/photographers/${image}`);
        img.setAttribute("alt", "");
      }
      else {
        return 'no media found';
      }
      return img;
    }

    const img = mediaIsVideo();

    const mediaInfos = document.createElement('div');
    mediaInfos.classList.add('media-infos');

    const imgTitle = document.createElement('p');
    const divLikes = document.createElement('div');
    divLikes.classList.add('div-likes');

    const numLikes = document.createElement('span');
    numLikes.classList.add('likes');


    imgTitle.textContent = `${title}`;
    numLikes.textContent = `${likes}`;



    a.appendChild(img);
    divLikes.appendChild(numLikes);
    mediaInfos.appendChild(imgTitle);
    mediaInfos.appendChild(divLikes);
    article.appendChild(mediaInfos);
    article.appendChild(a);
    mediaSection.appendChild(article);

    return { mediaSection };
  }
  // return les variables et les fonctions créées
  return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
}
