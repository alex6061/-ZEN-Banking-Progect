/** @typedef {import('./types').Props} Props */

/**
 * @function Clint
 * @param {Props} clients
 * @param {string} parrentClassName
 * @returns
 */

export const Client = (clients, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__image`
    : `image`;

  const { source, description } = clients;

  return `
    <img
      data-type="brand"
      class="${currentClassName}"
      src="${source}"
      alt="${description}"
    />
  `;
};
