function mediaFactory(data) {
  // récupérer les éléments du json, asigner data aux elements recuperes
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    let mediaTemplate = "";
    function mediaIsVideo() {
      if (video) {
        mediaTemplate += `<article>
          <a class="media-link" href="">
            <video controls width="250">
              <source src="assets/medias/${photographerId}/${video}"
                type="video/mp4">
            </video>
          </a>
          <div class="media-infos">
            <p> ${title}</p>
            <div class="div-likes">
              <span>${likes}❤</span>
            </div>
          </div>
        </article>`
      } else if (image) {
        mediaTemplate += `
        <article>
          <a class="media-link" href="">
            <img class"media-image" src="assets/medias/${photographerId}/${image}"/>
          </a>
          <div class="media-infos">
            <p> ${title}</p>
            <div class="div-likes">
              <span>${likes}❤</span>
            </div>
          </div>
        </article>`
      }
      else {
        return 'no media found';
      }
      return mediaTemplate;
    }

    const media = mediaIsVideo();

    const mediaSection = document.querySelector('.mediaSection');
    mediaSection.innerHTML += media;


    return [media];
  }
  // return les variables et les fonctions créées
  return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
}


// ****others methods****

//   const article = document.createElement('article');

  //   const a = document.createElement('a');
  //   a.setAttribute("href", "");
  //   a.classList.add('media-link');

  //   // gérer la video ou image function
  //   function mediaIsVideo(name) {
  //     const img = document.createElement('img');
  //     if (video) {
  //       img.setAttribute("src", `assets/photographers/${name}/${video}`);
  //       img.setAttribute("alt", "");
  //     } else if (image) {
  //       img.setAttribute("src", `assets/photographers/${image}`);
  //       img.setAttribute("alt", "");
  //     }
  //     else {
  //       return 'no media found';
  //     }
  //     return img;
  //   }

  //   const img = mediaIsVideo();

  //   const mediaInfos = document.createElement('div');
  //   mediaInfos.classList.add('media-infos');

  //   const imgTitle = document.createElement('p');
  //   const divLikes = document.createElement('div');
  //   divLikes.classList.add('div-likes');

  //   const numLikes = document.createElement('span');
  //   numLikes.classList.add('likes');


  //   imgTitle.textContent = `${title}`;
  //   numLikes.textContent = `${likes}🤍`;



  //   a.appendChild(img);
  //   divLikes.appendChild(numLikes);
  //   mediaInfos.appendChild(imgTitle);
  //   mediaInfos.appendChild(divLikes);
  //   article.appendChild(mediaInfos);
  //   article.appendChild(a);

  //   console.log(typeof article);
