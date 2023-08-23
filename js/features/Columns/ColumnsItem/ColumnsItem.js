import { IconLinkedIn } from '../../../shared/icons/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function ColumnsItem
 * @param {Props} links
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const ColumnsItem = (links, parrentClassName) => {
  const { content } = links;

  const currentClassName = parrentClassName
    ? `${parrentClassName}-item`
    : 'item';

  return `
    <li class="${currentClassName}">
      ${content.includes('.svg')
          ? `<a href="#">${IconLinkedIn()}</a>`
          : `<a href="#">${content}</a>`
        }
    </li>
  `;
};
