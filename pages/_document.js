import Document, { Head, Main, NextScript }  from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { GlobalStyle } from './indexStyle'
import { Provider } from 'mobx-react'

import store from '../lib/stores'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} {...store}/>))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
          <GlobalStyle />
        </Head>
        <body>
        <Provider {...store} >
        <div>

          <Main />
          <NextScript />
          </div>
        </Provider>  
        </body>
      </html>
    )
  }
}