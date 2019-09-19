import React from 'react'
import { Provider } from 'mobx-react'

import store from '../lib/stores'
import { HomePage } from './containers/homePage'
import { Select } from '../components/select'

class App extends React.Component {
  state = {
    showHomePage: false
  }

  render() {
    return (
        <div>
            {this.state.showHomePage && <HomePage /> }
            <Select />
            <button onClick={() => {this.setState({showHomePage: true})}}>
              show  
            </button>

            <button onClick={() => {this.setState({showHomePage: false})}}>
              hide  
            </button>
        </div>
    )
  }
}

export default App
