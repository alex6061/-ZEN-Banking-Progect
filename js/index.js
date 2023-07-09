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

const { title,text,links,image } = download

root.insertAdjacentHTML('beforeend', SectionPrimary(title,text,links,image));
