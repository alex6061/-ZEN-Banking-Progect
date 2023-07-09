import {IconGoogle} from './../UI/IconGoogle/IconGoogle.js';
import {IconApple} from './../UI/IconApple/IconApple.js';

/**
 * @typedef {Object} Data
 * @property {string} url
 */

/**
 * @function BrandLink
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Brandink = (data, parrentClassName) => {
  if (Object.keys(data).length !== 1) return '';

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : `link`;

  return `
    <a
      class="${currentClassName}"
      href="${url}"
    >
     ${googleLink ? IconGoogle() : IconApple()}
    </a> 
  `
};
