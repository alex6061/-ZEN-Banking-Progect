/** @typedef {import('./types').Props} Props */

/**
 * @function Columns
 * @param {Props} data
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const Columns = (data, parrentClassName) => {
  const {title, links} = data;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__column-item`
    : 'column-item';

  return `
    <div>
      <h3 class="${currentClassName}">${title}</h3>
      <ul>
        ${links ? links.map((link) => 
            `
              <li>${link}</li>
            `
          )}
      </ul>
    </div> 
  `;
};
