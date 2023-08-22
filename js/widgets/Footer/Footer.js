import { Text } from '../../shared/ui/index.js';
import { Columns, Copyright } from '../../features/index.js';

/** @typedef {import('./types').Props}Props */

/**
 * @function Footer
 * @param {Props} data
 * @returns {HTML}
 */

export const Footer = (data) => {
  const dataValues = Object.values(data);

  if (dataValues === 5) return '';

  const { name, logo, columns, texts, copyright } = data;

  const className = name ? name : 'footer';

  return `
    <footer class="${className}">
      ${
        texts.length > 0
          ? texts.map((text) => Text(text, className)).join('')
          : ''
      }
      ${columns.map((column) => Columns(column, className)).join('')}
      ${Copyright(copyright, className)}
    </footer>
  `;
};
