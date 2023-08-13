import { data } from './../../data.js';

/** @typedef {import('./types.ts').Props}Props */

/**
 * @function Client
 * @param {data} data
 * @param {Object} brand
 * @param {string} parrencClassName
 * @param {Props} source
 * @param {Props} description
 * @returns {HTML}
 */

export const Client = (brand, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__image`
    : `image`;

  return `
    <img
      class="${currentClassName}"
      src="${brand.source}"
      alt="${brand.description}"
    />
  `;
};
