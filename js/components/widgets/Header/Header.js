import {data} from '../../../data.js';
/** @typedef {import('./types').Header} Data */

/**
 * @function Header
 * @param {Data} data 
 * @returns {string}
 */

export const Header = (data) => {

  const dataValues = Object.values(data);

  if (dataValues.length !== 5 ) return '';

  const {name, logo, menuItems , theme, lang} = data;

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
