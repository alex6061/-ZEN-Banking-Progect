import { Logo } from '../../features/Logo/Logo.js';
import { Navigation } from '../../features/Navigation/Navigation.js';
import { Theme } from '../../features/Theme/Theme.js';
import { Lang } from '../../Lang/Lang.js';
import { Burger } from '../../features/Burger/Burger.js';

/** @typedef {import('./types').HeaderData} Data */

/**
 * @function Header
 * @param {Data} data 
 * @returns {string}
 */

export const Header = (data, theme = 'light') => {
  const dataValues = Object.values(data);

  if (dataValues.length !== 3 ) return '';

  const { name, menuItems, langs} = data;

  const className = name ? name : 'header';

  return `
    <header class="${className}" id="header">
      <div class="${className}__wrapper">
        ${Logo(className)}
        ${menuItems ? Navigation(menuItems, className) : ''}
        <div class="${className}__inner">
          ${langs ? Lang(className) : ''}
          ${Theme(className)}
          ${Burger(className)}
        </div>
      </div>
    </header>
  `;
};
