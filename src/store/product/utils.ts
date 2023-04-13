import { Product } from 'src/types/product';

export const convertCsvToProduct = (csvData: string) => {
  const result: Product[] = [];
  const rows = csvData.split('\n');

  for (let i = 1; i < rows.length; i++) {
    const [id, col2, col3, col4] = rows[i].split(',');
    // костыль
    // при разбивке по ',' вместо цены могут оказаться % или граммы
    const reg = /[₽]/;

    if (reg.test(col3)) {
      // если в 3 колонке цена, выводим товар и цену
      result.push({
        id,
        name: col2,
        price: parseInt(col3),
      });
    } else {
      // иначе, товар + %/г, и цена
      result.push({
        id,
        name: `${col2},${col3}`,
        price: parseInt(col4),
      });
    }
  }

  return result;
};
