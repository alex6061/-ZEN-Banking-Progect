import {Title} from './../../ui/Title/Title.js';
import {Text} from './../../ui/Text/Text.js';
import {Image} from './../../ui/Image/Image.js';
import {BrandLink} from './../../ui/Brandlink/BrandLink.js';

/**@typedef {import('./../../../schema/types').SectionPrimary} Data */

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
      <div class="${className}__inner">
        ${apple ? BrandLink(apple, className) : ''}
        ${google ? BrandLink(google, className) : ''}
      </div>
      ${image ? Image(image, className) : ''}
    </section>
  `;
};
