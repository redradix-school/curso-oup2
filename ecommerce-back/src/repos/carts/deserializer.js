const Cart = rootRequire('core/cart')

module.exports = (rowData) => new Cart({ id: rowData.id })
