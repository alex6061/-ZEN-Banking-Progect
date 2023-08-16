/** @typedef {import('./types').Props}Props */

/**
 * @function Footer
 * @param {Props} data
 * @returns
 */

export const Footer = (data) => {
  const dataValues = Object.values(data);

  if (dataValues === 5) return "";

  const { name, logo, columns, texts, footerIcon } = data;

  const className = name ? name : "footer";

  return `
    <footer class="${className}">

    </footer>
  `;
};
