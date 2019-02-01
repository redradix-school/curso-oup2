class Item {
  constructor({ id, cartId, title, price, img, category }, quantity) {
    Object.assign(this, { id, cartId, title, price, img, category, quantity })
  }

  // setters
  setProduct({ title, price, img, category }) {
    Object.assign(this, { title, price, img, category })
  }
  setCartId(cartId) {
    this.cartId = cartId
  }
  setQuantity(quantity) {
    this.quantity = quantity
  }
}

module.exports = Item
