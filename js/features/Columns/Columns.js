import { ColumnsItem } from './ColumnsItem/ColumnsItem.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function Columns
 * @param {Props} data
 * @param {Props} links
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const Columns = (data, parrentClassName) => {
  const { title, links } = data;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__column`
    : 'columns';

  return `
      <h3 class="${currentClassName}-title">${title}</h3>
      <ul class="${currentClassName}">
        ${links.map((link) => ColumnsItem(link, currentClassName)).join('')}
      </ul>
  `;
};
