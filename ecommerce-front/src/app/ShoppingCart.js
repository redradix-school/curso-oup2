import { compose, withProps } from 'recompose'
import ShoppingCart from '../ui/views/ShoppingCart'
import withServices from './lib/with-services'

export default compose(
  withServices,
  withProps(({ services }) => ({
    shoppingCart: services.shoppingCartService.getShoppingCart(),
    onModifyItemQuantity: services.shoppingCartService.modifyItemQuantity,
    onRemoveItem: services.shoppingCartService.removeItem
  }))
)(ShoppingCart)
