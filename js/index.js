import {data} from './data.js'
import {SectionPrimary} from './components/sectionPrimary/sectionPrimary.js'
import {SectionCare} from './components/sectionCare/sectionCare.js';

const root = document.querySelector('#root')

const { 
  download,
  warranty,
  care,
  cashback, 
  clients, 
  footer 
} = data.en;

root.insertAdjacentHTML('beforeend', SectionPrimary(download));
root.insertAdjacentHTML('beforeend', SectionCare(care));
