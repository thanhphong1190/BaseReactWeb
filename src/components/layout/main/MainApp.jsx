import React, { Component } from 'react'
import './MainApp.css'
import AppHeader from './header/Header'
import MainMenu from './main-menu/MainMenu'
import ContentBody from './content-body/ContentBody'


class MainApp extends Component {
  render() {
    return (
      <div className="MainApp">
        <div className="MainAppWrapper">
          <AppHeader/>
          <MainMenu { ...this.props }/>
          <ContentBody {...this.props}/>
          {/* <Footer/> */}
        </div>
      </div>
    );
  }
}

export default MainApp;