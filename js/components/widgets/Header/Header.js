/**@typedef {import('./types').Header} Header */

/**
 * @function Header
 * @param {Object} data 
 * @returns {string}
 */

export const Header = (data) => {
  if (Object.keys(data) !== 5) return '';

  const {name, logo, menuItems, theme, lang} = data;

  const className = name ? name : 'header';

  return `
    <header className="${className}">

    </header>
  `;
};
