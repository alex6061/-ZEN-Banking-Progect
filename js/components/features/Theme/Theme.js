import { IconMoon } from './ui/IconMoon.js';
import { IconSun } from './ui/IconSun.js'; 

/**
 * @function Theme
 * @param {string} parrentClassName
 * @param {'light' | 'dark'} theme
 * @returns {string} HTML or empty
 */

export const Theme = (parrentClassName, theme = 'light') => {
  const currentClassName = parrentClassName
  ? `${parrentClassName}__theme`
  : 'theme';

  return `
    <button 
      class="${currentClassName}" 
      id="theme" 
      data-theme="${theme}"
    >
      ${theme === 'light' ? IconMoon() : IconSun()}
    </button> 
  `;
};
