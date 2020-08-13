const Contact = () => {
  const contactTitle = () => {
    const mainContent = document.getElementById('content');
    const contactUs = document.createElement('div');

    const h2 = document.createElement('h2');

    const contactImg = document.createElement('div');
    const p1 = document.createElement('p');

    const contactContent = document.createElement('div');
    const p2 = document.createElement('p');

    const contactCol = document.createElement('div');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const ul1 = document.createElement('ul');
    const ul2 = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const a4 = document.createElement('a');

    contactUs.setAttribute('id', 'contact-us');
    h2.classList.add('contact-us-title');

    contactContent.classList.add('contact-us-content');
    contactImg.classList.add('contact-img');

    contactCol.classList.add('contact-us-col');
    col1.classList.add('col-1-of-2');
    col2.classList.add('col-1-of-2');
    ul1.classList.add('contact-us__list');
    ul2.classList.add('contact-us__list');
    li1.classList.add('contact-us__item');
    li2.classList.add('contact-us__item');
    li3.classList.add('contact-us__item');
    li4.classList.add('contact-us__item');
    a1.classList.add('contact-us__link');
    a2.classList.add('contact-us__link');
    a3.classList.add('contact-us__link');
    a4.classList.add('contact-us__email');

    mainContent.appendChild(contactUs);
    contactUs.appendChild(h2);
    contactUs.appendChild(contactImg);
    contactUs.appendChild(contactContent);
    contactContent.appendChild(p2);
    contactImg.appendChild(p1);

    contactUs.appendChild(contactCol);
    contactCol.appendChild(col1);
    contactCol.appendChild(col2);
    col1.appendChild(ul1);
    col2.appendChild(ul2);
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    ul1.appendChild(li3);
    ul2.appendChild(li4);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);

    h2.textContent = 'Contact Us';
    p1.textContent = 'Get To Know Us';
    p2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    a1.textContent = 'LinkedIn';
    a2.textContent = 'Twitter';
    a3.textContent = 'Facebook';
    a4.textContent = 'bestburgers@gmail.com';
  };

  return { contactTitle };
};

// eslint-disable-next-line import/prefer-default-export
export { Contact };