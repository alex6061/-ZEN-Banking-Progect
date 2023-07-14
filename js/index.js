import {data} from './data.js';
import {SectionPrimary} from './components/widgets/SectionPrimary/SectionPrimary.js';
import {Navigation} from './components/ui/Navigation/Navigation.js';

const root = document.querySelector('#root');

const { 
  header,
  download,
  warranty,
  care,
  cashback, 
  clients, 
  footer 
} = data.en;

const {navigation} = header;

root.insertAdjacentHTML('beforeend', Navigation(navigation));
console.log({navigation})
root.insertAdjacentHTML('beforeend', SectionPrimary(download));
