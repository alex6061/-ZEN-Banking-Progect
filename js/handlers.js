import { data } from './data.js';
import { IconSun, IconMoon } from './shared/icons/index.js';

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;
  const { brands } = data.en.clients;

  const $root = document.querySelector('#root');
  const $header = document.querySelector('#header');
  const $lang = document.querySelector('#lang');
  const $brands = [...document.querySelectorAll('img[data-type="brand"]')];
  const $menu = document.querySelector('#menu');

  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark';
    currentTarget.innerHTML = IconSun();

    $root.classList.add('dark');
    $root.classList.remove('light');

    $header.classList.add('dark');
    $header.classList.remove('light');

    $lang.classList.add('dark');
    $lang.classList.remove('light');

    $brands.forEach(($brand, index) => {
      $brand.src = brands['light'][index].source;
    });
    root.classList.add('dark');
    root.classList.remove('light');

    header.classList.add('dark');
    header.classList.remove('light');

    lang.classList.add('dark');
    lang.classList.remove('light');

    $menu.classList.add('dark');
    $menu.classList.remove('light');
  }

  if (theme === 'dark') {
    currentTarget.dataset.theme = 'light';
    currentTarget.innerHTML = IconMoon();

    $root.classList.add('light');
    $root.classList.remove('dark');

    $header.classList.add('light');
    $header.classList.remove('dark');

    $lang.classList.add('light');
    $lang.classList.remove('dark');

    $brands.forEach(($brand, index) => {
      $brand.src = brands['dark'][index].source;
    });
    root.classList.add('light');
    root.classList.remove('dark');

    header.classList.add('light');
    header.classList.remove('dark');

    lang.classList.add('light');
    lang.classList.remove('dark');

    $menu.classList.add('light');
    $menu.classList.remove('dark');
  }
};

export const handleBurgerClick = (event) => {
  console.log('burger_click');

  const { currentTarget } = event;
  const $menu = document.querySelector('#menu');
  currentTarget.classList.toggle('active');

  if (currentTarget.classList.contains('active')) {
    $menu.classList.add('active');
  }

  if (!currentTarget.classList.contains('active')) {
    $menu.classList.remove('active');
  }
};
