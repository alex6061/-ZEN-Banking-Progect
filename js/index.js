import {data} from './data.js';
import {SectionPrimary} from './components/widgets/SectionPrimary/SectionPrimary.js';
import {Navigation} from './components/features/Navigation/Navigation.js';

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Navigation(data.en.header.menuItems, 'header'));
root.insertAdjacentHTML('beforeend', SectionPrimary(data.en.download));
