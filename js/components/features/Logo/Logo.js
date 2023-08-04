import { IconLogo } from "../../ui/IconLogo/IconLogoDark.js";
/**
 * @function Logo 
 * @param {string} parrentClassName 
 * @returns {string}
 */

export const Logo = (parrentClassName, theme = 'light') => {

  const currentClassName = parrentClassName
    ? `${parrentClassName}__logo`
    : `logo`;

  return `
    <button 
      class="${currentClassName}" 
      data-theme="${theme}" 
    > 
      ${IconLogo()}
    </button>
  `;
};
