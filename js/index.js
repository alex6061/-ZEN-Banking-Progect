import { data } from './data.js';
import { Header } from './components/widgets/Header/Header.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { SectionSecondary } from './components/widgets/SectionSecondary/SectionSecondary.js';
import { SectionTernary } from './components/widgets/SectionTernary/SectionTernary.js';
import { handleThemeClick } from './handlers.js';

export const root = document.querySelector('#root');

const { 
  header,
  download, 
  warranty, 
  care, 
  cashback, 
  clients, 
  footer 
} = data.en

root.insertAdjacentHTML('beforeend', Header(header));
root.insertAdjacentHTML('beforeend', SectionPrimary(download));
root.insertAdjacentHTML('beforeend', SectionSecondary(warranty));
root.insertAdjacentHTML('beforeend', SectionTernary(care));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

