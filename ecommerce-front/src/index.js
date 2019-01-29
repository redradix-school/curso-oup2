import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// provider
import StateContext from './app/lib/StateContext'
// infrastructure
import config from './config'
import xhr from './infrastructure/xhr.js'
// services
import useServices from './app/lib/use-services'

const infra = {
  xhr: xhr(config)
}

const Wrapper = () => {
  const services = useServices(infra)
  return (
    <StateContext.Provider value={services}>
      <App />
    </StateContext.Provider>
  )
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
