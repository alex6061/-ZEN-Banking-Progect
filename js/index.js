import { data } from './data.js'
import { Header } from './components/widgets/Header/Header.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { SectionTernary } from './components/SectionTernary/SectionTernary.js';

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
root.insertAdjacentHTML('beforeend', SectionTernary(care));

