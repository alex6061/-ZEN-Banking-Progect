import { Title } from '../title/Title.js';
import { Text } from '../text/Text.js';
import { Image } from '../image/Image.js';

/** @typedef {import('../schema/types').SectionTernary} Data */

/**
 * @function SectionTernary
 * @param {Data} data
 * @returns {string}
 */

export const SectionTernary = (data) => {
  console.log(SectionTernary)
  const dataValues = Object.values(data);

  if (dataValues.length !== 4) return '';

  const { name, title, text, image } = data;

    
  const className = name;
    
  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${text.length > 0 ? text.map((t) => Text(t, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
    </section>
  `;
};
