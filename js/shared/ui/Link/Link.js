/**@typedef {import('./types').Link} Link */

/**
 * @function Link
 * @param {Link} link
 * @param {string} parrentClassName
 * @returns {string}
 */

export const Link = (link, parrentClassName) => {
  const linkValue = Object.keys(link);
  if (!linkValue === 2 && !linkValue === 3) return '';

  const { source, content } = link;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : 'link';

  return `
    <a 
      class="${currentClassName}"
      href="${source}"
    >
    ${content}
    </a>
  `;
};
