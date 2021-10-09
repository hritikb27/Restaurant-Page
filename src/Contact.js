function contactContent(){
    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'main');
    const h1 = document.createElement('h1');
    const para = document.createElement('p');

    h1.textContent = "Contact!";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae obcaecati incidunt hic distinctio sit commodi neque aliquam. Minima quam delectus, aperiam quas cumque at ipsam veritatis tempora magnam rerum."

    divContent.appendChild(h1);
    divContent.appendChild(para);

    return divContent;
}

export default contactContent;