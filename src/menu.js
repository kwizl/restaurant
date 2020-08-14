const Menu = () => {
  const mainContent = document.getElementById('content');
  const menu = document.createElement('div');
  const h2 = document.createElement('h2');
  const menuItems = document.createElement('div');

  const burgerTitle = () => {
    menu.setAttribute('id', 'menu');
    h2.classList.add('menu-title');

    mainContent.appendChild(menu);
    menu.appendChild(h2);

    h2.textContent = 'MENU';
  };

  const burgerItems = () => {
    menuItems.classList.add('menu-items');
    menu.appendChild(menuItems);
  };

  const burgers = () => {
    const menuItem = document.createElement('div');
    const menuImgContainer = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');

    menuItem.classList.add('menu-item');
    menuImgContainer.classList.add('menu-img__container');
    img.classList.add('menu-item__img');

    menuItems.appendChild(menuItem);
    menuItem.appendChild(menuImgContainer);
    menuImgContainer.appendChild(img);
    menuImgContainer.appendChild(p1);
    menuImgContainer.appendChild(p2);
    menuItem.appendChild(p3);
    menuItem.appendChild(p4);
    menuItem.appendChild(p5);

    img.src = '../dist/img/beef-burger.jpeg';
    img.alt = 'Beef Burger';
    p1.textContent = 'Price: $8.99';
    p2.textContent = 'Beef Burger';
    p3.innerHTML = '&nbsp; - Beef';
    p4.innerHTML = '&nbsp; - Tomatoes & Onions';
    p5.innerHTML = '&nbsp; - Lettuce';
  };

  const burgersDisplay = () => {
    burgerTitle();
    burgerItems();
    burgers();
    burgers();
    burgers();
    burgers();
  };
  return { burgersDisplay };
};

// eslint-disable-next-line import/prefer-default-export
export { Menu };