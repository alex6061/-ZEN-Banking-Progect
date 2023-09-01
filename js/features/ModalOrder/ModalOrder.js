/**
 * @function ModalOrder
 * @param {Props} data
 * @returns {HTML}
 */

export const ModalOrder = () => {
  return `
    <div class="modal" id="modal">
      <div class="modal__body">
        <h4 class="modal__title">Order a consultation</h4>
        <form class="modal__form">
          <label class="modal__input input">
            <input id="name" type="text" placeholder="Name">
          </label>
          <label class="modal__input input">
            <input id="tel" type="tel" placeholder="Tel.">
          </label>
          <label class="modal__input input">
            <input id="email" type="email" placeholder="E-mail">
          </label>
          <select class="select input" placeholder="Connection">
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telegram">Telegram</option>
            <option value="Viber">Viber</option>
          </select>
          <label>
            <input class="modal__field input" type="checkbox">
            <a class="checkbox__text" href="#">Privacy policy</a>
          </label>
          <button type="submit" class="modal__button">Submit</button>
        </form>
      </div>
    </div>
  `;
};

// <span class="closeModalBtn">X</span>
// ${title ? Title(title, className) : ''}
// <form class="${className}__form">
//   ${
//     fields.length > 0
//       ? fields.map((field) => Input(field, className)).join('')
//       : ''
//   }
//   ${connections ? Connections(connections, className) : ''}
//   <div class="${className}__inner">
//     ${checkbox ? Checkbox(checkbox, className) : ''}
//     ${link ? Link(link, className) : ''}
//   </div>
//   ${button ? Button(button, className) : ''}
// </form>
