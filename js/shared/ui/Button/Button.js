/** @typedef {import('./types').Props} Props */

/**
 * @function Button
 * @param {Props} data
 * @param {String} parrentClassName
 * @returns
 */

export const Button = (data, parrentClassName, theme = 'light') => {
  const dataVavules = Object.values(data);

  if (!dataVavules === 1) return '';

  const { content } = data;

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
