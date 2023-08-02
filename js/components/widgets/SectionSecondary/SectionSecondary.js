import { Title } from '../../ui/Title/Title.js';
import { Text } from '../../ui/Text/Text.js';
import { Image } from '../../ui/Image/Image.js';

/** @typedef {import('../../../schema/types').SectionSecondary} Data*/

/**
 * @function SectionSecondary
 * @param {Data} data
 * @returns {string} HTML or empty
 */

export const SectionSecondary = (data) => {

  const dataValues = Object.values(data);

  if (dataValues.length !== 4) return '';

  const { name, title, texts, image } = data;

  return `
    <section class="${name}"> 
      ${title ? Title(title, name) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, name)).join('') : ''}
      ${image ? Image(image, name) : ''}
    </section>
  `;
};
