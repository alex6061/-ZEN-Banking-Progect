/** @typedef {import ('./Image.types').Image} Data*/

/**
 * @function Image
 * @param {Data} data
 * @param {string} parrentClassName
 * @return {string} HTML or empty
 */

export const Image = (data, parrentClassName) => {
  console.log(Image)
  if (Object.keys(data).length !== 2) return '';

  const { source, description } = data;

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
 
ч 