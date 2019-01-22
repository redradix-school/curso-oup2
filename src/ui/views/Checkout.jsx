import React from 'react'
import AppLayout from '../layouts/AppLayout'
import VerticalSeparator from '../atoms/VerticalSeparator'

const Checkout = () => (
  <AppLayout className="checkout-page">
    <div className="checkout-forms">

      <VerticalSeparator />

      <div className="intro-title">
        <h1 className="beta">Delivery Address</h1>
        <p className="subtitle">Enter your address info</p>
      </div>

      <VerticalSeparator />

      <div className="form-group">

        <div className="field error half">
          <label>First Name</label>
          <input type="text"/>
          <span className="error-message">Some error</span>
        </div>

        <div className="field half">
          <label>Last Name</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Address (line 1)</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Address (line 2)</label>
          <input type="text"/>
        </div>

        <div className="field half">
          <label>Postal Code</label>
          <input type="text"/>
        </div>

        <div className="field half">
          <label>City/Town</label>
          <input type="text"/>
        </div>

        <div className="field half">
          <label>State/Province</label>
          <input type="text"/>
        </div>

        <div className="field half">
          <label>Country</label>
          <input type="text"/>
        </div>

        <div className="field half">
          <label>Phone</label>
          <input type="text"/>
        </div>

        <div className="field half">
          <label>Email</label>
          <input type="text"/>
        </div>

      </div>


    </div>

    <div className="checkout-summary">

      <div className="transparent-card">
        <div className="intro-title">
          <h1 className="beta">Delivery Method</h1>
          <p className="subtitle">Messenger service</p>
        </div>

        <VerticalSeparator />

        <div className="form-group radio-group">

          <label className="radio-label">
            <input type="radio" name="delivery" id="radio1"/>
            <span>Standard</span>
          </label>

          <label className="radio-label">
            <input type="radio" name="delivery" id="radio2"/>
            <span>Priority Mail</span>
          </label>

          <label className="radio-label">
            <input type="radio" name="delivery" id="radio3"/>
            <span>Express</span>
          </label>

        </div>

      </div>

      <VerticalSeparator />

      <div className="grey-card">

        <h1 className="beta">Your Order</h1>
        <span className="subtitle">Order details</span>

        <VerticalSeparator />

        <div className="row">
          <span className="label">Some Product</span>
          <span className="value">$119.99</span>
        </div>

        <div className="row">
          <span className="label">Shipping</span>
          <span className="value">Free</span>
        </div>

        <div className="row">
          <span className="label bold">Total</span>
          <span className="value bold">$119.99</span>
        </div>

      </div>

      <div className="button"><span>Purchase</span></div>

    </div>

  </AppLayout>
)

export default Checkout
