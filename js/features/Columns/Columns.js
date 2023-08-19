/**
 * @function Columns
 * @param {*} data 
 * @param {string} parrentClassName 
 * @returns {HTML}
 */


export const Columns = (data, parrentClassName) => {
  
  const {} = data;

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__column-item` 
    : 'column-item';

  return `
    <div>
      <h3>${title}</h3>
      <ul>
        ${(item) =>ColumnsItem(item(
          `
            <li class="">${text}</li>
          `
        ).join())}
      </ul>
    </div> 
  `;
};
