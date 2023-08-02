/**@typedef {import('./types.js').Text} Text*/

/**
 * @function Text
 * @param {string} text
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

export const Text = (text, parrentClassName, theme = 'light') => {
  if (!text) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';

  return `
    <p 
      class="${currentClassName}" 
      data-theme="${theme}"
    >
      ${text}
    </p>
  `;
}