import {Title} from './../title/Title.js';
import {Text} from './../text/Text.js';
import {Brandlink} from './../brandlink/BrandLink.js';

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  
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
      ${links ? Brandlink(appleLink, className) : ''}
      ${links ? Brandlink(googleLink, className) : ''}
    </section>
  `;
};
