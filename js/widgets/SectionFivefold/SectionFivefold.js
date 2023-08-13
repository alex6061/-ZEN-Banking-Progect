import { data } from '../../data.js';
import { Title } from '../../shared/ui/index.js';
import { Client } from '../../features/index.js';

/** @typedef {import('./types.js').Props} Props */

/**
 * @function SectionQuaternary
 * @param {data} data
 * @param {'light' | 'dark'} theme
 * @returns {string}
 */

export const SectionFivefold = (data, theme = 'light') => {
  const dataKeys = Object.keys(data);
  if (dataKeys.length !== 3) return '';
  const { name, title, brands } = data;

  if (!brands[theme].length) return '';
  const className = name ? name : 'SectionFivefold';

  const {} = brands.light;

  return `
  <section class="${className}">
  ${title ? Title(title, className) : ''}
  <ul class="${className}__list">
    ${
      brands.light.map((brand) =>
        `
          <li class="${className}__item">
            ${Client(brand, className)}
          </li>
        `
      ).join('')
    }
  </ul>
</section>
`;
};
