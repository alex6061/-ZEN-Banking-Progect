import {data} from './data.js';
import {SectionPrimary} from './components/widgets/SectionPrimary/SectionPrimary.js';
import {Navigation} from './components/features/Navigation/Navigation.js';

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

root.insertAdjacentHTML('beforeend', SectionPrimary(download));
