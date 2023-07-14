import { Moon } from './ui/Moon.js';
import { Sun } from './ui/Sun.js'; 

/**
 * @function Theme
 * @param {string} parrentClassName
 * @param {'light' | 'dark'} theme
 * @returns {string} HTML or empty
 */

export const Theme = (theme = 'light', parrentClassName) => {

  const currentClassName = parrentClassName
  ? `${parrentClassName}__theme`
  : 'theme';

  return `
    <button class="${currentClassName}">
      ${ theme === 'light' ? Moon() : Sun() }
    </button> 
  `;
};
