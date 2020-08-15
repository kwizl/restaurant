const Home = () => {
  const thumbnail = () => {
    const mainContent = document.getElementById('content');
    const mainImg = document.createElement('div');
    const title = document.createElement('p');
    const subTitle = document.createElement('p');

    mainImg.setAttribute('id', 'home');
    title.classList.add('title');
    subTitle.classList.add('sub-title');

    mainContent.appendChild(mainImg);
    mainImg.appendChild(title);
    mainImg.appendChild(subTitle);

    title.textContent = 'The Best Burgers In Town';
    subTitle.textContent = 'We will leave you wanting more';
  };

  return { thumbnail };
};

// eslint-disable-next-line import/prefer-default-export
export { Home };
