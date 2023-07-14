import { NavList } from './navList/NavList.js';

/**@typedef {import('./type.js').MenuItems} Navigation */

/**
 * @function MenuItems
 * @param {Object} data 
 * @param {string} list 
 * @param {string} parrentClassName 
 * @returns {string} HTML or empty
 */

export const Navigation = (data, parrentClassName) => {
  if (Object.keys(data) !== 1) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__nav` 
    : `nav`;

  return `
    <nav class="${currentClassName}">
      ${NavList}
    </nav> 
  `;
};


