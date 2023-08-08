import { data } from './data.js';

import { 
  Header, 
  SectionPrimary, 
  SectionSecondary, 
  SectionTernary,
} from './widgets/index.js';

import { 
  handleThemeClick,
  handleBurgerClick
} from './handlers.js';

const { en } = data;

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Header(en.header));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.download));
root.insertAdjacentHTML('beforeend', SectionSecondary(en.warranty));
root.insertAdjacentHTML('beforeend', SectionTernary(en.care));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);
