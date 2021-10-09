import {tabList, home, menu, contact} from './createTabs.js';
import Homecontent from './home.js';
import menuContent from './Menu.js';
import contactContent from './Contact.js';
import css from './style.css'

const divAppend = document.querySelector('#content');

document.body.insertBefore(tabList, divAppend);

const makeDiv = Homecontent();

divAppend.appendChild(makeDiv);

tabList.setAttribute('class', 'menuTab');
home.setAttribute('class', 'menuList');
menu.setAttribute('class', 'menuList');
contact.setAttribute('class', 'menuList');

menu.addEventListener('click', ()=>{
    divAppend.innerHTML = '';
    const makeMenu = menuContent();
    divAppend.appendChild(makeMenu);
});

contact.addEventListener('click', ()=>{
    divAppend.innerHTML = '';
    const makeContact = contactContent();
    divAppend.appendChild(makeContact);
})

home.addEventListener('click', ()=>{
    divAppend.innerHTML = '';
    const makeHome = Homecontent();
    divAppend.appendChild(makeHome);
})

