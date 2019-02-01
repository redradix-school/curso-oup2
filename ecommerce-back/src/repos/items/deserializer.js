const Item = rootRequire('core/item')

module.exports = (rowData) => new Item({
  id: rowData.product_id,
  cartId: rowData.cart_id
}, rowData.quantity)
