/* eslint-disable import/extensions */
import { Home } from './home.js';
import { Menu } from './menu.js';
import { Contact } from './contact.js';

const home = Home();
const menu = Menu();
const contact = Contact();

home.thumbnail();

menu.burgerTitle();
menu.burgerItems();
menu.burgers();
menu.burgers();
menu.burgers();
menu.burgers();

contact.contactContent();