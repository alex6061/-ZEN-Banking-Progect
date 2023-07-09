/**@typedef {import('./types').Link} Link*/

/**
 * @function BrandLink
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Brandink = (data, parrentClassName) => {
  
  if (Object.keys(data).length !== 1) return '';

  const { description,  } = links;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : `link`;

  return `
    <a
      class="${currentClassName}"
      href="${url}"
    >
      ${type === 'google' ? IconGoogle() : IconApple()}
    </a>
  `;
};
