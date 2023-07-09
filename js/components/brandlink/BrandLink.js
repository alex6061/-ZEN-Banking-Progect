/**@typedef {import('./types').Link} Link*/

/**
 * @function BrandLink
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Brandink = (data, parrentClassName) => {
  
  if (Object.keys(data).length !== 1) return '';


  const currentClassName = parrentClassName
    ? `${parrentClassName}_BrandLink`
    : `_BrandLink`;

  return `
    <a
      class="${currentClassName}"
      href="${source}"
    >
      ${type === 'google' ? IconGoogle() : IconApple()}
    </a>
  `;
};
