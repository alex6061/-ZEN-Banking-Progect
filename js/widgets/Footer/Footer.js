import { Text } from '../../shared/ui/index.js';
import { IconFooter } from '../../shared/icons/index.js';

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
  console.log(texts);
  const className = name ? name : 'footer';

  return `
    <footer class="${className}">
    
    </footer>
  `;
};

// ${columns.map((column) => column(className))} class="${className}">
