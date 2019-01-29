import { compose, withProps } from 'recompose'
import Checkout from '../ui/views/Checkout'
import withServices from './lib/with-services'

export default compose(
  withServices,
  withProps(({ services, history }) => ({
    shoppingCart: services.shoppingCartService.getShoppingCart(),
    onCheckout: async (values) => {
      await services.shoppingCartService.checkout(values)
      history.push('/')
    }
  }))
)(Checkout)
