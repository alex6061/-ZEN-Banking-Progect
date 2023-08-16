import { 
  Logo, 
  Navigation, 
  Theme, 
  Lang, 
  Burger,
} from '../../features/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function Header
 * @param {Props} data 
 * @returns {string}
 */

export const Header = (data, theme = 'light') => {
  const dataValues = Object.values(data);

  if (dataValues.length !== 3) return '';

  const { name, menuItems, langs } = data;

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
