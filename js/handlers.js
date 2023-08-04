import { Sun } from './components/features/Theme/ui/Sun.js';
import { Moon } from './components/features/Theme/ui/Moon.js';

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;

  const elBurger = document.getElementById('burger')
  
  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark'
    currentTarget.innerHTML = Sun();
    // theme background
    root.classList.add('dark')
    root.classList.remove('light')
    // theme burger
    elBurger.classList.add('dark');
    elBurger.classList.add('light');
    // logo
    root.querySelector('header__logo').classList.add('dark')
    root.querySelector('header__logo').classList.remove('light')
  };
      
  if (theme === 'dark'){
    currentTarget.dataset.theme = 'light'
    currentTarget.innerHTML = Moon();
    // theme background
    root.classList.add('light')
    root.classList.remove('dark')
    // theme burger
    elBurger.classList.add('dark');
    elBurger.classList.add('light');
    //logo
    root.querySelector('header__logo').classList.add('light')
    root.querySelector('header__logo').classList.remove('dark')
  };
};

