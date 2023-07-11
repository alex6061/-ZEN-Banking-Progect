import {Title} from './../title/Title.js';
import {Text} from './../text/Text.js';

/**@typedef {import('./../schema/types.ts').SectionCare} Data */

/**
 * @function SectionCare
 * @param {Data} data
 * @returns {string}
 */

export const SectionCare = (data) => {
  const dataValue = Object.values(data);

  if (dataValue.length !== 4) return '';

  const {name, title, text} = data;
  console.log({data})

  const className = name 
    ? name
    : 'section-primary';

  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ''}
      ${text.length > 0 ? text.map((t) => Text(t, className)).join('') : ''}
    </section>
  `;
};
