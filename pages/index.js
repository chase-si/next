import React from 'react'

import { AppContainer }  from './indexStyle'
import { HomePage } from './containers/homePage'

class App extends React.Component {


  render() {
    return (
      <AppContainer >
        <HomePage />
        <div className="h1">
          wcs
        </div>
      </AppContainer>
    )
  }
}

export default App;
