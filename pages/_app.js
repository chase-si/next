import App from 'next/app'
import React from 'react'
import withMobxStore from '../lib/with-mobx-store'
import { Provider } from 'mobx-react'

class MyApp extends App {
  render () {
    const {Component, pageProps, mobxStore} = this.props
    return (
      <Provider store={mobxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withMobxStore(MyApp)
