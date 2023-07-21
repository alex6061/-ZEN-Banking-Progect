import {Title} from '../title/Title.js';
import {Text} from '../text/Text.js';
import {Image} from './../image/Image.js';

/**
 * @function SectionSecondary
 * @param {Data} data
 * @returns {string} HTML or empty
 */

export const SectionSecondary = (name, data) => {
  
  const dataValue = Object.values(data);

  if (dataValue.length !== 3 && dataValue.length !== 4) return '';

  const { title, texts, image } = data;

  return `
    <section class="${name}"> 
      ${title ? Title(title, name) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, name)).join('') : ''}
      ${image ? Image(image, name) : ''}
    </section>
  `;
};
