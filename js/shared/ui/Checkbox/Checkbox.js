/** @typedef {import('./types').Checkbox} Checkbox  */

/**
 * @function Checkbox
 * @param {Checkbox} data
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const Checkbox = (data, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__checkbox`
    : `checkbox`;

  const { type, placeholder } = data;

  return `
    <label class="${currentClassName}">
      <input 
        id="checkbox" 
        type="${type}" 
        placeholder="${placeholder}">
    </label>
  `;
};
