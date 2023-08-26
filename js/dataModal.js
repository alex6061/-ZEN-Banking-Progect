export const dataModal = {
  name: "modal",
  title: "Order a consultation",
  fields: [
    {
      type: "text",
      placeholder: "text",
    },
    {
      type: "tel",
      placeholder: "Tel.",
    },
    {
      type: "email",
      placeholder: "E-mail",
    },
  ],
  connection: [
    {
      value: "WhatsApp",
      content: "WhatsApp",
    },
    {
      value: "Telegram",
      content: "Telegram",
    },
    {
      value: "Viber",
      content: "Viber",
    },
  ],
  checkboxMenu: {
    item: {
      type: "checkbox",
    },
    link: {
      source: "#",
      content: "Privacy policy",
    },
  },
  button: {
    type: "submit",
    content: "Submit",
  },
};
