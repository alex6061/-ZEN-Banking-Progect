import {NavItem} from './NavItem/NavItem.js';

/** @typedef {import('./NavItem/types').NavItem} NavItem */

/**
 * @function NavList
 * @param {NavItem[]} list 
 * @param {string} parrentClassName 
 * @returns {string}
 */

export const NavList = (list, parrentClassName) => {
  if (!Object.keys(list).length) return '';
  
  const currentClassName = parrentClassName 
    ? `${parrentClassName}__menu` 
    : `menu`;

  return `
    <ul class="${parrentClassName}__nav-list">
      ${list.map((listItem) => NavItem(listItem, parrentClassName)).join('')}
    </ul>          
  `;
};
