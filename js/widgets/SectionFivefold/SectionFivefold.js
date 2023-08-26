import { Title } from '../../shared/ui/index.js';
import { Client } from '../../features/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionFivefold
 * @param {Props} data
 * @param {'light' | 'dark'} theme
 * @returns {string}
 */

export const SectionFivefold = (data, theme = 'dark') => {
  const dataKeys = Object.keys(data);
  if (dataKeys.length !== 3) return '';
  const { name, title, brands } = data;
  if (!brands[theme].length) return '';

  const className = name ? name : 'SectionFivefold';

  return `
    <section class="${className}">
      ${title ? Title(title, className) : ''}
      <ul class="${className}__list">
        ${brands[theme].map((brand) => `
          <li class="${className}__item">
            ${Client(brand, className)}
          </li>`
          ).join('')
        }
      </ul>
    </section>
  `;
};
