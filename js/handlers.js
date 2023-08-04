import { Sun } from './components/features/Theme/ui/Sun.js';
import { Moon } from './components/features/Theme/ui/Moon.js';

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;
  
  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark'
    currentTarget.innerHTML = Sun();
    // background
    root.classList.add('dark')
    root.classList.remove('light')
    // burger
    root.querySelector('.header__burger').classList.add('dark');
    root.querySelector('.header__burger').classList.remove('light');
    // logo
    root.querySelector('.header__logo').classList.add('dark')
    root.querySelector('.header__logo').classList.remove('light')
    // lang
    root.querySelector('.header__lang').classList.add('dark')
    root.querySelector('.header__lang').classList.remove('light')
  };
      
  if (theme === 'dark'){
    currentTarget.dataset.theme = 'light'
    currentTarget.innerHTML = Moon();
    // background
    root.classList.add('light')
    root.classList.remove('dark')
    // burger
    root.querySelector('.header__burger').classList.add('light');
    root.querySelector('.header__burger').classList.remove('dark');
    // logo
    root.querySelector('.header__logo').classList.add('light')
    root.querySelector('.header__logo').classList.remove('dark')
     // lang
    root.querySelector('.header__lang').classList.add('light')
    root.querySelector('.header__lang').classList.remove('dark')
  };
};

