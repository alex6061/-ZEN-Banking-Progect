import { IconLogo } from '../../ui/IconLogo/IconLogo.js';
import { data } from './../../../data.js';

/**
 * @function Logo 
 * @param {data} logo 
 * @param {string} parrentClassName 
 * @returns {string}
 */

export const Logo = (logo, parrentClassName) => {
  if (!logo) return '';

  const currentClassName = parrentClassName
    ? `${parrentClassName}__logo`
    : `logo`;

  return `
    <button class="${currentClassName}"> 
      ${IconLogo()}
    </button>
  `;
};
