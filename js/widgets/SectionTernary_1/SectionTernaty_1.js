import { Title, Text, Button } from '../../shared/ui/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionTernaty_1
 * @param {Props} data
 * @returns {HTML}
 */

export const SectionTernaty_1 = (data) => {
  const dataKeys = Object.keys(data);
  if (!dataKeys === 4) return '';

  console.log({ SectionTernaty_1 });

  const { name, title, texts, button } = data;

  const className = name ? name : 'Cashback';

  return `
    <section class="${className}">
      ${title ? Title(title, className) : ''}
      <div class="${className}__wrapper">
        ${
          texts.length > 0
            ? texts.map((text) => Text(text, className)).join('')
            : ''
        }
      </div>
      ${button ? Button(button, className) : ''}
    </section>
  `;
};
