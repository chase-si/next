import React from 'react'
import PropTypes from 'prop-types'

import { HomePageContainer } from './homePageStyle'

export class HomePage extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }


  handleClick = e => {
    if(this.homepage.contains(e.target)) {
      console.log('click inside')
    } else {
      console.log('click outside')
    }
  }

  render() {
    return (
      <HomePageContainer 
        ref = { homepage => this.homepage = homepage }
      >
        test
      </HomePageContainer >
    )
  }
}

HomePage.propTypes = {
  onClick: PropTypes.func
}