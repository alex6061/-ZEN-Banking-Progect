import {Title} from '../title/Title.js';
import {Text} from '../text/Text.js';
import {Image} from './../image/Image.js';
/**
 * @function SectionWarranty
 * @param {Data} data
 * @returns {string} HTML or empty
 */

export const SectionWarranty = (data) => {
  
  const dataValue = Object.values(data);

  if (dataValue.length !== 3 && dataValue.length !== 4) return '';

  const {name, title, texts, image} = data;

  const className = name 
    ? name
    : 'section-warranty';

  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
    </section>
  `;
};
