import { IconLogo } from './IconLogo/IconLogo.js'

/**
 * @function Logo 
 * @param {string} parrentClassName 
 * @returns {string}
 */

export const Logo = (parrentClassName) => {

  const currentClassName = parrentClassName
    ? `${parrentClassName}__logo`
    : `logo`;

  return `
    <button class="${currentClassName}"> 
      ${IconLogo()}
    </button>
  `;
};
