import { Text } from '../../shared/ui/index.js';
import { IconFooter } from '../../shared/icons/index.js';
import { Columns } from '../../features/index.js';

/** @typedef {import('./types').Props}Props */

/**
 * @function Footer
 * @param {Props} data
 * @returns {HTML}
 */

export const Footer = (data) => {
  console.log(Footer);
  const dataValues = Object.values(data);
  if (dataValues === 5) return '';
  const { name, logo, columns, texts, footerIcon } = data;

  const className = name ? name : 'footer';

  return `
    <footer class="${className}">
      ${texts.length > 0
          ? texts.map((text) => Text(text, className)).join('')
          : ''
      }
      ${columns.map((column) => Columns(column, className)).join('')}
    </footer>
  `;
};
