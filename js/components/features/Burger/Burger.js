/**
 * @function Burger
 * @param {Object} data 
 * @param {string} parrentClassName 
 * @returns {string}
 */

export const Burger = (parrentClassName) => {

  const currentClassName = parrentClassName
    ? `${parrentClassName}__burger`
    : 'burger';

  return`
    <button class="${currentClassName}">
      <span></span>
    </button>
  `;
};
