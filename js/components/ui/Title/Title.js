/**@typedef {import('./types.js').Title} Title */

/**
 * @function Title
 * @param {Title} title
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Title = (title, parrentClassName, theme = 'light') => {
  if (Object.keys(title).length !== 2) return '';

  const { priority, content } = title;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__title`
    : 'title';

  switch (priority) {
    default: return `<h1 class="${currentClassName}" data-theme="${theme}">${content}</h1>`;
    case 2: return `<h2 class="${currentClassName}" data-theme="${theme}">${content}</h2>`;
    case 3: return `<h3 class="${currentClassName}" data-theme="${theme}">${content}</h3>`;
    case 4: return `<h4 class="${currentClassName}" data-theme="${theme}">${content}</h4>`;
    case 5: return `<h5 class="${currentClassName}" data-theme="${theme}">${content}</h5>`;
    case 6: return `<h6 class="${currentClassName}" data-theme="${theme}">${content}</h6>`;
  };   
};
