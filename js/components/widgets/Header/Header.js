import { data } from '../../../data.js';
import { Logo } from '../../features/Logo/Logo.js';
import { Navigation } from '../../features/Navigation/Navigation.js';
import { Theme } from '../../features/Theme/Theme.js';
import { Lang } from '../../Lang/Lang.js';
import { Burger } from '../../features/Burger/Burger.js';

/** @typedef {import('./../../../schema/types').Header} Data */

/**
 * @function Header
 * @param {Data} data 
 * @returns {string}
 */

export const Header = (data) => {
  const dataValues = Object.values(data);

  if (dataValues.length !== 4 ) return '';

  const { name, logo, menuItems, langs} = data;

  const currentClassName = name ? name : 'header';

  return `
    <header class="${className}">
      ${logo ? Logo(logo, className) : ''}
      ${menuItems ? Navigation(menuItems, className) : ''}
      ${Theme()}
      ${langs ? Lang(langs, className) : ''}
      ${Burger()}
    </header>
  `;
};
