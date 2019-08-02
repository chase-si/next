import React from 'react'

import { AppContainer }  from './indexStyle'
import { HomePage } from './containers/homePage'
import { Select } from '../components/select'

class App extends React.Component {
  state = {
    showHomePage: false
  }

  render() {
    return (
      <AppContainer >
        {this.state.showHomePage && <HomePage /> }
        <Select />
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
