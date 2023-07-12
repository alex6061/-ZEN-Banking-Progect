import {NavItem} from "./NavItem/NavItem.js";

/**
 * @function NavList
 * @param {*} parrentClassName 
 * @returns 
 */

export const NavList = (list, parrentClassName) => {
  console.log({NavList})

  if (Object.keys(list) !== 5) return '';
  
  const currentClassName = parrentClassName 
    ? `${parrentClassName}__nav` 
    : `nav`;

  return `
    <ul class="${currentClassName}">
      ${NavItem}
      ${NavItem}
      ${NavItem}
      ${NavItem}
      ${NavItem}
    </ul>          
  `;
};
