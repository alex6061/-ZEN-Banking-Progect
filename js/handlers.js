import { Sun } from './components/features/Theme/ui/Sun.js';
import { Moon } from './components/features/Theme/ui/Moon.js';


export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;

  const elBurger = document.getElementById('burger')
  const elSpan = elBurger.querySelector('span[data-theme]')
      
  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark'
    currentTarget.innerHTML = Sun();
    // theme background
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    // theme logo
    document.querySelector('.header__logo').classList.add('dark')
    document.querySelector('.header__logo').classList.remove('light')

    // theme burger
    elSpan.classList.add('dark');
    elSpan.classList.remove('light');
  };
      
  if (theme === 'dark'){
    currentTarget.dataset.theme = 'light'
    currentTarget.innerHTML = Moon();
    // theme background
    document.body.classList.add('light')
    document.body.classList.remove('dark')
    // theme logo
    document.querySelector('.header__logo').classList.add('light')
    document.querySelector('.header__logo').classList.remove('dark')
    // theme burger
    elSpan.classList.add('light');
    elSpan.classList.remove('dark');
  };
};
