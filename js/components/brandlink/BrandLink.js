import {IconGoogle} from './../UI/IconGoogle/IconGoogle.js';
import {IconApple} from './../UI/IconApple/IconApple.js';

/**@typedef {import('./')} Data*/

/**
 * @function BrandLink
 * @param {Link} link
 * @param {'apple' | 'google'} type
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Brandlink = (link, type, parrentClassName) => {
  if (Object.keys(link).length !== 1) return '';

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : `link`;

  return `
    <a
      class="${currentClassName}"
      href="${url}"
    >
     ${type === 'google' ? IconGoogle() : IconApple()}
    </a> 
  `
};
