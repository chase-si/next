import React from 'react'

import { AppContainer }  from './indexStyle'
import { HomePage } from './containers/homePage'

class App extends React.Component {
  state = {
    showHomePage: false
  }

  render() {
    return (
      <AppContainer >
        {this.state.showHomePage && <HomePage /> }
        <button onClick={() => {this.setState({showHomePage: true})}}>
          show  
        </button>

        <button onClick={() => {this.setState({showHomePage: false})}}>
          hide  
        </button>
      </AppContainer>
    )
  }
}

export default App
