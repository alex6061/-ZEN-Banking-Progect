import { NavList } from './NavList/NavList.js';

/** @typedef {import('./types').NavList} NavList */

/**
 * @function Navigation
 * @param {NavList} navList 
 * @param {string} parrentClassName 
 * @returns {string} HTML or empty
 */

export const Navigation = (navList, parrentClassName) => {
  if (!navList.length) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__nav` 
    : `nav`;

  return `
    <nav class="${currentClassName}">
      ${NavList(navList, parrentClassName)}
    </nav> 
  `;
};


