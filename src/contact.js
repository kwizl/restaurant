const Contact = () => {
  const contactContent = () => {
    const mainContent = document.getElementById('content');
    const contactUs = document.createElement('div');

    const h2 = document.createElement('h2');
    const contactImg = document.createElement('div');
    const p = document.createElement('p');

    contactUs.setAttribute('id', 'contact-us');
    contactImg.classList.add('contact-img');
    h2.classList.add('contact-us-title');

    mainContent.appendChild(contactUs);
    contactUs.appendChild(h2);
    contactImg.appendChild(p);

    h2.textContent = 'Contact Us';
    p.textContent = 'Get To Know Us';
  };

  return { contactContent };
};

// eslint-disable-next-line import/prefer-default-export
export { Contact };