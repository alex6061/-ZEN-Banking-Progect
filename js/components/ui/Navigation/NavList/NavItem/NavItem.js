import { NavLink } from './NavLink/NavLink.js';

/**
 * @Function NavItem
 * @param {*} item 
 * @param {*} parrentClassName 
 * @returns {string} HTML or empty
 */

export const NavItem = (item, parrentClassName) => {
  console.log({NavItem})
  if (Object.keys(item) !== 1) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__nav` 
    : `nav`;

  return `
    <li class="${currentClassName}">
      ${NavLink === 'download' ?? NavLink}
    </li>
    <li class="${currentClassName}">
      ${NavLink === 'Warranty' ?? NavLink}
    </li>
    <li class="${currentClassName}">
      ${NavLink === 'care' ?? NavLink}
    </li>
    <li class="${currentClassName}">
      ${NavLink === 'clients' ?? NavLink}
    </li>
    <li class="${currentClassName}">
      ${NavLink === 'cashback' ?? NavLink}
    </li>
  `;
};

