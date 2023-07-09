import {Title} from './../title/Title.js';
import {Text} from './../text/Text.js';
import {Brandlink} from './../brandlink/BrandLink.js';
import {Image} from '../image/Image.js';


/**@typedef {import('./sectionPrimary.js').SectionPrimary} SectionPrimary */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  console.log(data)
  const dataValue = Object.values(data);

  if (dataValue.length !== 4 && dataValue.length !== 5) return '';

  const {name, title, texts, image, links} = data;

  const { appleLink, googleLink } = links;

  const className = name 
    ? name
    : 'section-primary';

  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
      ${links ? Brandlink(appleLink,'apple', className) : ''}
      ${links ? Brandlink(googleLink, 'google', className) : ''}
    </section>
  `;
};
