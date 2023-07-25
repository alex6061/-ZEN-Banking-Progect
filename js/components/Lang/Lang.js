/**
 * @function Lang
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Lang = (parrentClassName) => {

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__lang` 
    : 'lang';

  return `
    <select id="lang" class="${currentClassName}">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  `;
};
