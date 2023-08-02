/**
 * @function Burger
 * @param {string} parrentClassName 
 * @returns {string}
 */

export const Burger = (parrentClassName, theme = 'light') => {

  const currentClassName = parrentClassName
    ? `${parrentClassName}__burger`
    : 'burger';

  return `
    <button 
      class="${currentClassName}" 
      id="burger" 
    >
      <span data-theme="${theme}"></span>
    </button>
  `;
};
