import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import AppLayout from '../layouts/AppLayout'
import ShoppingCartItems from '../organisms/ShoppingCartItems'
import IntroTitle from '../molecules/IntroTitle'
import OrderSummary from '../organisms/OrderSummary'
import Button from '../atoms/Button'

const ShoppingCart = ({ intl, history, shoppingCart, onModifyItemQuantity, onRemoveItem }) => (
  <AppLayout shoppingCart={shoppingCart}>
    <div className="shopping-cart-items">
      <IntroTitle title={intl.formatMessage({ id: 'title:shopping-cart' })}
                  subtitle={intl.formatMessage({ id: 'title:selected-products' })} />
      <ShoppingCartItems items={shoppingCart.items}
                         onModifyItemQuantity={onModifyItemQuantity}
                         onRemoveItem={onRemoveItem} />
    </div>

    <div className="cart-total">
      <OrderSummary shoppingCart={shoppingCart}
                    title={intl.formatMessage({ id: 'title:cart-total' })}
                    subtitle={intl.formatMessage({ id: 'title:order-summary' })} />
      <Button fullwidth action={() => history.push('/checkout')}>
        {intl.formatMessage({ id: 'button:to-checkout'  })}
      </Button>
    </div>

  </AppLayout>
)

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
  onModifyItemQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
}

export default injectIntl(ShoppingCart)
