/**
 * @function Input
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const Input = (parrentClassName) => {
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
