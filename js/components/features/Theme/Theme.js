import { Moon } from './ui/Moon.js';
import { Sun } from './ui/Sun.js'; 

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
      ${theme === 'light' ? Moon() : Sun()}
    </button> 
  `;
};
