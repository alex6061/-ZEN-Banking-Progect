/** @typedef {import('./types').Props} Props */

/**
 * @function Button
 * @param {Props} content
 * @param {String} parrentClassName
 * @returns {HTML}
 */

export const Button = (content, parrentClassName, theme = 'light') => {
  const dataVavules = Object.values(content);

  if (!dataVavules === 1) return '';

  const currentClassName = parrentClassName
    ? `${parrentClassName}__button`
    : `button`;

  return `
    <button 
      class=${currentClassName}
      data-theme="${theme}"
    >
      ${content}
    </button>  
  `;
};
