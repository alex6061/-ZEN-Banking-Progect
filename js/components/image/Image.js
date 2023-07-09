/**@typedef {import('./types')} Data*/

/**
 * @function Image
 * @param {Data} image
 * @param {string} parrentClassName
 * @return {string} HTML or empty
 */

export const Image = (image, parrentClassName) => {
  if (Object.keys(data).length !== 2) return '';

  const { source, description } = image;

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__image`    
    : `image`;

  return `
    <img
      class="${currentClassName}"
      src="${source}"
      alt="${description}"
    />
  `;
};
 
