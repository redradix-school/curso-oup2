import React from 'react'
import { Provider } from 'react-redux'
import ConnectedForm from 'components/form'

export default class App extends React.Component {
  render() {
    return <Provider store={this.props.store}>
      <ConnectedForm/>
    </Provider>
  }
}
