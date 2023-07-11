import {data} from './data.js';
import {SectionPrimary} from './components/sectionPrimary/sectionPrimary.js';
import {SectionWarranty} from './components/sectionWarranty/SectionWarranty.js';

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
root.insertAdjacentHTML('beforeend', SectionWarranty(warranty));
