import { Title, Text, Image } from '../../shared/ui/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionSecondary
 * @param {Props} data
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
