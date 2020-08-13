const Menu = () => {
  const burgers = () => {
    const mainContent = document.getElementById('content');
    const menu = document.createElement('div');
    const h2 = document.createElement('h2');
    const menuItems = document.createElement('div');
    const menuItem = document.createElement('div');
    const menuImgContainer = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');

    menu.setAttribute('id', 'menu');
    h2.classList.add('menu-title');
    menuItems.classList.add('menu-items');
    menuItem.classList.add('menu-item');
    menuImgContainer.classList.add('menu-img__container');
    img.classList.add('menu-item__img');

    mainContent.appendChild(menu);
    menu.appendChild(h2);
    menu.appendChild(menuItems);
    menuItems.appendChild(menuItem);
    menuItem.appendChild(menuImgContainer);
    menuImgContainer.appendChild(img);
    menuImgContainer.appendChild(p1);
    menuImgContainer.appendChild(p2);
    menuItem.appendChild(p3);
    menuItem.appendChild(p4);
    menuItem.appendChild(p5);

    h2.textContent = 'MENU';
    img.src = '../dist/img/beef-burger.jpeg';
    img.alt = 'Beef Burger';
    p1.textContent = 'Price: $8.99';
    p2.textContent = 'Beef Burger';
    p3.innerHTML = '&nbsp; - Beef';
    p4.innerHTML = '&nbsp; - Tomatoes & Onions';
    p5.innerHTML = '&nbsp; - Lettuce';
  };
  return { burgers };
};

export { Menu };