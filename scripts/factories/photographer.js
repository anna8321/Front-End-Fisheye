function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/photographers ID Photos/${portrait}`;
    const photographerPage = `./photographer.html?id=${id}`;


    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const a = document.createElement('a');
        a.setAttribute("href", photographerPage );
        a.classList.add('photographer-link');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "")

        const h2 = document.createElement( 'h2' );
        const photographerCity = document.createElement('p');
        photographerCity.classList.add('photographer-city');
        const photographerTagline = document.createElement('span');
        const photographerPrice = document.createElement('p');
        photographerPrice.classList.add('photographer-price');


        h2.textContent = name;
        photographerCity.textContent = `${city}, ${country}`;
        photographerTagline.textContent = tagline;
        photographerPrice.textContent = `${price}€/jour`;

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(photographerCity);
        article.appendChild(photographerTagline);
        article.appendChild(photographerPrice);

        return (article);
    }
    return { name, id, photographerPage, picture, getUserCardDOM }
}
