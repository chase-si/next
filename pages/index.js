import React from 'react'

import { AppContainer }  from './indexStyle'
import { HomePage } from './containers/homePage'

class App extends React.Component {
  render() {
    return (
      <AppContainer >
        <HomePage />
      </AppContainer>
    )
  }
}

export default App
