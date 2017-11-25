import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import Home from 'containers/Home'
import CarManagement from 'containers/CarManagement'
import CarInformation from 'containers/CarInformation'
import UserManagement from 'containers/UserManagement'

import "./Main.css"

class Main extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <Router history={history}>
      <div>
        <div>
          <div className="Main-Navbar">
            <h2 className="Main-Navbar site-name">I am NavBar</h2>
          </div>
          <div>
            <Button onClick={this.toggleVisibility} className="ui button"><i className="align justify icon"></i></Button>
          </div>
          <div className="MainSidebar">
            <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted>
                <Menu.Item name='home' as={Link} to='/'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item name='gamepad' as={Link} to='/carmanagement'>
                  <Icon name='gamepad' />
                  CarManagement
                </Menu.Item>
                <Menu.Item name='camera' as={Link} to='/carinformation'>
                  <Icon name='camera' />
                  Car Information
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/carmanagement" component={CarManagement}/>
                    <Route exact path="/carinformation" component={CarInformation}/>
                    <Route exact path="/usermanagement" component={UserManagement}/>
                  </Switch>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </div>
      </div>
      </Router>
    )
  }
}

export default Main 