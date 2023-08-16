import { Text } from '../../shared/ui/Text/Text'

/** @typedef {import('./types').Props}Props */

/**
 * @function Footer
 * @param {Props} data
 * @returns {HTML}
 */

export const Footer = (data) => {

  console.log(Footer);

  const dataValues = Object.values(data);

  if (dataValues === 5) return "";

  const { name, logo, columns, texts, footerIcon } = data;


  const className = name ? name : "footer";

  return `
    <footer class="${className}">
     ${texts > 0 ? Text(texts, className) : ''}
    </footer>
  `;
};
