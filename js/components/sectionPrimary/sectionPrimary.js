import {Title} from './../title/Title.js';
import {Text} from './../text/Text.js';
import {Image} from './../image/Image.js';
import {BrandLink} from './../brandlink/BrandLink.js';

/**@typedef {import('./../schema/types.ts').SectionPrimary} Data */

/**
 * @function SectionPrimaty
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {

  const dataValue = Object.values(data);

  if (dataValue.length !== 4 && dataValue.length !== 5) return '';

  const {name, title, text, image, link} = data;
  
  const { apple, google } = link;

  const className = name 
    ? name
    : 'section-primary';

  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${text.length > 0 ? text.map((t) => Text(t, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
      ${apple ? BrandLink(apple, className) : ''}
      ${google ? BrandLink(google, className) : ''}
    </section>
  `;
};
