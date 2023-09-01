import { ModalOrder } from '../../features/index.js';

export const Order = () => {
  return `
    <div class="order" id="order">
      ${ModalOrder()}
    </div>
  `;
};
