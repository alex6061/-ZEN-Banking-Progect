import { IconCopyright } from '../../shared/icons/index.js';

/** @typedef {import('./types.ts').Props} Props */

/**
 * @function Copyright
 * @param {Props} data
 * @param {string} parrentClassName
 * @returns {HTML}
 */

export const Copyright = (data, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__copyright`
    : 'copyright';

  return `
    <button 
    class="${currentClassName}"
    >
      ${IconCopyright()}
    </button> 
  `;
};
