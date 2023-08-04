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
    //el
    root.querySelector('.header__logo','.header__lang','.header__burger').classList.add('dark')
    root.querySelector('.header__logo','.header__lang','.header__burger').classList.remove('light')
  };
      
  if (theme === 'dark'){
    currentTarget.dataset.theme = 'light'
    currentTarget.innerHTML = Moon();
    // background
    root.classList.add('light')
    root.classList.remove('dark')
    // el
    root.querySelector('.header__logo','.header__lang','.header__burger').classList.add('light')
    root.querySelector('.header__logo','.header__lang','.header__burger').classList.remove('dark')
  };
};

