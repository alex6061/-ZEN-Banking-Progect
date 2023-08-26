/** @typedef {import('./types').Input} Input */

/**
 * @function Input
 * @param {Input} data
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const Input = (data, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__input`
    : `input`;

  const { type, placeholder } = data;

  return `
    <label class="${currentClassName}">
      <input id="name" type="${type}" placeholder="${placeholder}">
    </label>
  `;
};
