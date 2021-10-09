const tabList = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';

tabList.appendChild(home);
tabList.appendChild(menu);
tabList.appendChild(contact);

export {tabList, home, menu, contact};