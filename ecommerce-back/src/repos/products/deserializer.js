const Product = rootRequire('core/product')
const casual = require('casual')

module.exports = (rowData) => {
  const description = casual.sentences(10)
  const available = casual.coin_flip
  const category = casual.title
  const product = new Product({
    ...rowData, category, description, available
  })
  product.setPrice(rowData.price, 'USD')
  return product
}
