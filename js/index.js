import {data} from './data.js'
import {SectionPrimary} from './components/sectionPrimary/sectionPrimary.js'

const root = document.querySelectorAll('#root')

const { 
  download,
  warranty,
  care,
  cashback, 
  clients, 
  footer 
} = data.en;

root.insertAdjacentHTML('beforeend', SectionPrimary(download));
