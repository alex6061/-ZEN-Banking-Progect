import { data} from './data.js';
import { Header } from './components/widgets/Header/Header.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { handleThemeClick } from './handlers.js';
import { Sun } from './components/features/Theme/ui/Sun.js';
import { Moon } from './components/features/Theme/ui/Moon.js';

const root = document.querySelector('#root');

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

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

