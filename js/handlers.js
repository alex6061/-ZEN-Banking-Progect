import { IconSun } from './components/features/Theme/ui/IconSun.js';
import { IconMoon } from './components/features/Theme/ui/IconMoon.js';

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;

  const root = document.querySelector('#root')
  const header = document.querySelector('.header')
  
  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark'
    currentTarget.innerHTML = IconSun();
    // background
    root.classList.add('dark')
    root.classList.remove('light')
    //header
    header.classList.add('dark')
    header.classList.remove('light')
  };
      
  if (theme === 'dark'){
    currentTarget.dataset.theme = 'light'
    currentTarget.innerHTML = IconMoon();
    // background
    root.classList.add('light')
    root.classList.remove('dark')
    //header
    header.classList.add('light')
    header.classList.remove('dark')
  };
};

