/**
 * @function NavLink
 * @param {string} link 
 * @param {string} parrentClassName 
 * @returns {string} HTML or empty
 */

export const ItemLink = (link, parrentClassName) => {
  if(Object.keys(link) !== 3) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__link` 
    : `__link`;

  const { priority, content, source } = link;

  switch (priority) {
    default: return `<a class="${currentClassName}" href="${source}">${content}</a>`;
    case 2: return `<a class="${currentClassName}" href="${source}">${content}</a>`;
    case 3: return `<a class="${currentClassName}" href="${source}">${content}</a>`;
    case 4: return `<a class="${currentClassName}" href="${source}">${content}</a>`;
    case 5: return `<a class="${currentClassName}" href="${source}">${content}</a>`;
  };   
};