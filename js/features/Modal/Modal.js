import { dataModal } from '../../dataModal.js';
import { Title, Input } from '../../shared/ui/index.js';

/** @typedef {import('./types').dataModal} dataModal */

/**
 * @function Modal
 * @param {dataModal} dataModal
 * @returns
 */

export const Modal = (dataModal) => {
  const dataModalKeys = Object.keys(dataModal);
  if (!dataModalKeys === 6) return '';

  const { name, title, fields, select, checkbox, button } = dataModal;

  const className = name ? `${name}` : 'modal';

  return `
    <div class="${className}">
      ${title ? Title(title, className) : ''}
      ${fields ? fields.map((field) => Input(field, className)).join('') : ''}
      ${select ? '' : ''}
    </div>
  `;
};
