import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ShoppingCartItem from '../molecules/ShoppingCartItem'

const ShoppingCartItems = ({ items, onModifyItemQuantity, onRemoveItem }) => (
  <Fragment>

    <div className="items-header">
      <span>
        <FormattedMessage id="label:product"/>
      </span>
      <span>
        <FormattedMessage id="label:price"/>
      </span>
      <span>
        <FormattedMessage id="label:quantity"/>
      </span>
      <span>
        <FormattedMessage id="label:total"/>
      </span>
    </div>

    { items.map(item => (
      <ShoppingCartItem key={item.id} item={item}
                        onModifyQuantity={
                          (quantity) => onModifyItemQuantity(item.id, quantity)
                        }
                        onRemove={() => onRemoveItem(item.id)} />
    )) }

  </Fragment>
)

ShoppingCartItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onModifyItemQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
}

export default ShoppingCartItems
