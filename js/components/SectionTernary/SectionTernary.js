import { Title } from '../title/Title.js';
import { Text } from '../text/Text.js';
import { Image } from '../image/Image.js';

/** @typedef {import('../schema/types').SectionTernaryData} Data */

/**
 * @function SectionTernary
 * @param {Data} data
 * @returns {string}
 */

export const SectionTernary = (data) => {
  const dataValues = Object.values(data);

  if (dataValues.length !== 4) return '';

  const { name, title, texts, image } = data;

  const className = name;
    
  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
    </section>
  `;
};
