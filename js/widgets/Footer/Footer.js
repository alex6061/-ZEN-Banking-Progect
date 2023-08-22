import { Columns } from '../../features/index.js';
import { FooterLogo } from '../../features/FooterLogo/FooterLogo.js';
import { Text } from '../../shared/ui/index.js';

/** @typedef {import('./types').Props}Props */

/**
 * @function Footer
 * @param {Props} data
 * @returns {HTML}
 */

export const Footer = (data) => {
  const dataValues = Object.values(data);

  if (dataValues === 5) return '';

  const { name, logo, columns, texts, footerIcon } = data;

  const className = name ? name : 'footer';

  return `
    <footer class="${className}">
      ${columns.map((column) => Columns(column, className)).join('')}
      ${logo ? FooterLogo(className) : ''}
      ${
        texts.length > 0
          ? texts.map((text) => Text(text, className)).join('')
          : ''
      }
    </footer>
  `;
};
