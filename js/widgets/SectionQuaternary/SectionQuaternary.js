import { Clients } from '../../shared/clients/Clients.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionQuaternary
 * @param {Props} data
 * @returns {string}
 */

export const SectionQuaternary = (data) => {
  const dataValues = Object.values(data);

  if (dataValues.length !== 2) return '';

  const { name } = data;

  const className = name ? name : 'clients';

  return `
    <ul class="${className}">
      ${Clients(className)}
    </ul>  
  `;
};
