import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// i18n
import { IntlProvider } from 'react-intl'
import setupI18n from './lib/setup-i18n'
// components
import ProductList from './app/ProductList'
import ProductDetails from './app/ProductDetails'
import ShoppingCart from './app/ShoppingCart'
import Checkout from './app/Checkout'

const locale = 'es-ES'

const App = () => {
  return (
    <IntlProvider messages={setupI18n(locale)} locale={locale}>
      <Router>
        <Switch>
          <Route path="/catalog/:page?" component={ProductList} />
          <Route path="/products/:productId" component={ProductDetails} />
          <Redirect path="/products" to="/catalog"/>
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
          <Redirect from="/" to="/catalog"/>
        </Switch>
      </Router>
    </IntlProvider>
  )
}

export default App
