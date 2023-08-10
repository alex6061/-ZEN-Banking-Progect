import { Title, Text, Image } from "../../shared/ui/index.js";

import { BrandLink } from "../../features/index.js";

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionPrimaty
 * @param {Props} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataValue = Object.values(data);

  if (dataValue.length !== 4 && dataValue.length !== 5) return "";

  const { name, title, texts, image, link } = data;
  const { apple, google } = link;

  const className = name ? name : "section-primary";

  return `
    <section class="${className}"> 
      ${title ? Title(title, className) : ""}
      ${
        texts.length > 0
          ? texts.map((text) => Text(text, className)).join("")
          : ""
      }    
      <div class="${className}__inner">
        ${apple ? BrandLink(apple, className) : ""}
        ${google ? BrandLink(google, className) : ""}
      </div>
      ${image ? Image(image, className) : ""}
    </section>
  `;
};
