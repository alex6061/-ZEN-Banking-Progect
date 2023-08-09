import { IconGoogle, IconApple } from '../../shared/icons/index.js';

/**@typedef {import('./types').Link} Link*/

/**
 * @function BrandLink
 * @param {Data} type
 * @param {Data} link
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const BrandLink = (link, type = 'google', source, parrentClassName) => {
  if (Object.keys(link).length !== 2) return '';

  const {  } = link

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
