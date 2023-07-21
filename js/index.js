import { data } from './data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';

const root = document.querySelector('#root');

const { 
  download,
  warranty,
  care,
  cashback, 
  clients, 
  footer 
} = data.en;

root.insertAdjacentHTML('beforeend', SectionPrimary(download));


