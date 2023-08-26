import { Title, Input, Button, Link } from '../../shared/ui/index.js';
import { Connections } from '../Connections/Connections.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function Modal
 * @param {Props} data
 * @returns {HTML}
 */

export const Modal = (data) => {
  const modalKeys = Object.keys(data);
  if (!modalKeys === 7) return '';

  const { name, title, fields, connections, checkbox, link, button } = data;

  const className = name ? name : 'modal';

  return `
    <div class="${className}">
      ${title ? Title(title, className) : ''}
      <form class="${className}__form">
        ${fields ? fields.map((field) => Input(field, className)).join('') : ''}
        ${connections ? Connections(connections, className) : ''}
        <div class="${className}__inner">
          ${checkbox ? Input(checkbox, className) : ''}
          ${link ? Link(link, className) : ''}
        </div>
        ${button ? Button(button, className) : ''}
      </form>
    </div>
  `;
};
