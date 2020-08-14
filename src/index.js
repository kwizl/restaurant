/* eslint-disable import/extensions */
import { Home } from './home.js';
import { Menu } from './menu.js';
import { Contact } from './contact.js';

const Init = () => {
  const home = Home();
  const menu = Menu();
  const contact = Contact();

  const homeToggle = () => {
    const homeID = document.getElementById('home');
    const contactID = document.getElementById('contact-us');
    const menuID = document.getElementById('menu');
    menuID.style.display = 'none';
    contactID.style.display = 'none';
    homeID.style.display = 'block';
  };

  const menuToggle = () => {
    const homeID = document.getElementById('home');
    const contactID = document.getElementById('contact-us');
    const menuID = document.getElementById('menu');
    homeID.style.display = 'none';
    contactID.style.display = 'none';
    menuID.style.display = 'block';
  };

  const contactToggle = () => {
    const homeID = document.getElementById('home');
    const contactID = document.getElementById('contact-us');
    const menuID = document.getElementById('menu');
    homeID.style.display = 'none';
    menuID.style.display = 'none';
    contactID.style.display = 'block';
  };

  const LoadPage = () => {
    window.onload = () => {
      home.thumbnail();
      menu.burgersDisplay();
      contact.contactContent();

      homeToggle();
    };
  };

  return {
    LoadPage, homeToggle, menuToggle, contactToggle,
  };
};

{
  const init = Init();
  init.LoadPage();

  const homeBtn = document.getElementById('hometab');
  const menuBtn = document.getElementById('menutab');
  const contactBtn = document.getElementById('contacttab');

  homeBtn.addEventListener('click', () => {
    init.homeToggle();
  });

  menuBtn.addEventListener('click', () => {
    init.menuToggle();
  });

  contactBtn.addEventListener('click', () => {
    init.contactToggle();
  });
}
