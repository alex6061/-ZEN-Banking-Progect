import { IconGoogle, IconApple } from '../../shared/icons/index.js';

/** @typedef {import('./types').Link} Link */

/**
 * @function BrandLink
 * @param {Link} link
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const BrandLink = (link, parrentClassName) => {
  if (Object.keys(link).length !== 3) return '';

  const { type, source } = link;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__brand-link`
    : `brand-link`;

  return `
    <a
      class="${currentClassName}"
      href="${source}"
    >
      ${type === 'google' ? IconGoogle() : IconApple()}
    </a> 
  `;
};
