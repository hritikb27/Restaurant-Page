function Homecontent(){
    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'main');
    const image = document.createElement('img');
    const h1 = document.createElement('h1');
    const para = document.createElement('p');

    image.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8258272.jpg&q=85";
    image.style.width = '1280px';
    image.style.height = '720px';
    h1.textContent = "Welcome To Our Restaurant!";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae obcaecati incidunt hic distinctio sit commodi neque aliquam. Minima quam delectus, aperiam quas cumque at ipsam veritatis tempora magnam rerum."

    divContent.appendChild(image);
    divContent.appendChild(h1);
    divContent.appendChild(para);

    return divContent;
}

export default Homecontent;