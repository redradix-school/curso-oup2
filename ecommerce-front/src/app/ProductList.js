import { get } from 'lodash'
import { compose, withProps } from 'recompose'
import withEffect from './lib/with-effect'
import withServices from './lib/with-services'
import ProductList from '../ui/views/ProductList'

export default compose(
  withServices,
  withProps(({ services, match }) => ({
    data: services.productsService.getProducts(),
    shoppingCart: services.shoppingCartService.getShoppingCart(),
    page: Number(get(match, 'params.page', 1))
  })),
  withEffect(({ page, services }) => {
    services.productsService.fetchProducts(page)
  }, props => [props.page]),
)(ProductList)
