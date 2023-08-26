import { Title, Text, Image } from '../../shared/ui/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionTernary
 * @param {Props} data
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
      ${
        texts.length > 0
          ? texts.map((text) => Text(text, className)).join('')
          : ''
      }       
      ${image ? Image(image, className) : ''}
    </section>
  `;
};
