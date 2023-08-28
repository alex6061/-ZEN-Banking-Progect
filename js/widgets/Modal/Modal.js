import { Title, Input, Button, Link, Checkbox } from '../../shared/ui/index.js';
import { Connections } from '../../features/Connections/Connections.js';

/** @typedef {import('./types.js').Props} Props */

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
    <div class="${className}" id="modal">
    <span class="closeModalBtn">X</span>
      ${title ? Title(title, className) : ''}
      <form class="${className}__form">
        ${
          fields.length > 0
            ? fields.map((field) => Input(field, className)).join('')
            : ''
        }
        ${connections ? Connections(connections, className) : ''}
        <div class="${className}__inner">
          ${checkbox ? Checkbox(checkbox, className) : ''}
          ${link ? Link(link, className) : ''}
        </div>
        ${button ? Button(button, className) : ''}
      </form>
    </div>
  `;
};
