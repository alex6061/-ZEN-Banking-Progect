import { IconFooterLogo } from '../../shared/icons/index.js';

/**
 * @function FooterLogo
 * @param {string} parrentClassName
 * @returns
 */

export const FooterLogo = (parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__logo`
    : `logo`;

  return `
    <button 
    class="${currentClassName}"
    >
      ${IconFooterLogo()}
    </button>  
  `;
};
