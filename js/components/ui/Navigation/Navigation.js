import { NavList } from './navList/navList.js';
import { data } from './../../../data.js';

/**@typedef {import('./type.ts').Navigation} Navigation */

/**
 * @function Navigation
 * @param {Object} data 
 * @param {string} list 
 * @param {string} parrentClassName 
 * @returns {string} HTML or empty
 */

export const Navigation = (data, parrentClassName) => {
  if (Object.keys(data) !== 1) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__nav` 
    : `nav`;
    console.log({Navigation})

  return `
    <nav class="${currentClassName}">
      ${NavList}
    </nav> 
  `;
};


