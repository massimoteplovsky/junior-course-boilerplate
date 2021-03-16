export const numberWithSpaces = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const maxBy = (getter, list) => list.reduce(
  (acc, item) => getter(acc) < getter(item) ? item : acc
);

export const minBy = (getter, list) => list.reduce(
  (acc, item) => getter(acc) > getter(item) ? item : acc
);

export const calcDiscount = (price, subPriceContent) => Math.floor(((subPriceContent - price) * 100 / subPriceContent));

export const getMinPrice = (products) => minBy(product => product.price, products).price;

export const getMaxPrice = (products) => maxBy(product => product.price, products).price;

export const getDiscount = (products) => {
  const discounts = products.reduce((acc, {price, subPriceContent}) => {
    const prodDiscount = calcDiscount(price, subPriceContent);
    return prodDiscount > 0 ? [...acc, prodDiscount] : acc;
  }, []);
  return Math.min.apply(null, discounts);
}

export const getCategories = (products) => [...new Set(products.map(({category}) => category))];

export const toUpperCaseLetter = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const toInt = value => {
  const integer = (value || '').replace(/\D/g, '');
  return integer.length ? parseInt(integer, 10) : 0;
};

export const range = to => [...Array(to).keys()].map(i => i + 1);

export const declOfNum = (number, textForms) => {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return textForms[2];
    if (n1 > 1 && n1 < 5) return textForms[1];
    if (n1 === 1) return textForms[0];
    return textForms[2];
}

export const generateCustomArray = (quantity, start) => Array.from(Array(quantity), (_, index) => start + index * 1);
