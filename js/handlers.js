import { IconSun } from './components/features/Theme/ui/IconSun.js';
import { IconMoon } from './components/features/Theme/ui/IconMoon.js';
// ===== hendlers theme
export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;

  const root = document.querySelector('#root')
  const header = document.querySelector('.header')
  const lang = document.querySelector('#lang') 

  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark'
    currentTarget.innerHTML = IconSun();
    // background
    root.classList.add('dark')
    root.classList.remove('light')
    // header
    header.classList.add('dark')
    header.classList.remove('light')
    // lang
    lang.classList.add('dark')
    lang.classList.remove('light')
  };
      
  if (theme === 'dark'){
    currentTarget.dataset.theme = 'light'
    currentTarget.innerHTML = IconMoon();
    // background
    root.classList.add('light')
    root.classList.remove('dark')
    // header
    header.classList.add('light')
    header.classList.remove('dark')
    // lang
    lang.classList.add('light')
    lang.classList.remove('dark')
  };
};

