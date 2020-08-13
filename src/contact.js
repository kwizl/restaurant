const Contact = () => {
  const contactTitle = () => {
    const mainContent = document.getElementById('content');
    const contactUs = document.createElement('div');

    const h2 = document.createElement('h2');

    const contactImg = document.createElement('div');
    const p1 = document.createElement('p');

    const contactContent = document.createElement('div');
    const p2 = document.createElement('p');

    contactUs.setAttribute('id', 'contact-us');
    contactImg.classList.add('contact-img');
    h2.classList.add('contact-us-title');
    contactContent.classList.add('contact-us-content');

    mainContent.appendChild(contactUs);
    contactUs.appendChild(h2);
    contactUs.append(contactImg);
    contactUs.append(contactContent);
    contactContent.appendChild(p2);
    contactImg.appendChild(p1);

    h2.textContent = 'Contact Us';
    p1.textContent = 'Get To Know Us';
    p2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  };

  return { contactTitle };
};

// eslint-disable-next-line import/prefer-default-export
export { Contact };