/** @typedef {import('./types').Props} Props */

/**
 * @function Clint
 * @param {Props} brand
 * @param {string} parrentClassName
 * @returns
 */

export const Client = (brand, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__image`
    : `image`;

  const { source, description} = brand;

  return `
    <img
      data-type="brand"
      class="${currentClassName}"
      src="${source}"
      alt="${description}"
    />
  `;
};
