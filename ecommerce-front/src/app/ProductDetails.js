import { get } from 'lodash'
import { compose } from 'recompose'
import withServices from './lib/with-services'
import withProps from './lib/with-props'
import withEffect from './lib/with-effect'
import ProductDetails from '../ui/views/ProductDetails'

export default compose(
  withServices,
  withProps(({ services, match }) => ({
    data: services.productsService.getProduct(),
    shoppingCart: services.shoppingCartService.getShoppingCart(),
    onAddToCart: services.shoppingCartService.addProduct,
    productId: get(match, 'params.productId')
  })),
  withEffect(({ services, productId }) => {
    services.shoppingCartService.fetchShoppingCart()
    services.productsService.fetchProduct(productId)
  }, props => [props.productId]),
)(ProductDetails)
