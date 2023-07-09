import {Title} from './../title/Title.js';
import {Text} from './../text/Text.js';
import {Image} from './../image/Image.js';
import {Brandlink} from './../brandlink/BrandLink.js';

/**@typedef {import('./../schema/types.ts').SectionPrimary} Data */

/**
 * @function SectionPrimaty
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {

  const dataValue = Object.values(data);

  if (dataValue.length !== 4 && dataValue.length !== 5) return '';

  const {name, title, texts, image, links} = data;
  
  const { apple, google } = links;

  const className = name 
    ? name
    : 'section-primary';

  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
      ${apple ? Brandlink(apple, className) : ''}
      ${google ? Brandlink(google, className) : ''}
    </section>
  `;
};
