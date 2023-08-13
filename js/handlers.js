import { IconSun, IconMoon } from './shared/icons/index.js';

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;
  const { brands } = data.en.clients;

  const $root = document.querySelector('#root');
  const $header = document.querySelector('#header');
  const $lang = document.querySelector('#lang');
  const $brands = [...document.querySelectorAll('img["brand"]')];

  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark';
    currentTarget.innerHTML = IconSun();

    $root.classList.add('dark');
    $root.classList.remove('light');

    $header.classList.add('dark');
    $header.classList.remove('light');

    $lang.classList.add('dark');
    $lang.classList.remove('light');

    $lang.classList.add('dark');
    $lang.classList.remove('light');

    brands.forEach(($brand, index) => {
      $brand.src = brands['light'][index].source;
    });
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

    brands.forEach(($brand, index) => {
      $brand.src = brands['dark'][index].source;
    });
  }
};

export const handleBurgerClick = (event) => {
  const { currentTarget } = event;
  currentTarget.classList.toggle('active');
};
