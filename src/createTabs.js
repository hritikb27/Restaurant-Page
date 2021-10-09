const tabList = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';

home.style.cursor = 'pointer';
menu.style.cursor = 'pointer';
contact.style.cursor = 'pointer';

tabList.appendChild(home);
tabList.appendChild(menu);
tabList.appendChild(contact);

tabList.style.listStyleType = 'none';
tabList.style.display = 'flex';
tabList.style.gap = '20px';
tabList.style.justifyContent = 'center'

export {tabList, home, menu, contact};