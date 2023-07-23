/** @typedef {import('./types').Header} Data */

/**
 * @function Header
 * @param {Data} data 
 * @returns {string}
 */

export const Header = (data) => {

  const dataValue = Object.values(data);

  if (dataValue.length !== 5 ) return '';

  const {name, logo, , theme, lang} = data;

  const className = name ? name : 'header';

  return `
    <header className="${className}">
      logo...
      navigation...
      theme...
      lang...
    </header>
  `;
};
