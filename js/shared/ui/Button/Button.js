/** @typedef {import('./types').Props} Props */

/**
 * @function Button
 * @param {Props} button
 * @param {String} parrentClassName
 * @returns {HTML}
 */

export const Button = (button, parrentClassName) => {
  const dataValules = Object.values(button);

  if (!dataValules === 1) return '';

  const { content } = button;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__button`
    : `button`;

  return `
    <button 
      class=${currentClassName}
      id="button"
    >
      ${content}
    </button>  
  `;
};
