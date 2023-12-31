/** @typedef {import('../../types').NavItem} NavItem */

/**
 * @function NavItem
 * @param {NavItem} navItem 
 * @param {string} parrencClassName 
 * @returns {string} HTML or empty
 */

export const NavItem = (navItem, parrentClassName) => {
  if (Object.keys(navItem).length !== 4) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__nav-item` 
    : `nav-item`;

  const { target, content } = navItem;

  return `
    <li class="${currentClassName}">
      <a href="#${target}">${content}</a>
    </li>
  `;
};
