export const Client = (brand, parrentClassName) => {
  const currentClassName = parrentClassName
    ? `${parrentClassName}__image`
    : `image`;

  return `
    <img
      class="${currentClassName}"
      src="${brand.source}"
      alt="${brand.description}"
    />
  `;
};
