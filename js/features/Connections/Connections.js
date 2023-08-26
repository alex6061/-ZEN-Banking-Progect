/** @typedef {import('./types').Connections} Connections */

/**
 * @param {Connections} data
 * @param {string} parrentClassName
 * @returns
 */

export const Connections = (data, parrentClassName) => {
  const { value, content } = data;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__select`
    : 'select';

  return `
    <select class="${currentClassName} input" placeholder="Connection">
      <option value="${value}">${content}</option>
      <option value="${value}">${content}</option>
      <option value="${value}">${content}</option>
    </select>
  `;
};
