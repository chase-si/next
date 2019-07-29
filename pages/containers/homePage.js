import React from 'react'
import { HomePageContainer } from './homePageStyle'


export class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer ref = { homepage => this.homepage = homepage } >
        tes
      </HomePageContainer >
    )
  }
}