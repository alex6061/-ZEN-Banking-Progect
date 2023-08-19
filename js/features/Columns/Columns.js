export const Columns = (data, parrentClassName) => {
  
  const {} = data;
  
  return `
    <ul>
      ${(item) =>ColumnsItem(item())}
    </ul>
  `;
};
