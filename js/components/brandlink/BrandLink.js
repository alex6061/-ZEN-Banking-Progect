import {IconGoogle} from './../UI/IconGoogle/IconGoogle.js';
import {IconApple} from './../UI/IconApple/IconApple.js';

/**@typedef {import('./types').Link} Link*/

/**
 * @typedef {Object} Data
 * @property {string} url
 */

/**
 * @function BrandLink
 * @param {Data} link
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const BrandLink = (link, type, source, parrentClassName) => {
  if (Object.keys(link).length !== 2) return '';

  const currentClassName = parrentClassName
    ? `${parrentClassName}_BrandLink`
    : `BrandLink`;

  return `
    <a
      class="${currentClassName}"
      href="${source}"
    >
     ${type === 'google' ? IconGoogle() : IconApple()}
    </a> 
  `
};
